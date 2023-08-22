import { createTransport } from "nodemailer";

const email = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PWD;

export const transporter = createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});
