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

    // Clean up input for HTML safety
    const safeName = name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const safePhone = phone.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const safeProduct = product ? product.replace(/</g, "&lt;").replace(/>/g, "&gt;") : "Not specified";
    const safeMessage = message ? message.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>") : "<em>(No message provided)</em>";

    await transporter.sendMail({
      from: `"Sunaulo Agrifarm Website" <${GMAIL_USER}>`,
      to: RECIPIENT_EMAIL,
      subject: `🌱 New Order Request from ${safeName}`,
      // Fallback text version for old email clients
      text: `New order request from ${safeName}.\nPhone: ${safePhone}\nProduct: ${safeProduct}\nMessage: ${message}`,
      // Beautiful HTML Card Version
      html: `
        <div style="background-color: #f4f7f6; padding: 30px 15px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333333;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 550px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); overflow: hidden; border-collapse: collapse;">
            
            <tr>
              <td style="background-color: #2e7d32; padding: 25px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600; letter-spacing: 0.5px;">
                  New Order Request
                </h1>
                <p style="color: #c8e6c9; margin: 5px 0 0 0; font-size: 14px;">Sunaulo Agrifarm Web Portal</p>
              </td>
            </tr>

            <tr>
              <td style="padding: 30px 25px;">
                <p style="margin-top: 0; margin-bottom: 20px; font-size: 16px; line-height: 1.5; color: #555555;">
                  You have received a new customer inquiry from your website farm-to-table form. Here are the details:
                </p>

                <table role="presentation" width="100%" style="border-collapse: collapse; margin-bottom: 25px;">
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; width: 30%; font-weight: bold; color: #666666; font-size: 14px; text-transform: uppercase;">Customer</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111111; font-size: 15px; font-weight: 600;">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #666666; font-size: 14px; text-transform: uppercase;">Phone</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #2e7d32; font-size: 15px; font-weight: 600;">
                      <a href="tel:${safePhone}" style="color: #2e7d32; text-decoration: none;">${safePhone}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #666666; font-size: 14px; text-transform: uppercase;">Product</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111111; font-size: 15px; background-color: #f9f9f9; padding-left: 8px; border-radius: 4px;">${safeProduct}</td>
                  </tr>
                </table>

                <div style="background-color: #f8fbf9; border-left: 4px solid #2e7d32; padding: 15px; border-radius: 0 8px 8px 0;">
                  <h4 style="margin: 0 0 8px 0; color: #2e7d32; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Customer Note:</h4>
                  <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #444444; font-style: italic;">
                    ${safeMessage}
                  </p>
                </div>
              </td>
            </tr>

            <tr>
              <td style="background-color: #fafafa; padding: 15px 25px; text-align: center; border-top: 1px solid #eeeeee;">
                <p style="margin: 0; font-size: 12px; color: #999999;">
                  This is an automated notification from your website system.
                </p>
              </td>
            </tr>
          </table>
        </div>
      `,
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