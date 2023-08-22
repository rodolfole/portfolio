import { NextResponse } from "next/server";
import { render } from "@react-email/render";

import ContactEmail from "@/emails/Contact";
import { transporter } from "@/helpers/nodemailer";

export async function POST(request: Request) {
  const { email, message, name } = await request.json();

  const options = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: message,
    html: render(<ContactEmail name={name} email={email} message={message} />),
  };

  try {
    const res = await transporter.sendMail(options);

    console.log({ res });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err });
  }
}
