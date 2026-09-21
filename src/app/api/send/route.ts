import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

const getResend = () => new Resend(process.env.RESEND_API_KEY || "re_placeholder");

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);
    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);
    if (!zodSuccess) {
      const firstIssue = zodError?.issues?.[0]?.message || "Invalid input!";
      return Response.json({ error: firstIssue }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === "re_placeholder") {
      console.log("Dev mode: contact email simulated ->", zodData);
      return Response.json({ success: true, simulated: true });
    }

    const resend = getResend();
    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [config.email],
      subject: "Contact me from portfolio",
      react: EmailTemplate({
        fullName: zodData.fullName,
        email: zodData.email,
        message: zodData.message,
      }),
    });

    if (resendError) {
      return Response.json({ error: resendError.message || "Failed to send email" }, { status: 500 });
    }

    return Response.json(resendData);
  } catch (error: any) {
    return Response.json({ error: error?.message || "Server error" }, { status: 500 });
  }
}
