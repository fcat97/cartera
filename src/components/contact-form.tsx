"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { contactSchema } from "@/lib/schema";
import { Loader2 } from "lucide-react";

type FormState = {
  message: string;
  status: 'success' | 'error' | 'idle';
};

function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <Button type="submit" disabled={isSubmitting} className="w-full">
      {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Send Message
    </Button>
  );
}

export function ContactForm() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>({ message: "", status: "idle" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: "Success!",
        description: state.message,
      });
      formRef.current?.reset();
      setState({ message: "", status: "idle" });
    } else if (state.status === 'error') {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
       setState({ message: state.message, status: "idle" });
    }
  }, [state, toast]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);

    try {
      const validatedFields = contactSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      });

      if (!validatedFields.success) {
        const errors = validatedFields.error.flatten().fieldErrors;
        const firstError = Object.values(errors).flat()[0] || "Invalid data provided.";
        setState({
          message: firstError,
          status: 'error',
        });
        return;
      }

      const { name, email, message } = validatedFields.data;

      // In a static site, we can't run server actions.
      // This is a placeholder. You would typically send this data to a serverless function
      // or a third-party form handling service (e.g., Formspree, Netlify Forms).
      console.log("--- New Contact Form Submission (Client-Side) ---");
      console.log(`To: media.uqab@gmail.com`);
      console.log(`From: ${name} <${email}>`);
      console.log(`Message: ${message}`);
      console.log("------------------------------------");

      setState({
        message: "Thank you for your message! We will get back to you soon.",
        status: 'success',
      });

    } catch (error) {
      console.error("Contact form submission error:", error);
      setState({
        message: "An unexpected error occurred. Please try again later.",
        status: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Your Name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Your message..." required rows={6} />
      </div>
      <SubmitButton isSubmitting={isSubmitting} />
    </form>
  );
}
