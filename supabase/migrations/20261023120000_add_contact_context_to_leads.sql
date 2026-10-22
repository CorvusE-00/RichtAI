/*
# Add contact intent context to existing leads

These nullable columns preserve compatibility with existing rows while allowing
new submissions to retain the CTA intent, originating surface, channel interest,
and site locale.
*/

ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS intent text,
  ADD COLUMN IF NOT EXISTS source text,
  ADD COLUMN IF NOT EXISTS channel_interest text,
  ADD COLUMN IF NOT EXISTS locale text;
