import { createFileRoute } from "@tanstack/react-router";
import { Fragment } from "react";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { toast, Toaster } from "sonner";
import { Dumbbell, Flame, Salad, Trophy, Calendar, Zap, AlertTriangle, Coins } from "lucide-react";
import {
  computeStats,
  FINE_VALUE,
  cardioPoints,
  pointsForLog,
  todayISO,
  dayIndex,
  type DailyLog,
} from "@/lib/challenge";

export const Route = createFileRoute("/")({ component: Home });

type Participant = { id: string; name: string };
type Config = { start_date: string; total_days: number; initial_pot: number };

function Home() {
  const [config, setConfig] = useState<Config | null>(null);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [logs, setLogs] = useState<DailyLog[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadAll() {
    const [c, p, l] = await Promise.all([
      supabase.from("challenge_config").select("*").eq("id", 1).maybeSingle(),
      supabase.from("participants").select("*").order("name"),
      supabase.from("daily_logs").select("*").order("log_date", { ascending: false }),
    ]);
    if (c.data) setConfig(c.data as Config);
    if (p.data) setParticipants(p.data as Participant[]);
    if (l.data) setLogs(l.data as DailyLog[]);
    setLoading(false);
  }

  useEffect(() => {
    loadAll();
    const ch = supabase
      .channel("daily_logs_changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "daily_logs" }, loadAll)
      .subscribe();
    return () => {
      supabase.removeChannel(ch);
    };
  }, []);

  if (loading || !config) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Carregando desafio…
      </div>
    );
  }

  const today = todayISO();
  const dayNum = Math.max(0, dayIndex(config.start_date, today)) + 1;
  const progress = Math.min(100, (dayNum / config.total_days) * 100);
  const started = new Date(config.start_date + "T00:00:00") <= new Date();

  const stats = participants.map((p) => ({
    p,
    stats: computeStats(
      logs.filter((l) => l.participant_id === p.id),
      config.start_date,
      config.total_days,
    ),
  }));

  const ranking = [...stats].sort((a, b) => {
    if (b.stats.totalPoints !== a.stats.totalPoints) return b.stats.totalPoints - a.stats.totalPoints;
    return a.stats.totalFines - b.stats.totalFines;
  });

  const potFromFines = stats.reduce((sum, s) => sum + s.stats.totalFines * FINE_VALUE, 0);
  const totalPot = config.initial_pot + potFromFines;

  return (
    <div className="min-h-screen">
      <Toaster richColors position="top-center" />
      <header className="border-b border-border/60 backdrop-blur bg-background/40 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl grid place-items-center bg-primary/15 text-primary">
              <Dumbbell className="size-5" />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">Desafio Fitness do Casal</h1>
              <p className="text-xs text-muted-foreground">Gusta vs Geovana · 90 dias</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Badge variant="outline" className="gap-1">
              <Calendar className="size-3" />
              {started ? `Dia ${dayNum}/${config.total_days}` : `Início em ${config.start_date}`}
            </Badge>
            <Badge className="gap-1 bg-accent text-accent-foreground">
              <Coins className="size-3" /> R$ {totalPot.toFixed(2)}
            </Badge>
          </div>
        </div>
        {started && (
          <div className="max-w-6xl mx-auto px-4 pb-3">
            <Progress value={progress} className="h-1.5" />
          </div>
        )}
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        {/* Ranking hero */}
        <section className="grid md:grid-cols-2 gap-4">
          {ranking.map(({ p, stats }, idx) => (
            <Card
              key={p.id}
              className={`relative overflow-hidden border-border/60 ${idx === 0 ? "card-glow" : ""}`}
            >
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  background:
                    idx === 0
                      ? "var(--gradient-hero)"
                      : "linear-gradient(135deg, oklch(0.27 0.03 250), transparent)",
                }}
              />
              <CardContent className="relative p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                      {idx === 0 ? "1º Lugar" : "2º Lugar"}
                    </div>
                    <h2 className="text-3xl font-bold">{p.name}</h2>
                  </div>
                  {idx === 0 && <Trophy className="size-8 text-warning" />}
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <Stat label="Pontos" value={stats.totalPoints} accent />
                  <Stat label="Multas" value={stats.totalFines} />
                  <Stat label="Streak" value={`${stats.currentStreak}d`} />
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Dumbbell className="size-3" /> {stats.workoutDays} treinos
                  </span>
                  <span className="flex items-center gap-1">
                    <Flame className="size-3" /> {stats.cardioMinutes} min cardio
                  </span>
                  <span className="flex items-center gap-1">
                    <Salad className="size-3" /> {stats.dietDays} dias dieta
                  </span>
                  {stats.extraFreeMeals > 0 && (
                    <span className="flex items-center gap-1 text-destructive">
                      <AlertTriangle className="size-3" /> {stats.extraFreeMeals} livre extra
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        <Tabs defaultValue="log" className="w-full">
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger value="log">Registrar</TabsTrigger>
            <TabsTrigger value="history">Histórico</TabsTrigger>
            <TabsTrigger value="rules">Regras</TabsTrigger>
          </TabsList>

          <TabsContent value="log" className="mt-4">
            <div className="grid md:grid-cols-2 gap-4">
              {participants.map((p) => (
                <LogForm key={p.id} participant={p} logs={logs} onSaved={loadAll} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history" className="mt-4">
            <HistoryView participants={participants} logs={logs} startDate={config.start_date} />
          </TabsContent>

          <TabsContent value="rules" className="mt-4">
            <RulesCard pot={totalPot} initialPot={config.initial_pot} finesTotal={potFromFines} />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t border-border/40 mt-12 py-6 text-center text-xs text-muted-foreground">
        "mas eu achei que…" não é aceito. R$ 5,00 para a caixinha. 💪
      </footer>
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: string | number; accent?: boolean }) {
  return (
    <div>
      <div className={`text-3xl font-bold ${accent ? "gradient-text" : ""}`}>{value}</div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
}

function LogForm({
  participant,
  logs,
  onSaved,
}: {
  participant: Participant;
  logs: DailyLog[];
  onSaved: () => void;
}) {
  const [date, setDate] = useState(todayISO());
  const existing = useMemo(
    () => logs.find((l) => l.participant_id === participant.id && l.log_date === date),
    [logs, participant.id, date],
  );

  const [workout, setWorkout] = useState(false);
  const [cardio, setCardio] = useState(0);
  const [diet, setDiet] = useState(false);
  const [freeExtra, setFreeExtra] = useState(0);
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setWorkout(existing?.workout_done ?? false);
    setCardio(existing?.cardio_minutes ?? 0);
    setDiet(existing?.diet_followed ?? false);
    setFreeExtra(existing?.extra_free_meals ?? 0);
    setNotes(existing?.notes ?? "");
  }, [existing]);

  const points = pointsForLog({ workout_done: workout, cardio_minutes: cardio, diet_followed: diet });

  async function save() {
    setSaving(true);
    const payload = {
      participant_id: participant.id,
      log_date: date,
      workout_done: workout,
      cardio_minutes: cardio,
      diet_followed: diet,
      extra_free_meals: freeExtra,
      notes: notes || null,
    };
    const { error } = await supabase
      .from("daily_logs")
      .upsert(payload, { onConflict: "participant_id,log_date" });
    setSaving(false);
    if (error) toast.error("Erro ao salvar: " + error.message);
    else {
      toast.success(`Registro de ${participant.name} salvo (+${points} pts)`);
      onSaved();
    }
  }

  return (
    <Card className="border-border/60">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{participant.name}</CardTitle>
          <Badge variant="secondary" className="gap-1">
            <Zap className="size-3" /> +{points} pts
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor={`d-${participant.id}`} className="text-xs">
            Data
          </Label>
          <Input
            id={`d-${participant.id}`}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1"
          />
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
          <div className="flex items-center gap-2">
            <Dumbbell className="size-4 text-primary" />
            <div>
              <div className="text-sm font-medium">Treino realizado</div>
              <div className="text-xs text-muted-foreground">+2 pontos</div>
            </div>
          </div>
          <Switch checked={workout} onCheckedChange={setWorkout} />
        </div>

        <div className="p-3 rounded-lg bg-secondary/50">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="size-4 text-accent" />
            <div className="text-sm font-medium">Cardio (minutos)</div>
            <Badge variant="outline" className="ml-auto text-xs">
              +{cardioPoints(cardio)} pts
            </Badge>
          </div>
          <div className="flex gap-2">
            {[0, 10, 20, 30, 45].map((m) => (
              <Button
                key={m}
                type="button"
                size="sm"
                variant={cardio === m ? "default" : "outline"}
                onClick={() => setCardio(m)}
                className="flex-1"
              >
                {m}
              </Button>
            ))}
            <Input
              type="number"
              min={0}
              value={cardio}
              onChange={(e) => setCardio(Number(e.target.value) || 0)}
              className="w-20"
            />
          </div>
        </div>

        <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
          <div className="flex items-center gap-2">
            <Salad className="size-4 text-success" />
            <div>
              <div className="text-sm font-medium">Dieta cumprida</div>
              <div className="text-xs text-muted-foreground">+3 pontos</div>
            </div>
          </div>
          <Switch checked={diet} onCheckedChange={setDiet} />
        </div>

        <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/30">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="size-4 text-destructive" />
              <div className="text-sm font-medium">Refeições livres EXTRAS</div>
            </div>
            <div className="text-xs text-destructive">R$ {FINE_VALUE} cada</div>
          </div>
          <p className="text-xs text-muted-foreground mb-2">
            Você tem 1 refeição livre/semana grátis. Registre aqui só as extras.
          </p>
          <div className="flex gap-2">
            {[0, 1, 2, 3].map((n) => (
              <Button
                key={n}
                type="button"
                size="sm"
                variant={freeExtra === n ? "destructive" : "outline"}
                onClick={() => setFreeExtra(n)}
                className="flex-1"
              >
                {n}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <Label htmlFor={`n-${participant.id}`} className="text-xs">
            Notas / comprovação
          </Label>
          <Textarea
            id={`n-${participant.id}`}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Link da foto, refeições, treino..."
            className="mt-1 min-h-[70px]"
          />
        </div>

        <Button onClick={save} disabled={saving} className="w-full font-semibold">
          {saving ? "Salvando..." : existing ? "Atualizar dia" : "Salvar dia"}
        </Button>
      </CardContent>
    </Card>
  );
}

function HistoryView({
  participants,
  logs,
  startDate,
}: {
  participants: Participant[];
  logs: DailyLog[];
  startDate: string;
}) {
  const dates = Array.from(new Set(logs.map((l) => l.log_date))).sort((a, b) => b.localeCompare(a));

  if (dates.length === 0)
    return (
      <Card>
        <CardContent className="p-8 text-center text-muted-foreground">
          Nenhum registro ainda. Comece a preencher a partir de {startDate}!
        </CardContent>
      </Card>
    );

  return (
    <Card className="border-border/60">
      <CardContent className="p-0">
        <div className="grid grid-cols-[1fr_repeat(2,1fr)] gap-px bg-border/40 text-sm">
          <div className="p-3 bg-card font-semibold text-xs uppercase tracking-wider text-muted-foreground">
            Data
          </div>
          {participants.map((p) => (
            <div
              key={p.id}
              className="p-3 bg-card font-semibold text-xs uppercase tracking-wider text-muted-foreground"
            >
              {p.name}
            </div>
          ))}
          {dates.map((d) => (
            <Fragment key={d}>
              <div className="p-3 bg-card font-medium">
                {formatDate(d)}
              </div>
              {participants.map((p) => {
                const l = logs.find((x) => x.participant_id === p.id && x.log_date === d);
                if (!l)
                  return (
                    <div key={`${p.id}-${d}`} className="p-3 bg-card text-muted-foreground text-xs">
                      —
                    </div>
                  );
                const pts = pointsForLog(l);
                return (
                  <div key={`${p.id}-${d}`} className="p-3 bg-card text-xs space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="secondary" className="text-xs">
                        +{pts}
                      </Badge>
                      {l.workout_done && <Dumbbell className="size-3 text-primary" />}
                      {l.cardio_minutes > 0 && (
                        <span className="flex items-center gap-0.5 text-accent">
                          <Flame className="size-3" />
                          {l.cardio_minutes}m
                        </span>
                      )}
                      {l.diet_followed && <Salad className="size-3 text-success" />}
                      {l.extra_free_meals > 0 && (
                        <span className="flex items-center gap-0.5 text-destructive">
                          <AlertTriangle className="size-3" />
                          {l.extra_free_meals}
                        </span>
                      )}
                    </div>
                    {l.notes && <div className="text-muted-foreground truncate">{l.notes}</div>}
                  </div>
                );
              })}
            </Fragment>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y.slice(2)}`;
}

function RulesCard({
  pot,
  initialPot,
  finesTotal,
}: {
  pot: number;
  initialPot: number;
  finesTotal: number;
}) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Card className="border-border/60 card-glow">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Coins className="size-5 text-accent" /> Caixinha
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-5xl font-bold gradient-text">R$ {pot.toFixed(2)}</div>
          <div className="text-sm text-muted-foreground space-y-1">
            <div>Aposta inicial: R$ {initialPot.toFixed(2)}</div>
            <div>Multas acumuladas: R$ {finesTotal.toFixed(2)}</div>
          </div>
          <p className="text-xs text-muted-foreground pt-2 border-t border-border/40">
            O vencedor leva tudo — desde que cumpra pelo menos <strong>10% de perda de peso</strong>,{" "}
            <strong>5 cm na cintura</strong> ou evolução comprovada nas fotos.
          </p>
        </CardContent>
      </Card>

      <Card className="border-border/60">
        <CardHeader>
          <CardTitle>Pontuação & Multas</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-3">
          <Rule icon={<Dumbbell className="size-4 text-primary" />} label="Treino realizado" val="+2 pts" />
          <Rule icon={<Flame className="size-4 text-accent" />} label="Cardio 10 / 20 / 30+ min" val="+1 / +2 / +3" />
          <Rule icon={<Salad className="size-4 text-success" />} label="Dieta do dia" val="+3 pts" />
          <div className="border-t border-border/40 my-2" />
          <Rule
            icon={<AlertTriangle className="size-4 text-destructive" />}
            label="Cada treino abaixo da meta (5/sem)"
            val={`R$ ${FINE_VALUE}`}
            danger
          />
          <Rule
            icon={<AlertTriangle className="size-4 text-destructive" />}
            label="Cada refeição livre extra"
            val={`R$ ${FINE_VALUE}`}
            danger
          />
        </CardContent>
      </Card>

      <Card className="border-border/60 md:col-span-2">
        <CardHeader>
          <CardTitle>Como comprovar</CardTitle>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-3 gap-4 text-sm">
          <div>
            <div className="font-semibold flex items-center gap-2 mb-1">
              <Dumbbell className="size-4 text-primary" /> Treino
            </div>
            <p className="text-muted-foreground text-xs">
              Foto na academia, print do app ou vídeo + smartwatch. Até 23h59 do mesmo dia.
            </p>
          </div>
          <div>
            <div className="font-semibold flex items-center gap-2 mb-1">
              <Flame className="size-4 text-accent" /> Cardio
            </div>
            <p className="text-muted-foreground text-xs">
              Print do smartwatch ou app com tempo e data.
            </p>
          </div>
          <div>
            <div className="font-semibold flex items-center gap-2 mb-1">
              <Salad className="size-4 text-success" /> Dieta
            </div>
            <p className="text-muted-foreground text-xs">
              Foto das refeições principais ou registro em app compartilhado.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Rule({
  icon,
  label,
  val,
  danger,
}: {
  icon: React.ReactNode;
  label: string;
  val: string;
  danger?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {icon}
        <span>{label}</span>
      </div>
      <Badge variant={danger ? "destructive" : "secondary"}>{val}</Badge>
    </div>
  );
}
