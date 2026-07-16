
CREATE TABLE public.challenge_config (
  id int PRIMARY KEY DEFAULT 1,
  start_date date NOT NULL,
  total_days int NOT NULL DEFAULT 90,
  initial_pot numeric NOT NULL DEFAULT 400,
  CONSTRAINT single_row CHECK (id = 1)
);

CREATE TABLE public.participants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.daily_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  participant_id uuid NOT NULL REFERENCES public.participants(id) ON DELETE CASCADE,
  log_date date NOT NULL,
  workout_done boolean NOT NULL DEFAULT false,
  cardio_minutes int NOT NULL DEFAULT 0,
  diet_followed boolean NOT NULL DEFAULT false,
  extra_free_meals int NOT NULL DEFAULT 0,
  notes text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (participant_id, log_date)
);

CREATE INDEX ON public.daily_logs (participant_id, log_date);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.challenge_config TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.participants TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.daily_logs TO anon, authenticated;
GRANT ALL ON public.challenge_config TO service_role;
GRANT ALL ON public.participants TO service_role;
GRANT ALL ON public.daily_logs TO service_role;

ALTER TABLE public.challenge_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.daily_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public read config" ON public.challenge_config FOR SELECT USING (true);
CREATE POLICY "public write config" ON public.challenge_config FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "public read participants" ON public.participants FOR SELECT USING (true);
CREATE POLICY "public write participants" ON public.participants FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "public read logs" ON public.daily_logs FOR SELECT USING (true);
CREATE POLICY "public write logs" ON public.daily_logs FOR ALL USING (true) WITH CHECK (true);

CREATE OR REPLACE FUNCTION public.set_updated_at() RETURNS trigger AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER daily_logs_updated_at BEFORE UPDATE ON public.daily_logs
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

INSERT INTO public.challenge_config (id, start_date, total_days, initial_pot)
VALUES (1, '2026-07-13', 90, 400)
ON CONFLICT (id) DO UPDATE
SET start_date = EXCLUDED.start_date,
    total_days = EXCLUDED.total_days,
    initial_pot = EXCLUDED.initial_pot;

INSERT INTO public.participants (name)
VALUES ('Gustavo'), ('Geovana')
ON CONFLICT (name) DO NOTHING;
