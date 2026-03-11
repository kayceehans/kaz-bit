// components/ContactForm.tsx
"use client";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {debugger
    var SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current!, PUBLIC_KEY)
      .then(() => alert('Message Sent!'), (error) => console.log(error.text));
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4 bg-blue-950 p-8 rounded-lg">
      <input type="text" name="user_name" placeholder="Full Name" className="w-full p-3 bg-blue-900 border border-blue-700 text-white rounded focus:outline-none focus:border-blue-400" required />
      <input type="email" name="user_email" placeholder="Email Address" className="w-full p-3 bg-blue-900 border border-blue-700 text-white rounded focus:outline-none focus:border-blue-400" required />
      <textarea name="message" placeholder="How can we help?" className="w-full p-3 bg-blue-900 border border-blue-700 text-white rounded h-32" required />
      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded transition shadow-lg">Send Message</button>
    </form>
  );
}
