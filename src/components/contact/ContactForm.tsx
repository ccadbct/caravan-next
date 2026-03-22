"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="mt-8 border border-sage/30 bg-sage/5 p-8 text-center">
        <p className="font-display text-xl font-medium text-sage">
          Thank you for contacting us.
        </p>
        <p className="mt-2 text-sm text-muted">
          We will get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="mb-1.5 block text-xs font-medium tracking-wider text-muted uppercase"
          >
            First Name <span className="text-terracotta">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full border border-cream-dark bg-white px-4 py-3 text-sm text-foreground transition-colors focus:border-amber focus:ring-0 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="mb-1.5 block text-xs font-medium tracking-wider text-muted uppercase"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full border border-cream-dark bg-white px-4 py-3 text-sm text-foreground transition-colors focus:border-amber focus:ring-0 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-xs font-medium tracking-wider text-muted uppercase"
        >
          Email <span className="text-terracotta">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full border border-cream-dark bg-white px-4 py-3 text-sm text-foreground transition-colors focus:border-amber focus:ring-0 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-1.5 block text-xs font-medium tracking-wider text-muted uppercase"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full border border-cream-dark bg-white px-4 py-3 text-sm text-foreground transition-colors focus:border-amber focus:ring-0 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-xs font-medium tracking-wider text-muted uppercase"
        >
          Message <span className="text-terracotta">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none border border-cream-dark bg-white px-4 py-3 text-sm text-foreground transition-colors focus:border-amber focus:ring-0 focus:outline-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-terracotta">
          Oops, there was an error sending your message. Please try again later.
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
