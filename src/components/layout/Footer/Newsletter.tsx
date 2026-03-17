'use client';

import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <div className="space-y-3">
      <p className="text-sm text-white/50">Subscribe to the newsletter</p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="flex-1 px-4 py-2 text-sm bg-white/[0.06] border border-white/10 rounded-full text-white placeholder-white/30 focus:outline-none focus:border-[#F26227] transition-colors"
        />
        <button
          type="submit"
          className="px-5 py-2 text-sm font-medium bg-[#F26227] text-white rounded-full hover:bg-[#d9551f] transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
