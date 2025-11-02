'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NewsletterCard() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-gray-50 dark:bg-gray-900">
      {/* Icon/Illustration */}
      <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg mb-4 flex items-center justify-center">
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      </div>

      {/* Badge */}
      <div className="text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
        SUBSCRIBER ONLY
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
        Get the Tech In Depth newsletter.
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Analysis and scoops about the business of AI from AI Spectrum India's
        journalists around the world.
      </p>

      {/* Preview Link */}
      <a href="#" className="text-sm text-blue-600 dark:text-blue-400 underline mb-4 block hover:text-blue-800 dark:hover:text-blue-300">
        Preview
      </a>

      {/* Checkbox */}
      <label className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400 mb-4 cursor-pointer">
        <input
          type="checkbox"
          className="mt-1"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        <span>AI Spectrum India may send me offers and promotions.</span>
      </label>

      {/* Subscribe Button */}
      <Link
        href="/subscribe"
        className="block w-full bg-black dark:bg-white text-white dark:text-black text-center py-3 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
      >
        🔒 Subscribe
      </Link>

      {/* Terms */}
      <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
        By continuing, I agree to the{' '}
        <a href="#" className="underline hover:text-gray-700 dark:hover:text-gray-300">Privacy Policy</a> and{' '}
        <a href="#" className="underline hover:text-gray-700 dark:hover:text-gray-300">Terms of Service</a>.
      </p>
    </div>
  );
}
