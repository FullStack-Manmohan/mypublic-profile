"use client";
import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import toast from "react-hot-toast";
import { Spinner } from "react-bootstrap";
import { z } from "zod";
import { FaCheckCircle } from "react-icons/fa";

// Stricter email: valid format, reasonable length, no disposable domains
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
const DISPOSABLE_DOMAINS = [
  "tempmail", "throwaway", "guerrillamail", "10minutemail", "mailinator",
  "yopmail", "fakeinbox", "trashmail", "temp-mail", "getnada", "sharklasers",
  "mailnesia", "dispostable", "tempail", "mohmal", "emailondeck", "tempinbox",
];
const isDisposableEmail = (email) => {
  const domain = email.split("@")[1]?.toLowerCase() || "";
  return DISPOSABLE_DOMAINS.some((d) => domain.includes(d));
};

// Phone: if provided, must have at least 10 digits (international allowed)
const phoneDigits = (s) => (s || "").replace(/\D/g, "");
const validPhone = (s) => (s || "").trim() !== "" && phoneDigits(s).length >= 10;

const formSchema = z.object({
  fullName: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name is too long")
    .refine((v) => !/^\s+$/.test(v), "Name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .max(254, "Email is too long")
    .email("Please enter a valid email address")
    .refine((v) => EMAIL_REGEX.test(v), "Please enter a valid email address")
    .refine((v) => !isDisposableEmail(v), "Please use a permanent email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .max(20, "Phone number is too long")
    .refine((v) => validPhone(v), "Please enter a valid phone number (at least 10 digits)"),
  subject: z
    .string()
    .min(1, "Subject is required")
    .max(200, "Subject is too long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message is too long"),
});

export default function ContactPage() {
  const [showThankYou, setShowThankYou] = useState(false);
  const submitGuardRef = useRef(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const isEmailJsConfigured = serviceId && templateId && publicKey;

  const onSubmit = async (data) => {
    if (submitGuardRef.current) return;
    submitGuardRef.current = true;
    try {
      if (!isEmailJsConfigured) {
        const body = [
          `From: ${data.fullName} <${data.email}>`,
          `Phone: ${data.phone}`,
          "",
          data.message,
        ].join("\n");
        const mailto = `mailto:fullstack.manmohan@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
        toast.success("Opening your email client. If it didn't open, email fullstack.manmohan@gmail.com directly.");
        form.reset();
        return;
      }
      await emailjs.send(serviceId, templateId, {
        name: data.fullName,
        email: `${data.email} - Source: from my Portfolio`,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
      }, publicKey);
      form.reset();
      setShowThankYou(true);
      toast.success("Message sent! We'll get back to you within a few hours.");
    } catch (error) {
      const message = error?.text || error?.message || String(error);
      console.error("Contact form error:", message, error);
      toast.error("Could not send message. Please email fullstack.manmohan@gmail.com directly.");
    } finally {
      submitGuardRef.current = false;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-surface)]">
      <main className="flex-grow py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-4" data-aos="fade-up">
          Contact
        </h1>
        <p className="mb-4 text-lg text-[var(--color-primary)]/90 max-w-2xl mx-auto" data-aos="fade-up">
          Interested in working together or have a question? Reach out via the form or the info below.
        </p>
        <p className="mb-4 text-[var(--color-muted)] italic max-w-2xl mx-auto" data-aos="fade-up">
          If you&apos;re looking for a senior, hands-on engineer who can own delivery (architecture → build → launch → iterate), message me with your goal, timeline, and current stack.
        </p>
        <p className="mb-10 text-[var(--color-primary)] font-medium max-w-2xl mx-auto" data-aos="fade-up">
          I&apos;m available for long-term projects and can commit up to 40+ hours per week. Let&apos;s discuss how I can help with your next project.
        </p>

        <div className="mt-12 max-w-2xl mx-auto bg-[var(--color-surface-elevated)] shadow-[var(--shadow-card)] rounded-[var(--radius-card)] p-8 border border-[var(--color-border)]" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
            Send a Message
          </h2>
          {!isEmailJsConfigured && (
            <p className="text-sm text-[var(--color-muted)] mb-4">
              Submitting will open your email client to send a message directly.
            </p>
          )}

          <form
            className="space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div>
              <input
                {...form.register("fullName")}
                type="text"
                placeholder="Your Name"
                className="w-full border border-[var(--color-border)] rounded-lg px-4 py-2.5 bg-[var(--color-surface)] text-[var(--color-primary)]"
              />
              <ErrorMessage
                errors={form.formState.errors}
                name="fullName"
                render={({ message }) => (
                  <p className="text-red-500 text-sm">{message}</p>
                )}
              />
            </div>

            <div>
              <input
                {...form.register("email")}
                type="email"
                placeholder="Your Email"
                className="w-full border border-[var(--color-border)] rounded-lg px-4 py-2.5 bg-[var(--color-surface)] text-[var(--color-primary)]"
              />
              <ErrorMessage
                errors={form.formState.errors}
                name="email"
                render={({ message }) => (
                  <p className="text-red-500 text-sm">{message}</p>
                )}
              />
            </div>

            <div>
              <input
                {...form.register("phone")}
                type="tel"
                placeholder="Phone (for callback within a few hours)"
                className="w-full border border-[var(--color-border)] rounded-lg px-4 py-2.5 bg-[var(--color-surface)] text-[var(--color-primary)]"
              />
            </div>

            <div>
              <input
                {...form.register("subject")}
                type="text"
                placeholder="Subject"
                className="w-full border border-[var(--color-border)] rounded-lg px-4 py-2.5 bg-[var(--color-surface)] text-[var(--color-primary)]"
              />
              <ErrorMessage
                errors={form.formState.errors}
                name="subject"
                render={({ message }) => (
                  <p className="text-red-500 text-sm">{message}</p>
                )}
              />
            </div>

            <div>
              <textarea
                {...form.register("message")}
                rows="5"
                placeholder="Your Message"
                className="w-full border border-[var(--color-border)] rounded-lg px-4 py-2.5 bg-[var(--color-surface)] text-[var(--color-primary)]"
              ></textarea>
              <ErrorMessage
                errors={form.formState.errors}
                name="message"
                render={({ message }) => (
                  <p className="text-red-500 text-sm">{message}</p>
                )}
              />
            </div>

            <button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full bg-[var(--color-primary)] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[var(--color-primary-light)] transition-colors flex justify-center items-center gap-2"
            >
              {form.formState.isSubmitting && (
                <Spinner size="sm" animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              )}
              Send Message
            </button>
          </form>
        </div>

        {/* Thank you modal */}
        {showThankYou && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            onClick={() => setShowThankYou(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="thank-you-title"
          >
            <div
              className="bg-[var(--color-surface-elevated)] rounded-[var(--radius-card)] shadow-xl max-w-md w-full p-8 text-center border border-[var(--color-border)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-center mb-4">
                <FaCheckCircle className="text-5xl text-[var(--color-accent)]" />
              </div>
              <h2 id="thank-you-title" className="text-2xl font-bold text-[var(--color-primary)] mb-2">
                Thank you!
              </h2>
              <p className="text-[var(--color-muted)] mb-6">
                Your message was sent successfully. I&apos;ll get back to you within a few hours.
              </p>
              <button
                type="button"
                onClick={() => setShowThankYou(false)}
                className="px-6 py-2.5 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-light)] transition-colors"
              >
                OK
              </button>
            </div>
          </div>
        )}
       
        {/* Call to Action */}
        <div className="mt-16">
          <h2
            className="text-2xl font-bold text-[var(--color-primary)] mb-2"
            data-aos="fade-up"
          >
            Let’s Build Something Great
          </h2>
          <p className="text-[var(--color-muted)] text-lg" data-aos="fade-up">
            Whether you have a new idea, need a technical partner, or want to
            scale your business, I’m here to help you succeed.
          </p>
        </div>
      </main>
  
      {/* Map Embed */}
      <div className="m-9 rounded-xl overflow-hidden shadow-[var(--shadow-card)] border border-[var(--color-border)]" data-aos="fade-up">
        <iframe
          title="Honolulu Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d921.3906648226896!2d-157.85204733154774!3d21.294742268118046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006e09730af385%3A0x5f6888293ad32dac!2sHub%20Coworking%20Hawai%E2%80%98i!5e0!3m2!1sen!2sus!4v1758228747242!5m2!1sen!2sus"
          className="w-full h-64 border-0"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
