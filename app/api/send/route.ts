import { NextResponse } from "next/server";
import { Resend } from "resend";

import EmailTemplate from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }),
      text: "",
    });
    console.log(data);

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);

    return NextResponse.json({ error });
  }
}
