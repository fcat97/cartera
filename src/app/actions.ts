"use server";

import { contactSchema, type FormState } from "@/lib/schema";

export async function sendContactMessage(prevState: FormState, formData: FormData): Promise<FormState> {
  try {
    const validatedFields = contactSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    if (!validatedFields.success) {
      const errors = validatedFields.error.flatten().fieldErrors;
      const firstError = Object.values(errors).flat()[0] || "Invalid data provided.";
      return {
        message: firstError,
        status: 'error',
      };
    }

    const { name, email, message } = validatedFields.data;

    // Simulate sending an email
    console.log("--- New Contact Form Submission ---");
    console.log(`To: media.uqab@gmail.com`);
    console.log(`From: ${name} <${email}>`);
    console.log(`Message: ${message}`);
    console.log("------------------------------------");

    return {
      message: "Thank you for your message! We will get back to you soon.",
      status: 'success',
    };

  } catch (error) {
    console.error("Contact form submission error:", error);
    return {
      message: "An unexpected error occurred. Please try again later.",
      status: 'error',
    };
  }
}
