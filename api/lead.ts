import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import type { ContactChannel, ContactIntent, ContactSource } from '../src/types/contact';

declare const process: { env: Record<string, string | undefined> };

const allowedIntents = new Set<ContactIntent>(['pilot', 'starter', 'pro', 'general']);
const allowedLocales = new Set(['tr', 'en']);
const allowedChannels = new Set<ContactChannel>(['web', 'whatsapp', 'web_whatsapp', 'not_sure']);
const allowedSources = new Set<ContactSource>([
  'navbar',
  'hero',
  'pricing-starter',
  'pricing-growth',
  'pricing-pro',
  'final-cta',
  'footer',
]);

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;
const resendApiKey = process.env.RESEND_API_KEY;
const notificationEmail = process.env.LEAD_NOTIFICATION_EMAIL;
const resendFromEmail = process.env.RESEND_FROM_EMAIL;

const supabase = supabaseUrl && supabaseSecretKey
  ? createClient(supabaseUrl, supabaseSecretKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    })
  : null;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

type LeadRequestBody = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  businessName?: unknown;
  message?: unknown;
  intent?: unknown;
  source?: unknown;
  channelInterest?: unknown;
  locale?: unknown;
  website?: unknown;
};

type ValidatedLead = {
  name: string;
  email: string;
  phone: string | null;
  businessName: string;
  message: string | null;
  intent: ContactIntent;
  source: ContactSource;
  channelInterest: ContactChannel | null;
  locale: 'tr' | 'en';
};

const jsonHeaders = { 'Content-Type': 'application/json' };

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: jsonHeaders });
}

function trimRequiredString(value: unknown, field: string, maxLength: number): string {
  if (typeof value !== 'string') throw new Error(`invalid_${field}`);
  const normalized = value.trim();
  if (!normalized || normalized.length > maxLength) throw new Error(`invalid_${field}`);
  return normalized;
}

function trimOptionalString(value: unknown, field: string, maxLength: number): string | null {
  if (value === undefined || value === null || value === '') return null;
  if (typeof value !== 'string') throw new Error(`invalid_${field}`);
  const normalized = value.trim();
  if (normalized.length > maxLength) throw new Error(`invalid_${field}`);
  return normalized || null;
}

function validateLead(body: LeadRequestBody): ValidatedLead {
  const name = trimRequiredString(body.name, 'name', 100);
  const email = trimRequiredString(body.email, 'email', 254).toLowerCase();
  const businessName = trimRequiredString(body.businessName, 'businessName', 150);
  const intent = trimRequiredString(body.intent, 'intent', 20) as ContactIntent;
  const source = trimRequiredString(body.source, 'source', 80) as ContactSource;
  const locale = trimRequiredString(body.locale, 'locale', 2) as 'tr' | 'en';
  const phone = trimOptionalString(body.phone, 'phone', 50);
  const message = trimOptionalString(body.message, 'message', 2000);
  const channelValue = body.channelInterest === undefined ? null : body.channelInterest;

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('invalid_email');
  if (!allowedIntents.has(intent)) throw new Error('invalid_intent');
  if (!allowedSources.has(source)) throw new Error('invalid_source');
  if (!allowedLocales.has(locale)) throw new Error('invalid_locale');
  if (channelValue !== null && (typeof channelValue !== 'string' || !allowedChannels.has(channelValue as ContactChannel))) {
    throw new Error('invalid_channelInterest');
  }

  return {
    name,
    email,
    phone,
    businessName,
    message,
    intent,
    source,
    channelInterest: channelValue as ContactChannel | null,
    locale,
  };
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  })[character] ?? character);
}

function display(value: string | null): string {
  return value ? escapeHtml(value) : '—';
}

function plainDisplay(value: string | null): string {
  return value || '—';
}

function intentLabel(intent: ContactIntent): string {
  return intent === 'general' ? 'Contact' : intent[0].toUpperCase() + intent.slice(1);
}

function safeErrorMessage(error: unknown): string {
  const message = error instanceof Error ? error.message : 'Unknown notification error';
  return message.replace(/\s+/g, ' ').trim().slice(0, 300) || 'Unknown notification error';
}

