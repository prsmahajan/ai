import CategoryTabs from './CategoryTabs';
import FeaturedCard from './FeaturedCard';
import NewsletterCard from './NewsletterCard';
import { featuredArticles } from '@/lib/featured-articles';

export default function FeaturedSection() {
  return (
    <section className="container mx-auto px-4 py-8">
      {/* Category Tabs */}
      <CategoryTabs />

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-6">

        {/* Left Column - 5 cols */}
        <div className="col-span-12 lg:col-span-5 space-y-8">
          <FeaturedCard article={featuredArticles[0]} size="large" />
          <FeaturedCard article={featuredArticles[1]} size="large" />
        </div>

        {/* Middle Column - 5 cols */}
        <div className="col-span-12 lg:col-span-5 space-y-8">
          <FeaturedCard article={featuredArticles[2]} size="large" />
          <FeaturedCard article={featuredArticles[3]} size="large" />
        </div>

        {/* Right Sidebar - 2 cols */}
        <div className="col-span-12 lg:col-span-2 space-y-6">
          <NewsletterCard />

          {/* Podcast/Media Card Placeholder */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-gray-50 dark:bg-gray-900">
            <div className="text-sm font-bold text-gray-900 dark:text-white mb-2">
              Latest Podcast
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
              Listen to our weekly AI insights podcast
            </p>
            <div className="w-full h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
              ▶ Play Episode
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
