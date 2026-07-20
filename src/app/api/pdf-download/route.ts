import type { CreateEmailOptions, Resend } from "resend";
import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/site";

const VERIFIED_SENDER = "hello@matt2build.com";
const NOTIFICATION_FROM_EMAIL = `HomeMarketPrep Notifications <${VERIFIED_SENDER}>`;
const USER_FROM_EMAIL = `Matt Salit <${VERIFIED_SENDER}>`;
const FALLBACK_FROM_EMAIL = `HomeMarketPrep <${VERIFIED_SENDER}>`;
const OWNER_EMAIL = "mattsalit@writemyoffer.com";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  if (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof error.message === "string"
  ) {
    return error.message;
  }
  return "Unknown Resend error";
}

async function sendEmail(
  resend: Resend,
  payload: CreateEmailOptions,
  fallbackFrom?: string,
) {
  const result = await resend.emails.send(payload);

  if (!result.error) return result;

  console.error("Primary Resend send failed:", result.error);

  if (!fallbackFrom) throw new Error(getErrorMessage(result.error));

  const fallbackResult = await resend.emails.send({
    ...payload,
    from: fallbackFrom,
  });

  if (fallbackResult.error) {
    console.error("Fallback Resend send failed:", fallbackResult.error);
    throw new Error(getErrorMessage(fallbackResult.error));
  }

  return fallbackResult;
}

export async function POST(req: Request) {
  try {
    const { Resend } = await import("resend");
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) throw new Error("Missing RESEND_API_KEY");

    const resend = new Resend(apiKey);
    const body = await req.json();
    const email = body.email?.trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: "A valid email is required." },
        { status: 400 },
      );
    }

    const pdfUrl = `${SITE_URL}/downloads/seller-prelist-checklist.pdf`;

    await Promise.all([
      // Notify owner
      sendEmail(
        resend,
        {
          from: NOTIFICATION_FROM_EMAIL,
          to: [OWNER_EMAIL],
          replyTo: email,
          subject: `New PDF download request: ${email}`,
          text: [
            "A seller just requested the pre-list checklist PDF.",
            `Email: ${email}`,
            "",
            "Reply directly to this email to follow up.",
          ].join("\n"),
          html: `
            <div style="font-family: sans-serif; max-width: 640px; margin: 0 auto; padding: 32px 20px; color: #1A1A1A;">
              <p style="margin:0 0 8px; font-size:12px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#C6A664;">PDF Download Request</p>
              <h1 style="margin:0 0 20px; font-size:28px; line-height:1.2;">${escapeHtml(email)}</h1>
              <p style="margin:0; font-size:13px; color:#5A5A5A;">A seller requested the pre-list checklist PDF from HomeMarketPrep.</p>
              <p style="margin:20px 0 0; font-size:13px; color:#5A5A5A;">Replying to this email will go to ${escapeHtml(email)}.</p>
            </div>
          `,
        },
        FALLBACK_FROM_EMAIL,
      ),
      // Send PDF to user
      sendEmail(
        resend,
        {
          from: USER_FROM_EMAIL,
          to: [email],
          replyTo: OWNER_EMAIL,
          subject: "Your HomeMarketPrep Seller Checklist",
          text: [
            "Thanks for your interest.",
            "",
            `${SITE_URL}/downloads/seller-prelist-checklist.pdf`,
            "",
            "You can also ask Matt directly: 425-645-2181 · mattsalit@writemyoffer.com",
            "",
            "Matt Salit",
            "HomeMarketPrep",
          ].join("\n"),
          html: `
            <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px; color: #1A1A1A;">
              <div style="text-align:center; margin-bottom: 32px;">
                <span style="font-size:22px; font-weight:bold; letter-spacing:0.15em; text-transform:uppercase;">
                  <span style="color:#C6A664;">Home</span><span>MarketPrep</span>
                </span>
              </div>
              <div style="text-align:center; margin-bottom: 28px;">
                <div style="width:56px; height:56px; border-radius:50%; background:#f7f1e7; display:inline-flex; align-items:center; justify-content:center;">
                  <span style="color:#C6A664; font-size:28px; font-weight:bold;">📋</span>
                </div>
              </div>
              <h1 style="font-size:24px; font-weight:600; text-align:center; margin:0 0 16px;">Your Seller Checklist</h1>
              <p style="font-size:16px; line-height:1.7; color:#5A5A5A; text-align:center; margin:0 0 24px;">
                Here is the PDF you requested.
              </p>
              <div style="text-align:center; margin:0 0 32px;">
                <a href="${SITE_URL}/downloads/seller-prelist-checklist.pdf" style="display:inline-block; background:#C6A664; color:#1A1A1A; font-size:14px; font-weight:600; padding:16px 40px; border-radius:999px; text-decoration:none; letter-spacing:0.1em; text-transform:uppercase;">
                  Download the Checklist
                </a>
              </div>
              <div style="text-align:center; font-size:14px; color:#5A5A5A; margin:0 0 24px;">
                <p style="margin:0 0 4px;">Direct link: <a href="${SITE_URL}/downloads/seller-prelist-checklist.pdf" style="color:#C6A664; text-decoration:none;">${SITE_URL}/downloads/seller-prelist-checklist.pdf</a></p>
              </div>
              <p style="font-size:14px; color:#5A5A5A; text-align:center; margin:0 0 24px;">
                Want to talk through your specific situation?<br />
                <strong>Matt Salit · 425-645-2181 · mattsalit@writemyoffer.com</strong>
              </p>
              <div style="text-align:center; padding-top:24px; border-top:1px solid #E8E4DF;">
                <p style="margin:0; font-size:12px; color:#A1A1A1;">Matt Salit · Century 21 North Homes · HomeMarketPrep</p>
              </div>
            </div>
          `,
        },
        FALLBACK_FROM_EMAIL,
      ),
    ]);

    return NextResponse.json({
      message: "Checklist sent",
      pdfUrl,
    });
  } catch (err: unknown) {
    console.error("PDF download Resend error:", err);
    return NextResponse.json(
      { message: "Failed to send the checklist. Please try again." },
      { status: 500 },
    );
  }
}
