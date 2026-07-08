import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY!);

    const body = await req.json();
    const { address, beds, baths, sqft, name, email, phone } = body;

    if (!name || !email) {
      return NextResponse.json(
        { message: "Name and email are required." },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "HomeMarketPrep <mattsalit@writemyoffer.com>",
      to: [email],
      subject: "Thanks — Your Free CMA Is Being Prepared",
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
          <h1 style="font-size:24px; font-weight:600; text-align:center; margin:0 0 16px;">Thanks, ${name}!</h1>
          <p style="font-size:16px; line-height:1.7; color:#5A5A5A; text-align:center; margin:0 0 24px;">
            We've received your request and are already researching comps, current buyer demand, and market trends for your property.
          </p>
          ${address ? `
          <div style="background:#F8F5F0; border-radius:12px; padding:20px 24px; margin:0 0 24px;">
            <p style="margin:0 0 8px; font-size:13px; font-weight:600; text-transform:uppercase; letter-spacing:0.1em; color:#C6A664;">Property Details</p>
            <p style="margin:0; font-size:16px; color:#1A1A1A;"><strong>${address}</strong></p>
            ${beds || baths || sqft ? `<p style="margin:8px 0 0; font-size:14px; color:#5A5A5A;">
              ${beds ? `${beds} bed${beds !== "1" ? "s" : ""}` : ""}${beds && baths ? " · " : ""}${baths ? `${baths} bath${baths !== "1" ? "s" : ""}` : ""}${(beds || baths) && sqft ? " · " : ""}${sqft ? `${sqft} sq ft` : ""}
            </p>` : ""}
          </div>` : ""}
          <p style="font-size:15px; line-height:1.7; color:#5A5A5A; text-align:center; margin:0 0 32px;">
            Expect to hear from a local real estate expert very soon. No rush — hand-built means done right.
          </p>
          <div style="text-align:center; padding-top:24px; border-top:1px solid #E8E4DF;">
            <p style="margin:0; font-size:12px; color:#A1A1A1;">From the makers of <a href="https://writemyoffer.com" style="color:#C6A664; text-decoration:none;">WriteMyOffer.com</a></p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ message: "CMA request received" });
  } catch (err: any) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { message: "Failed to process your request. Please try again." },
      { status: 500 },
    );
  }
}
