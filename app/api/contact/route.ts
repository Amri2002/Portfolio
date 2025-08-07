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
    await transporter.sendMail({
      from: email,
      to: "muhammedamri2002@gmail.com",
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error); // Add this line
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