function buildEmail(lead: ValidatedLead, submissionId: string, submittedAt: string) {
  const subject = `New Richt AI Lead — ${intentLabel(lead.intent)} — ${lead.businessName.replace(/[\r\n]+/g, ' ')}`;
  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#17212b;max-width:640px">
      <h1 style="font-size:20px;margin:0 0 20px">NEW RICHT AI LEAD</h1>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        <tr><td style="padding:7px 0;font-weight:700;width:180px">Intent</td><td style="padding:7px 0">${display(intentLabel(lead.intent))}</td></tr>
        <tr><td style="padding:7px 0;font-weight:700">Source</td><td style="padding:7px 0">${display(lead.source)}</td></tr>
        <tr><td style="padding:7px 0;font-weight:700">Priority channel</td><td style="padding:7px 0">${display(lead.channelInterest)}</td></tr>
        <tr><td style="padding:7px 0;font-weight:700">Language</td><td style="padding:7px 0">${display(lead.locale)}</td></tr>
        <tr><td colspan="2" style="padding:14px 0 4px;font-weight:700;border-bottom:1px solid #d8dee4">Contact</td></tr>
        <tr><td style="padding:7px 0;font-weight:700">Name</td><td style="padding:7px 0">${display(lead.name)}</td></tr>
        <tr><td style="padding:7px 0;font-weight:700">Clinic / Business</td><td style="padding:7px 0">${display(lead.businessName)}</td></tr>
        <tr><td style="padding:7px 0;font-weight:700">Email</td><td style="padding:7px 0">${display(lead.email)}</td></tr>
        <tr><td style="padding:7px 0;font-weight:700">Phone</td><td style="padding:7px 0">${display(lead.phone)}</td></tr>
        <tr><td colspan="2" style="padding:14px 0 4px;font-weight:700;border-bottom:1px solid #d8dee4">Message / Current situation</td></tr>
        <tr><td colspan="2" style="padding:10px 0;white-space:pre-wrap">${display(lead.message)}</td></tr>
        <tr><td style="padding:14px 0 7px;font-weight:700">Submission ID</td><td style="padding:14px 0 7px">${display(submissionId)}</td></tr>
        <tr><td style="padding:7px 0;font-weight:700">Timestamp</td><td style="padding:7px 0">${display(submittedAt)}</td></tr>
      </table>
    </div>
  `;
  const text = [
    'NEW RICHT AI LEAD',
    '',
    `Intent: ${plainDisplay(intentLabel(lead.intent))}`,
    `Source: ${plainDisplay(lead.source)}`,
    `Priority channel: ${plainDisplay(lead.channelInterest)}`,
    `Language: ${plainDisplay(lead.locale)}`,
    '',
    `Name: ${plainDisplay(lead.name)}`,
    `Clinic / Business: ${plainDisplay(lead.businessName)}`,
    `Email: ${plainDisplay(lead.email)}`,
    `Phone: ${plainDisplay(lead.phone)}`,
    '',
    `Message / Current situation: ${plainDisplay(lead.message)}`,
    '',
    `Submission ID: ${submissionId}`,
    `Timestamp: ${submittedAt}`,
  ].join('\n');

  return { subject, html, text };
}

export async function POST(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return jsonResponse({ ok: false, error: 'Method Not Allowed' }, 405);
  }

  let body: LeadRequestBody;
  try {
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('invalid_body');
    body = parsed as LeadRequestBody;
  } catch {
    return jsonResponse({ ok: false, error: 'Invalid request.' }, 400);
  }

  if (body.website !== undefined && body.website !== null && String(body.website).trim() !== '') {
    return jsonResponse({ ok: true, notification: 'skipped' });
  }

  let lead: ValidatedLead;
  try {
    lead = validateLead(body);
  } catch {
    return jsonResponse({ ok: false, error: 'Invalid request.' }, 400);
  }

  const submissionId = crypto.randomUUID();
  const submittedAt = new Date().toISOString();

  if (!supabase) {
    console.error('[lead] configuration error', { submissionId, intent: lead.intent, category: 'database_config' });
    return jsonResponse({ ok: false, error: 'Unable to submit your request.' }, 500);
  }

  let insertError: unknown = null;
  try {
    const result = await supabase.from('leads').insert({
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      business_name: lead.businessName,
      message: lead.message,
      intent: lead.intent,
      source: lead.source,
      channel_interest: lead.channelInterest,
      locale: lead.locale,
      submission_id: submissionId,
      notification_status: 'pending',
    });
    insertError = result.error;
  } catch (error) {
    insertError = error;
  }

  if (insertError) {
    console.error('[lead] database insert failed', { submissionId, intent: lead.intent, category: 'database_insert', error: insertError });
    return jsonResponse({ ok: false, error: 'Unable to submit your request.' }, 500);
  }

  if (!resend || !notificationEmail || !resendFromEmail) {
    const error = 'Notification service is not configured.';
    console.error('[lead] notification failed', { submissionId, intent: lead.intent, category: 'notification_config' });
    try {
      const { error: updateError } = await supabase
        .from('leads')
        .update({ notification_status: 'failed', notification_error: error })
        .eq('submission_id', submissionId);
      if (updateError) console.error('[lead] notification status update failed', { submissionId, intent: lead.intent, category: 'notification_status_update', error: updateError });
    } catch (updateError) {
      console.error('[lead] notification status update failed', { submissionId, intent: lead.intent, category: 'notification_status_update', error: updateError });
    }
    return jsonResponse({ ok: true, submissionId, notification: 'failed' });
  }

  try {
    const { subject, html, text } = buildEmail(lead, submissionId, submittedAt);
    const { error: emailError } = await resend.emails.send(
      { from: resendFromEmail, to: notificationEmail, subject, html, text },
      { idempotencyKey: `richt-ai-lead/${submissionId}` },
    );

    if (emailError) throw emailError;

    try {
      const { error: updateError } = await supabase
        .from('leads')
        .update({ notification_status: 'notified', notified_at: new Date().toISOString(), notification_error: null })
        .eq('submission_id', submissionId);
      if (updateError) console.error('[lead] notification status update failed', { submissionId, intent: lead.intent, category: 'notification_status_update', error: updateError });
    } catch (updateError) {
      console.error('[lead] notification status update failed', { submissionId, intent: lead.intent, category: 'notification_status_update', error: updateError });
    }

    console.info('[lead] notification sent', { submissionId, intent: lead.intent, result: 'notified' });
    return jsonResponse({ ok: true, submissionId, notification: 'sent' });
  } catch (error) {
    const notificationError = `resend_error: ${safeErrorMessage(error)}`;
    console.error('[lead] notification failed', { submissionId, intent: lead.intent, category: 'notification_send', error });
    try {
      const { error: updateError } = await supabase
        .from('leads')
        .update({ notification_status: 'failed', notification_error: notificationError })
        .eq('submission_id', submissionId);
      if (updateError) console.error('[lead] notification status update failed', { submissionId, intent: lead.intent, category: 'notification_status_update', error: updateError });
    } catch (updateError) {
      console.error('[lead] notification status update failed', { submissionId, intent: lead.intent, category: 'notification_status_update', error: updateError });
    }

    return jsonResponse({ ok: true, submissionId, notification: 'failed' });
  }
}
