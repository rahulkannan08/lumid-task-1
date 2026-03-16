'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animationVariants';
import { Button } from '@/components/ui';

export function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <motion.div variants={fadeInUp} className="space-y-6">
      <p className="text-sm text-neutral-600">
        We&apos;re just a form away—send us your question, and we&apos;ll be happy to help!
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-neutral-500 mb-1">
            NAME
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 text-sm border border-neutral-300 rounded-lg focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-medium text-neutral-500 mb-1">
            PHONE
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 text-sm border border-neutral-300 rounded-lg focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-neutral-500 mb-1">
            EMAIL
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 text-sm border border-neutral-300 rounded-lg focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-xs font-medium text-neutral-500 mb-1">
            MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 text-sm border border-neutral-300 rounded-lg focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-none transition-all resize-none"
          />
        </div>
        <Button type="submit" variant="primary">
          Send Message
        </Button>
      </form>
    </motion.div>
  );
}
