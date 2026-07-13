export type DailyLog = {
  id: string;
  participant_id: string;
  log_date: string; // yyyy-mm-dd
  workout_done: boolean;
  cardio_minutes: number;
  diet_followed: boolean;
  extra_free_meals: number;
  notes: string | null;
};

export const FINE_VALUE = 25;
export const WEEKLY_WORKOUT_TARGET = 5;

export function cardioPoints(min: number): number {
  if (min >= 30) return 3;
  if (min >= 20) return 2;
  if (min >= 10) return 1;
  return 0;
}

export function pointsForLog(l: Pick<DailyLog, "workout_done" | "cardio_minutes" | "diet_followed">): number {
  return (l.workout_done ? 2 : 0) + cardioPoints(l.cardio_minutes) + (l.diet_followed ? 3 : 0);
}

/** Returns 0-based week index from start_date for a given log_date. */
export function weekIndex(startDate: string, logDate: string): number {
  const start = new Date(startDate + "T00:00:00");
  const d = new Date(logDate + "T00:00:00");
  const diff = Math.floor((d.getTime() - start.getTime()) / 86400000);
  return Math.floor(diff / 7);
}

export function dayIndex(startDate: string, logDate: string): number {
  const start = new Date(startDate + "T00:00:00");
  const d = new Date(logDate + "T00:00:00");
  return Math.floor((d.getTime() - start.getTime()) / 86400000);
}

export function todayISO(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function daysBetween(startDate: string, endDate: string): number {
  const s = new Date(startDate + "T00:00:00");
  const e = new Date(endDate + "T00:00:00");
  return Math.floor((e.getTime() - s.getTime()) / 86400000);
}

export type Stats = {
  totalPoints: number;
  totalFines: number;
  workoutDays: number;
  cardioMinutes: number;
  dietDays: number;
  extraFreeMeals: number;
  currentStreak: number;
};

export function computeStats(logs: DailyLog[], startDate: string, totalDays: number): Stats {
  let totalPoints = 0;
  let workoutDays = 0;
  let cardioMinutes = 0;
  let dietDays = 0;
  let extraFreeMeals = 0;

  const byWeek = new Map<number, { workouts: number; extras: number }>();

  for (const l of logs) {
    totalPoints += pointsForLog(l);
    if (l.workout_done) workoutDays++;
    cardioMinutes += l.cardio_minutes;
    if (l.diet_followed) dietDays++;
    extraFreeMeals += l.extra_free_meals;

    const wi = weekIndex(startDate, l.log_date);
    if (wi < 0) continue;
    const w = byWeek.get(wi) ?? { workouts: 0, extras: 0 };
    if (l.workout_done) w.workouts++;
    w.extras += l.extra_free_meals;
    byWeek.set(wi, w);
  }

  // Fines: only for completed weeks (past weeks relative to today)
  const today = todayISO();
  const currentWeek = Math.max(0, weekIndex(startDate, today));
  let fineCount = 0;
  for (const [wi, w] of byWeek) {
    if (wi < currentWeek) {
      // completed week
      const missed = Math.max(0, WEEKLY_WORKOUT_TARGET - w.workouts);
      fineCount += missed + w.extras;
    } else {
      // current week — only count extras already committed
      fineCount += w.extras;
    }
  }

  // Streak: consecutive days ending at today (or last log day) with workout_done OR diet_followed
  const logByDate = new Map(logs.map((l) => [l.log_date, l]));
  let streak = 0;
  const start = new Date(startDate + "T00:00:00");
  const cur = new Date(today + "T00:00:00");
  while (cur.getTime() >= start.getTime()) {
    const iso = cur.toISOString().slice(0, 10);
    const l = logByDate.get(iso);
    if (l && (l.workout_done || l.diet_followed || l.cardio_minutes > 0)) {
      streak++;
      cur.setDate(cur.getDate() - 1);
    } else break;
  }

  return {
    totalPoints,
    totalFines: fineCount,
    workoutDays,
    cardioMinutes,
    dietDays,
    extraFreeMeals,
    currentStreak: streak,
  };
}
