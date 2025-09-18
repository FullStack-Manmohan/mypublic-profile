"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import toast from "react-hot-toast";
import { Spinner } from "react-bootstrap";
import { z } from "zod";

const formSchema = z.object({
  fullName: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export default function ContactPage() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);


  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
  subject: "",
}
  });

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: data.fullName,
          email: `${data.email} - Source:from my Portfolio`,
          subject: data.subject,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      toast.success("Thank you for contacting me! I will get back to you soon.");
      form.reset();

    } catch (error) {
      console.error(error.text || error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F3F4F6]">
      {/* Main Content */}
      
      <main className="flex-grow py-16 px-6 text-center">
        <h1
          className="text-4xl font-bold text-[#1E3A8A] mb-8 font-poppins"
          data-aos="fade-up"
        >
          Contact
        </h1>
        <p
          className="mb-8 text-lg font-inter text-[#111827]"
          data-aos="fade-up"
        >
          Interested in working together or have a question?
          <br />
          Reach out via the form or the info below.
        </p>

        {/* Contact Form */}
        <div
          className="mt-16 max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">
            Send a Message
          </h2>

          <form
            className="space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div>
              <input
                {...form.register("fullName")}
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
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
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
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
                {...form.register("subject")}
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
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
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
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
              className="w-full bg-[#1E3A8A] text-white py-2 px-6 rounded-lg font-semibold hover:bg-[#0f2c64] transition-colors flex justify-center items-center gap-2"
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
       
        {/* Call to Action */}
        <div className="mt-16">
          <h2
            className="text-2xl font-bold text-[#1E3A8A] mb-2"
            data-aos="fade-up"
          >
            Let’s Build Something Great
          </h2>
          <p className="text-[#111827] text-lg" data-aos="fade-up">
            Whether you have a new idea, need a technical partner, or want to
            scale your business, I’m here to help you succeed.
          </p>
        </div>
      </main>
  
      {/* Map Embed */}
      <div
        className="m-9 rounded-xl overflow-hidden shadow-lg"
        data-aos="fade-up"
      >
        <iframe
          title="Honolulu Map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-157.8583%2C21.3069%2C-157.8583%2C21.3069&amp;layer=mapnik"
          className="w-full h-64 border-0"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
