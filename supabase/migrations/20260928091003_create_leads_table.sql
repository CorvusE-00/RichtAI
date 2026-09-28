/*
# Create leads table for Richt Ai contact form

1. New Tables
- `leads`
  - `id` (uuid, primary key)
  - `name` (text, not null) — visitor's full name
  - `email` (text, not null) — visitor's email address
  - `phone` (text, nullable) — optional phone number
  - `business_name` (text, nullable) — optional business/clinic name
  - `message` (text, nullable) — optional message from the visitor
  - `status` (text, default 'new') — lead status for tracking
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `leads`.
- Allow anon + authenticated INSERT only (public contact form).
- No SELECT/UPDATE/DELETE for anon — only authenticated (admin) can read leads later.
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  business_name text,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon) to insert new leads from the contact form
DROP POLICY IF EXISTS "anon_insert_leads" ON leads;
CREATE POLICY "anon_insert_leads"
  ON leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users (admin) can read leads
DROP POLICY IF EXISTS "auth_select_leads" ON leads;
CREATE POLICY "auth_select_leads"
  ON leads FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users (admin) can update lead status
DROP POLICY IF EXISTS "auth_update_leads" ON leads;
CREATE POLICY "auth_update_leads"
  ON leads FOR UPDATE
  TO authenticated
  USING (true) WITH CHECK (true);

-- Only authenticated users (admin) can delete leads
DROP POLICY IF EXISTS "auth_delete_leads" ON leads;
CREATE POLICY "auth_delete_leads"
  ON leads FOR DELETE
  TO authenticated
  USING (true);
