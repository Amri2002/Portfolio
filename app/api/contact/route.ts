import { NextResponse } from "next/server";
// @ts-ignore
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, subject, message } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "muhammedamri2002@gmail.com", // replace with your Gmail
      pass: "sjhlaujmxeoyihdr", // use an App Password, not your Gmail password
    },
  });

  try {
    // Send email to you
    await transporter.sendMail({
      from: email,
      to: "muhammedamri2002@gmail.com",
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    // Send confirmation to sender
    await transporter.sendMail({
      from: "muhammedamri2002@gmail.com",
      to: email,
      subject: "We received your message!",
      text: `Hi ${name},\n\nThank you for reaching out! I have received your message and will get back to you soon.\n\nBest regards,\nMuhammed Amri`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
