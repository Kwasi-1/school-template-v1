import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();

    console.log("Received request with data:", { email, name }); // Debugging

    const { data, error } = await resend.emails.send({
      from: "admissions@yourdomain.com",
      to: email,
      subject: "Your Admission Application Received",
      html: `
        <h2>Hello ${name},</h2>
        <p>We've received your admission application. Our team will review it and get back to you soon.</p>
        <p>Best regards, <br/> Admissions Office</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error); // Debugging
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    console.log("Email sent successfully:", data); // Debugging
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Internal server error:", error); // Debugging
    return NextResponse.json({ success: false, error: "Something went wrong" }, { status: 500 });
  }
}