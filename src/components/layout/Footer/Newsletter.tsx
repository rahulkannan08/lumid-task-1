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
      <p className="text-sm text-neutral-400">Subscribe to the newsletter</p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="flex-1 px-4 py-2 text-sm bg-neutral-900 border border-neutral-800 rounded-full text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
        />
        <button
          type="submit"
          className="px-5 py-2 text-sm font-medium bg-white text-neutral-900 rounded-full hover:bg-neutral-200 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
