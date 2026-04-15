import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const REQUIRED_FIELDS = [
  "businessName",
  "contactName",
  "email",
  "phone",
  "businessAddress",
  "businessType",
  "estimatedFrequency",
] as const;

const VALID_BUSINESS_TYPES = [
  "gym",
  "restaurant",
  "airbnb",
  "hotel",
  "salon",
  "medical",
  "school",
  "auto-shop",
  "other",
];

const VALID_FREQUENCIES = ["weekly", "biweekly", "monthly", "one-time"];
const VALID_VOLUMES = ["under-20lbs", "20-50lbs", "50-100lbs", "over-100lbs"];

const BUSINESS_TYPE_LABELS: Record<string, string> = {
  gym: "Gym / Fitness Studio",
  restaurant: "Restaurant / Catering",
  airbnb: "Airbnb / Vacation Rental",
  hotel: "Hotel / Hospitality",
  salon: "Salon / Spa",
  medical: "Medical / Dental Office",
  school: "School / Daycare",
  "auto-shop": "Auto Shop / Dealership",
  other: "Other",
};

const FREQUENCY_LABELS: Record<string, string> = {
  weekly: "Weekly",
  biweekly: "Every Two Weeks",
  monthly: "Monthly",
  "one-time": "One-Time Service",
};

const VOLUME_LABELS: Record<string, string> = {
  "under-20lbs": "Under 20 lbs",
  "20-50lbs": "20 – 50 lbs",
  "50-100lbs": "50 – 100 lbs",
  "over-100lbs": "Over 100 lbs",
};

