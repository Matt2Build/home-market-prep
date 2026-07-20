import type { CreateEmailOptions, Resend } from "resend";
import { NextResponse } from "next/server";

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

    await Promise.all([
      sendEmail(
        resend,
        {
          from: NOTIFICATION_FROM_EMAIL,
          to: [OWNER_EMAIL],
          replyTo: email,
          subject: `New newsletter subscriber: ${email}`,
          text: [
            "A new newsletter subscriber was added.",
            `Email: ${email}`,
          ].join("\n"),
          html: `
            <div style="font-family: sans-serif; max-width: 640px; margin: 0 auto; padding: 32px 20px; color: #1A1A1A;">
              <p style="margin:0 0 8px; font-size:12px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#C6A664;">New Newsletter Subscriber</p>
              <h1 style="margin:0 0 20px; font-size:28px; line-height:1.2;">${escapeHtml(email)}</h1>
              <p style="margin:0; font-size:13px; color:#5A5A5A;">A seller just subscribed to the HomeMarketPrep newsletter.</p>
              <p style="margin:20px 0 0; font-size:13px; color:#5A5A5A;">Replying to this email will go to ${escapeHtml(email)}.</p>
            </div>
          `,
        },
        FALLBACK_FROM_EMAIL,
      ),
      sendEmail(
        resend,
        {
          from: USER_FROM_EMAIL,
          to: [email],
          replyTo: OWNER_EMAIL,
          subject: "Welcome to HomeMarketPrep",
          text: [
            `Thanks for subscribing.`,
            "",
            "We will send seller insights, prep checklists, and local market updates straight to your inbox.",
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
                  <span style="color:#C6A664; font-size:28px; font-weight:bold;">✉</span>
                </div>
              </div>
              <h1 style="font-size:24px; font-weight:600; text-align:center; margin:0 0 16px;">You&apos;re in.</h1>
              <p style="font-size:16px; line-height:1.7; color:#5A5A5A; text-align:center; margin:0 0 24px;">
                We will send seller insights, prep checklists, and local market updates straight to your inbox.
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

    return NextResponse.json({ message: "Subscribed" });
  } catch (err: unknown) {
    console.error("Newsletter Resend error:", err);
    return NextResponse.json(
      { message: "Failed to subscribe. Please try again." },
      { status: 500 },
    );
  }
}
