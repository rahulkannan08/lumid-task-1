'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Mail, Phone } from 'lucide-react';

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="flex flex-col gap-3"
          >
            <Link
              href="mailto:email@gmail.com"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border border-[#e5e0d8] text-[#444] hover:text-[#F26227] hover:border-[#F26227] transition-colors"
              aria-label="Email us"
            >
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href="https://whatsapp.com/"
              target="_blank"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 shadow-lg text-white hover:bg-green-600 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </Link>
            <Link
              href="tel:+1245678954"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border border-[#e5e0d8] text-[#444] hover:text-[#F26227] hover:border-[#F26227] transition-colors"
              aria-label="Call us"
            >
              <Phone className="h-5 w-5" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#F26227] text-white shadow-xl hover:bg-[#d9551f] transition-colors"
        aria-label={isOpen ? 'Close contact options' : 'Open contact options'}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </motion.div>
      </button>
    </div>
  );
}

export default FloatingContact;
