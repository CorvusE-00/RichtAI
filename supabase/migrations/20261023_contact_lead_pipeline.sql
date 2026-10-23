/* Additive fields for the server-side lead delivery pipeline. */

ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS intent text,
  ADD COLUMN IF NOT EXISTS source text,
  ADD COLUMN IF NOT EXISTS channel_interest text,
  ADD COLUMN IF NOT EXISTS locale text,
  ADD COLUMN IF NOT EXISTS submission_id uuid,
  ADD COLUMN IF NOT EXISTS notification_status text,
  ADD COLUMN IF NOT EXISTS notified_at timestamptz,
  ADD COLUMN IF NOT EXISTS notification_error text;

CREATE UNIQUE INDEX IF NOT EXISTS leads_submission_id_unique
  ON leads (submission_id);
