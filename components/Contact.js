"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all the fields.");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    setError("");
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold text-dark dark:text-white">Get In Touch</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Have a project in mind? Send us a message.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary"/>

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
          ></textarea>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {submitted && (
            <p className="text-green-600 text-sm">
              Thanks! Your message has been sent.
            </p>
          )}

          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
