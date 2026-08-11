ALTER TABLE public.daily_logs
  ADD COLUMN IF NOT EXISTS workout_justification text;
