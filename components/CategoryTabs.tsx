'use client';

import { useState } from 'react';
import { categories } from '@/lib/featured-articles';

export default function CategoryTabs() {
  const [activeTab, setActiveTab] = useState('ai-news');

  return (
    <nav
      className="flex gap-6 border-b border-gray-200 dark:border-gray-800 pb-3 mb-6 overflow-x-auto scrollbar-hide"
      role="navigation"
      aria-label="Content categories"
    >
      {categories.map((category) => (
        <button
          key={category.slug}
          onClick={() => setActiveTab(category.slug)}
          className={`text-base whitespace-nowrap transition-all ${
            activeTab === category.slug
              ? 'font-semibold text-gray-900 dark:text-white'
              : 'font-normal text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline'
          }`}
        >
          {category.name}
        </button>
      ))}
      <button className="text-base font-normal text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:underline whitespace-nowrap">
        → More
      </button>
    </nav>
  );
}
