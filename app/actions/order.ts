"use server";

import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = "sunauloagrifarm@gmail.com";

export interface OrderFormState {
  status: "idle" | "success" | "error";
  message: string;
}

export async function submitOrder(
  _previousState: OrderFormState,
  formData: FormData,
): Promise<OrderFormState> {
  const name = formData.get("name")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const product = formData.get("product")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !phone) {
    return {
      status: "error",
      message: "Please fill in your name and phone number before sending.",
    };
  }

  const { GMAIL_USER, GMAIL_APP_PASSWORD } = process.env;

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.error(
      "submitOrder: missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables.",
    );
    return {
      status: "error",
      message:
        "Sorry, we couldn't send your request right now. Please call or WhatsApp us instead.",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Sunaulo Agrifarm Website" <${GMAIL_USER}>`,
      to: RECIPIENT_EMAIL,
      subject: `New order request from ${name}`,
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Product: ${product || "Not specified"}`,
        "",
        "Message:",
        message || "(no message)",
      ].join("\n"),
    });

    return {
      status: "success",
      message: "Thanks! Your order request has been sent. We'll be in touch soon.",
    };
  } catch (error) {
    console.error("submitOrder: failed to send email", error);
    return {
      status: "error",
      message:
        "Something went wrong sending your request. Please call or WhatsApp us instead.",
    };
  }
}
