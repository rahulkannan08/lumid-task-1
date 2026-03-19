'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animationVariants';
import { cn } from '@/lib/cn';

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
    'w-full bg-transparent border-0 border-b-[1.5px] border-[#21201b]/15 px-0 py-2.5 text-[14px] text-[#21201b] placeholder-[#21201b]/30 focus:border-[#ff833b] focus:outline-none focus:ring-0 transition-colors duration-200';

  const labelClasses =
    'block text-[10px] font-medium text-[#21201b]/40 uppercase tracking-[0.08em] mb-1';

  return (
    <motion.div variants={fadeInUp} className="bg-[#fffbf5] rounded-lg p-8 lg:p-10 shadow-[0_1px_25px_rgba(20,20,20,0.04)]">
      <h3 className="text-[22px] lg:text-[26px] font-medium text-[#21201b] tracking-[-0.03em] mb-2">
        Got a question?
      </h3>
      <p className="text-[13px] text-[#21201b]/50 mb-8 leading-[170%]">
        We&apos;re just a form away—send us your question, and we&apos;ll be happy to help!
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className={labelClasses}>NAME</label>
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
            <label htmlFor="phone" className={labelClasses}>PHONE</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>EMAIL</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="message" className={labelClasses}>MESSAGE</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className={`${inputClasses} resize-none`}
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center gap-0 text-[13px] font-medium text-[#fffbf5] bg-[#141414] rounded-[6px] overflow-hidden hover:bg-[#ff833b] transition-colors duration-300 cursor-pointer"
        >
          <span className="flex items-center justify-center w-[36px] h-[36px] bg-[#ff833b] rounded-[4px] m-[3px] text-white text-[16px] font-bold">
            »
          </span>
          <span className="px-4 py-2">Send Message</span>
        </button>
      </form>
    </motion.div>
  );
}
