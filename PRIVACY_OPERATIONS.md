# Richt AI — Privacy Operations

This is a founder-managed manual checklist for the current lead flow. It does not create an automatic deletion process, change the database schema, or authorize deletion by itself.

## Monthly review

- Review potentially expired non-client leads in Supabase using the read-only query below.
- For every candidate, distinguish active customer, active prospect, closed prospect, unknown, or subject to a pending privacy request/legal hold. The current lead table does not provide a reliable client-status field, so `status` is only a review signal.
- Confirm whether the original communication purpose still exists. If it has ended, verify eligibility for manual deletion under applicable legal and contractual requirements before taking action.
- Review the corresponding Gmail notification threads and any operational copies; do not assume deleting a Supabase row deletes provider copies or backups.
- Review the relevant Resend/provider retention settings and logs without copying message contents into this document.
- Record the review date, candidate IDs, classification, decision, reviewer, and any follow-up request. Keep the record minimal and do not reproduce lead messages.
- Review that the form warning and Gmail notification copy still tell people not to submit patient names, health information, or third-party sensitive information.

## Read-only review query

Run this only in an authorized, read-only database session. It lists review candidates; it is not a deletion command and must not be run from the public website or with an anonymous client key.

```sql
SELECT
  id,
  created_at,
  status,
  notification_status,
  submission_id
FROM public.leads
WHERE created_at < now() - interval '12 months'
ORDER BY created_at ASC;
```

Before any manual deletion, verify that each row is not an active customer record, active prospect, pending request, legal hold, or record needed for an applicable obligation. Confirm the real production schema and provider copies first; repository migrations do not establish that a row is safe to delete.

## Privacy and deletion requests

Record only the minimum operational information: date received, requester contact, request type, identity-verification status, systems searched, action taken, response date, and any reason action could not be completed. Route privacy requests to `privacy@getrichtai.com`, separately from the sales form. An incoming email is an operational intake channel and does not automatically constitute a formal KVKK application.

## Provider and notification review

- Confirm that Gmail notification copies are accessible only to the intended operator(s) and that old threads are reviewed for unnecessary retention.
- Review Resend retention, delivery logs, and provider terms/settings; the website does not control provider-side retention by deleting a Supabase row.
- Do not put full lead messages, patient information, API keys, authentication headers, or request bodies into logs or operational notes.

## Claims that must never be made publicly

- Do not claim that automatic deletion is active.
- Do not claim that deleting a database row removes Gmail, Resend, provider-log, or backup copies.
- Do not claim that a specific international-transfer mechanism or provider arrangement is KVKK-compliant until it has been verified and legally reviewed.
- Do not claim that `privacy@getrichtai.com` automatically creates a formal KVKK application or that every request can be handled without identity verification.
- Do not invent a company legal entity, registered office, postal address, certification, or regulator approval.
- Do not claim that the form is suitable for patient names, health information, or other third-party sensitive information.

## Owner rule

The founder/operator manages this review manually. No scheduled deletion, automatic retention job, new schema field, dashboard, CRM, or authentication flow is implied by this document.
