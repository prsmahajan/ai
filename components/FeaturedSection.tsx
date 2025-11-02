import CategoryTabs from './CategoryTabs';
import FeaturedCard from './FeaturedCard';
import AdvertorialBanner from './AdvertorialBanner';
import { featuredArticles } from '@/lib/featured-articles';

export default function FeaturedSection() {
  return (
    <section className="container mx-auto px-4 py-6">
      {/* Section Title */}
      <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
        Technology
      </h1>

      {/* Category Tabs */}
      <CategoryTabs />

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-5">

        {/* Left Column - 4 cols */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <FeaturedCard article={featuredArticles[0]} size="large" />
          <FeaturedCard article={featuredArticles[1]} size="large" />
        </div>

        {/* Middle Column - 4 cols */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <FeaturedCard article={featuredArticles[2]} size="large" />
          <FeaturedCard article={featuredArticles[3]} size="large" />
        </div>

        {/* Right Sidebar - 4 cols */}
        <div className="col-span-12 lg:col-span-4 space-y-5">
          <AdvertorialBanner />

          {/* Podcast/Media Card */}
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
            <div className="p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded flex-shrink-0 flex items-center justify-center text-white font-bold text-xs">
                  PODCAST
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">
                    Foundering
                  </p>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white line-clamp-2">
                    OpenAI E5, Beware the Ides of November
                  </h4>
                </div>
              </div>

              {/* Play Button and Progress Bar */}
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center flex-shrink-0 hover:scale-105 transition-transform">
                  <svg className="w-4 h-4 text-white dark:text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
                <div className="flex-1">
                  <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-gray-900 dark:bg-white"></div>
                  </div>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">47:48</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
