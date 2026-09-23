-- Notifications: lecture individuelle des broadcasts et idempotence.
-- A executer dans Supabase SQL Editor avant le deploiement du schema Prisma.

ALTER TABLE notifications
  ADD COLUMN IF NOT EXISTS dedupe_key TEXT;

CREATE UNIQUE INDEX IF NOT EXISTS notifications_dedupe_key_key
  ON notifications (dedupe_key)
  WHERE dedupe_key IS NOT NULL;

CREATE INDEX IF NOT EXISTS notifications_user_read_created_idx
  ON notifications (user_id, is_read, created_at);

CREATE TABLE IF NOT EXISTS notification_reads (
  id TEXT PRIMARY KEY,
  notification_id TEXT NOT NULL REFERENCES notifications(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  read_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT notification_reads_notification_user_key UNIQUE (notification_id, user_id)
);

CREATE INDEX IF NOT EXISTS notification_reads_user_read_at_idx
  ON notification_reads (user_id, read_at);

CREATE INDEX IF NOT EXISTS notification_reads_notification_idx
  ON notification_reads (notification_id);

-- Defense en profondeur pour les acces directs via Supabase.
-- Le backend Prisma utilise la connexion serveur et conserve ses controles RBAC.
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE notification_reads ENABLE ROW LEVEL SECURITY;
ALTER TABLE push_subscriptions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS notifications_select_own_or_broadcast ON notifications;
CREATE POLICY notifications_select_own_or_broadcast
  ON notifications FOR SELECT
  USING (user_id IS NULL OR user_id = auth.uid()::text);

DROP POLICY IF EXISTS notification_reads_select_own ON notification_reads;
CREATE POLICY notification_reads_select_own
  ON notification_reads FOR SELECT
  USING (user_id = auth.uid()::text);

DROP POLICY IF EXISTS notification_reads_insert_own ON notification_reads;
CREATE POLICY notification_reads_insert_own
  ON notification_reads FOR INSERT
  WITH CHECK (user_id = auth.uid()::text);

DROP POLICY IF EXISTS push_subscriptions_select_own ON push_subscriptions;
CREATE POLICY push_subscriptions_select_own
  ON push_subscriptions FOR SELECT
  USING (user_id = auth.uid()::text);

DROP POLICY IF EXISTS push_subscriptions_insert_own ON push_subscriptions;
CREATE POLICY push_subscriptions_insert_own
  ON push_subscriptions FOR INSERT
  WITH CHECK (user_id = auth.uid()::text);

DROP POLICY IF EXISTS push_subscriptions_update_own ON push_subscriptions;
CREATE POLICY push_subscriptions_update_own
  ON push_subscriptions FOR UPDATE
  USING (user_id = auth.uid()::text)
  WITH CHECK (user_id = auth.uid()::text);

DROP POLICY IF EXISTS push_subscriptions_delete_own ON push_subscriptions;
CREATE POLICY push_subscriptions_delete_own
  ON push_subscriptions FOR DELETE
  USING (user_id = auth.uid()::text);
