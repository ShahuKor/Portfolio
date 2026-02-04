"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="relative pt-6 pb-10">
      <div className="pointer-events-none absolute -right-7 bottom-0 -left-7 h-px border-b border-dashed border-neutral-300 dark:border-neutral-200/20" />
      <p className="py-4 text-2xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
        Contact Me
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="text-md block font-medium tracking-wide text-(--color-secondary)"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-4 py-2 text-neutral-900 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-md block font-medium tracking-wide text-(--color-secondary)"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-4 py-2 text-neutral-900 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="text-md block font-medium tracking-wide text-(--color-secondary)"
          >
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-4 py-2 text-neutral-900 focus:border-neutral-500 focus:ring-1 focus:ring-neutral-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
          />
        </div>

        <div className="flex w-full justify-center">
          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-4 rounded-md border border-neutral-200 px-3 py-1.5 text-sm font-medium shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.12)] dark:border-neutral-300/30 dark:bg-neutral-50/5 dark:shadow-[inset_2px_4px_4px_rgba(255,255,255,0.06)] dark:hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.12)]"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </div>

        {status === "success" && (
          <p className="text-center text-green-600 dark:text-green-400">
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-center text-red-600 dark:text-red-400">
            Failed to send message. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