export async function POST(request: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY environment variable is not set");
    return Response.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }
  const resend = new Resend(process.env.RESEND_API_KEY);

  if (request.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  // Validate required fields
  for (const field of REQUIRED_FIELDS) {
    if (!body[field] || String(body[field]).trim() === "") {
      return NextResponse.json(
        { error: `Missing required field: ${field}` },
        { status: 400 }
      );
    }
  }

  // Validate field values
  if (!VALID_BUSINESS_TYPES.includes(body.businessType)) {
    return NextResponse.json(
      { error: "Invalid businessType value" },
      { status: 400 }
    );
  }
  if (!VALID_FREQUENCIES.includes(body.estimatedFrequency)) {
    return NextResponse.json(
      { error: "Invalid estimatedFrequency value" },
      { status: 400 }
    );
  }
  if (body.estimatedVolume && !VALID_VOLUMES.includes(body.estimatedVolume)) {
    return NextResponse.json(
      { error: "Invalid estimatedVolume value" },
      { status: 400 }
    );
  }
  if (body.additionalNotes && body.additionalNotes.length > 500) {
    return NextResponse.json(
      { error: "additionalNotes exceeds 500 characters" },
      { status: 400 }
    );
  }

  const {
    businessName,
    contactName,
    email,
    phone,
    businessAddress,
    businessType,
    estimatedFrequency,
    estimatedVolume,
    additionalNotes,
  } = body;

  const firstName = contactName.trim().split(" ")[0];
  const dateTime = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const businessTypeLabel = BUSINESS_TYPE_LABELS[businessType] ?? businessType;
  const frequencyLabel = FREQUENCY_LABELS[estimatedFrequency] ?? estimatedFrequency;
  const volumeLabel = estimatedVolume ? (VOLUME_LABELS[estimatedVolume] ?? estimatedVolume) : "Not specified";
  const notesDisplay = additionalNotes?.trim() || "None provided";

  console.log(`[commercial-quote] ${dateTime} — New submission: ${businessName} <${email}>`);

  const notificationHtml = `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #1A4356; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .header h1 { margin: 0; font-size: 20px; }
    .header p { margin: 4px 0 0; font-size: 13px; opacity: 0.8; }
    .body { background: #f9f9f9; padding: 24px; border: 1px solid #ddd; }
    .section-title { color: #1A4356; font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin: 20px 0 8px; border-bottom: 2px solid #3DB4D8; padding-bottom: 4px; }
    .field { margin-bottom: 10px; }
    .label { font-size: 12px; color: #666; text-transform: uppercase; }
    .value { font-size: 15px; color: #111; font-weight: 500; margin-top: 2px; }
    .notes-box { background: white; border: 1px solid #ddd; padding: 12px; border-radius: 4px; font-size: 14px; line-height: 1.5; }
    .footer { background: #1A4356; color: white; padding: 14px 20px; border-radius: 0 0 8px 8px; font-size: 12px; }
    .reply-cta { background: #3DB4D8; color: white; padding: 10px 20px; border-radius: 4px; display: inline-block; margin-top: 16px; font-weight: bold; text-decoration: none; }
  </style>
</head>
<body>
  <div class="header">
    <h1>New Commercial Laundry Quote Request</h1>
    <p>Submitted from cleanmaxlaundry.com on ${dateTime}</p>
  </div>
  <div class="body">
    <div class="section-title">Contact Information</div>
    <div class="field"><div class="label">Business Name</div><div class="value">${businessName}</div></div>
    <div class="field"><div class="label">Contact Name</div><div class="value">${contactName}</div></div>
    <div class="field"><div class="label">Email</div><div class="value">${email}</div></div>
    <div class="field"><div class="label">Phone</div><div class="value">${phone}</div></div>
    <div class="field"><div class="label">Business Address</div><div class="value">${businessAddress}</div></div>
    <div class="section-title">Service Details</div>
    <div class="field"><div class="label">Business Type</div><div class="value">${businessTypeLabel}</div></div>
    <div class="field"><div class="label">Estimated Frequency</div><div class="value">${frequencyLabel}</div></div>
    <div class="field"><div class="label">Estimated Volume per Pickup</div><div class="value">${volumeLabel}</div></div>
    <div class="section-title">Additional Notes</div>
    <div class="notes-box">${notesDisplay}</div>
    <a href="mailto:${email}" class="reply-cta">Reply to ${contactName} →</a>
  </div>
  <div class="footer">
    CleanMax Laundry · 1009 E Holt Ave, Pomona CA 91767 · (909) 248-7305 · laundry@cleanmaxlaundry.com
  </div>
</body>
</html>`;

  const confirmationHtml = `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #1A4356; color: white; padding: 24px; border-radius: 8px 8px 0 0; text-align: center; }
    .header h1 { margin: 0; font-size: 22px; }
    .body { background: #f9f9f9; padding: 28px; border: 1px solid #ddd; text-align: center; }
    .checkmark { font-size: 48px; margin-bottom: 16px; }
    .message { font-size: 16px; line-height: 1.6; color: #444; margin-bottom: 20px; }
    .highlight { color: #1A4356; font-weight: bold; }
    .cta-box { background: #1A4356; color: white; padding: 16px; border-radius: 8px; margin: 20px 0; }
    .cta-box p { margin: 4px 0; font-size: 14px; }
    .cta-box strong { font-size: 18px; }
    .footer { background: #1A4356; color: white; padding: 14px 20px; border-radius: 0 0 8px 8px; font-size: 12px; text-align: center; }
  </style>
</head>
<body>
  <div class="header"><h1>CleanMax Laundry</h1></div>
  <div class="body">
    <div class="checkmark">✅</div>
    <p class="message">
      Hi <span class="highlight">${firstName}</span>,<br><br>
      Thank you for reaching out to CleanMax Laundry about commercial laundry service. We have received your request and will be in touch within <strong>1 business day</strong>.
    </p>
    <div class="cta-box">
      <p>Need to talk sooner? Call us directly:</p>
      <strong>(909) 248-7305</strong>
      <p style="margin-top:8px; font-size:12px;">Or email: laundry@cleanmaxlaundry.com</p>
    </div>
    <p class="message" style="font-size:14px; color:#666;">
      We look forward to making laundry one less thing you have to worry about.<br><br>
      — The CleanMax Laundry Team
    </p>
  </div>
  <div class="footer">1009 E Holt Ave, Pomona, CA 91767 · (909) 248-7305</div>
</body>
</html>`;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "laundry@cleanmaxlaundry.com",
      replyTo: email,
      subject: `New Commercial Quote Request — ${businessName}`,
      html: notificationHtml,
    });

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      replyTo: "laundry@cleanmaxlaundry.com",
      subject: "We received your request — CleanMax Laundry",
      html: confirmationHtml,
    });

    return NextResponse.json({ success: true, message: "Quote request sent" });
  } catch (err) {
    console.error("[commercial-quote] Email send error:", err);
    return NextResponse.json(
      { error: "Failed to send email", details: String(err) },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
