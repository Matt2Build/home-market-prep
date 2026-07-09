import type { CreateEmailOptions, Resend } from "resend";
import { NextResponse } from "next/server";

const VERIFIED_SENDER = "hello@matt2build.com";
const NOTIFICATION_FROM_EMAIL =
  `HomeMarketPrep Notifications <${VERIFIED_SENDER}>`;
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

function formatDetail(label: string, value?: string) {
  return `
    <tr>
      <td style="padding:10px 0; width:120px; vertical-align:top; font-size:13px; font-weight:600; color:#5A5A5A;">${label}</td>
      <td style="padding:10px 0; font-size:15px; color:#1A1A1A;">${value ? escapeHtml(value) : "Not provided"}</td>
    </tr>
  `;
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "string") {
    return error;
  }

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

  if (!result.error) {
    return result;
  }

  console.error("Primary Resend send failed:", result.error);

  if (!fallbackFrom) {
    throw new Error(getErrorMessage(result.error));
  }

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

    if (!apiKey) {
      throw new Error("Missing RESEND_API_KEY");
    }

    const resend = new Resend(apiKey);

    const body = await req.json();
    const address = body.address?.trim();
    const beds = body.beds?.trim();
    const baths = body.baths?.trim();
    const sqft = body.sqft?.trim();
    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();

    if (!name || !email) {
      return NextResponse.json(
        { message: "Name and email are required." },
        { status: 400 },
      );
    }

    const subjectLine = address
      ? `New CMA inquiry: ${address}`
      : `New CMA inquiry from ${name}`;

    await Promise.all([
      sendEmail(
        resend,
        {
        from: NOTIFICATION_FROM_EMAIL,
        to: [OWNER_EMAIL],
        replyTo: email,
        subject: subjectLine,
        text: [
          "A new CMA request was submitted.",
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone || "Not provided"}`,
          `Address: ${address || "Not provided"}`,
          `Beds: ${beds || "Not provided"}`,
          `Baths: ${baths || "Not provided"}`,
          `Sq Ft: ${sqft || "Not provided"}`,
        ].join("\n"),
        html: `
          <div style="font-family: sans-serif; max-width: 640px; margin: 0 auto; padding: 32px 20px; color: #1A1A1A;">
            <p style="margin:0 0 8px; font-size:12px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#C6A664;">New CMA Inquiry</p>
            <h1 style="margin:0 0 20px; font-size:28px; line-height:1.2;">A seller just requested a CMA.</h1>
            <div style="background:#F8F5F0; border:1px solid #E8E4DF; border-radius:16px; padding:24px;">
              <table style="width:100%; border-collapse:collapse;">
                <tbody>
                  ${formatDetail("Name", name)}
                  ${formatDetail("Email", email)}
                  ${formatDetail("Phone", phone)}
                  ${formatDetail("Address", address)}
                  ${formatDetail("Beds", beds)}
                  ${formatDetail("Baths", baths)}
                  ${formatDetail("Sq Ft", sqft)}
                </tbody>
              </table>
            </div>
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
        subject: "We received your CMA inquiry",
        text: [
          `Hi ${name},`,
          "",
          "We received your inquiry and will get your CMA over ASAP.",
          "",
          address ? `Property: ${address}` : "",
          "We are reviewing nearby comparable sales, current competition, and the prep items most likely to matter before you list.",
          "",
          "Matt Salit",
          "HomeMarketPrep",
        ]
          .filter(Boolean)
          .join("\n"),
        html: `
          <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px; color: #1A1A1A;">
            <div style="text-align:center; margin-bottom: 32px;">
              <span style="font-size:22px; font-weight:bold; letter-spacing:0.15em; text-transform:uppercase;">
                <span style="color:#C6A664;">Home</span><span>MarketPrep</span>
              </span>
            </div>
            <div style="text-align:center; margin-bottom: 28px;">
              <div style="width:56px; height:56px; border-radius:50%; background:#e6f4ea; display:inline-flex; align-items:center; justify-content:center;">
                <span style="color:#16a34a; font-size:28px; font-weight:bold;">✓</span>
              </div>
            </div>
            <h1 style="font-size:24px; font-weight:600; text-align:center; margin:0 0 16px;">Thanks, ${escapeHtml(name)}.</h1>
            <p style="font-size:16px; line-height:1.7; color:#5A5A5A; text-align:center; margin:0 0 24px;">
              We received your inquiry and will get your CMA over ASAP.
            </p>
            ${
              address
                ? `
                  <div style="background:#F8F5F0; border-radius:12px; padding:20px 24px; margin:0 0 24px;">
                    <p style="margin:0 0 8px; font-size:13px; font-weight:600; text-transform:uppercase; letter-spacing:0.1em; color:#C6A664;">Property Details</p>
                    <p style="margin:0; font-size:16px; color:#1A1A1A;"><strong>${escapeHtml(address)}</strong></p>
                    ${
                      beds || baths || sqft
                        ? `<p style="margin:8px 0 0; font-size:14px; color:#5A5A5A;">
                            ${beds ? `${escapeHtml(beds)} bed${beds !== "1" ? "s" : ""}` : ""}${beds && baths ? " · " : ""}${baths ? `${escapeHtml(baths)} bath${baths !== "1" ? "s" : ""}` : ""}${(beds || baths) && sqft ? " · " : ""}${sqft ? `${escapeHtml(sqft)} sq ft` : ""}
                          </p>`
                        : ""
                    }
                  </div>
                `
                : ""
            }
            <p style="font-size:15px; line-height:1.7; color:#5A5A5A; text-align:center; margin:0 0 32px;">
              We are reviewing comparable sales, current competition, and the prep items most likely to affect your list strategy.
            </p>
            <div style="text-align:center; padding-top:24px; border-top:1px solid #E8E4DF;">
              <p style="margin:0; font-size:12px; color:#A1A1A1;">Matt Salit • Century 21 North Homes • HomeMarketPrep</p>
            </div>
          </div>
        `,
        },
        FALLBACK_FROM_EMAIL,
      ),
    ]);

    return NextResponse.json({ message: "CMA request received" });
  } catch (err: unknown) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { message: "Failed to process your request. Please try again." },
      { status: 500 },
    );
  }
}
