import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Replace with Resend integration once API key is configured
    // For now, log the contact form submission
    console.log("Contact form submission:", {
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    // When Resend is set up, uncomment:
    // const { Resend } = await import('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Caravan Website <noreply@caravanstatenisland.com>',
    //   to: 'info@caravanstatenisland.com',
    //   subject: `Contact Form: ${firstName} ${lastName || ''}`,
    //   text: `Name: ${firstName} ${lastName || ''}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`,
    // });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
