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

  const inputClasses =
    'w-full bg-transparent border-0 border-b-[1.5px] border-[#ddd] px-0 py-2.5 text-sm text-[#111] placeholder-[#bbb] focus:border-[#F26227] focus:outline-none focus:ring-0 transition-colors duration-200';

  const labelClasses =
    'block text-[11px] font-medium text-[#888] uppercase tracking-[0.08em] mb-1';

  return (
    <motion.div variants={fadeInUp} className="space-y-6">
      <p className="text-sm text-[#666]">
        We&apos;re just a form away—send us your question, and we&apos;ll be happy to help!
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className={labelClasses}>
            NAME
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            PHONE
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            EMAIL
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="message" className={labelClasses}>
            MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
            className={`${inputClasses} resize-none`}
          />
        </div>
        <Button type="submit" variant="primary">
          Send Message →
        </Button>
      </form>
    </motion.div>
  );
}
