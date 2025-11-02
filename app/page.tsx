import FeaturedSection from '@/components/FeaturedSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Featured Section - Bloomberg Style */}
      <FeaturedSection />

      {/* Latest News Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Latest News & Analysis
            </h2>
            <a
              href="/news-and-analysis/daily-news"
              className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
            >
              View All →
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Placeholder Article 1 */}
            <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
                TECHNOLOGY & INNOVATION
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                New AI Developments Reshaping Indian Tech Industry
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Explore how cutting-edge AI technologies are transforming the landscape...
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-500">
                2 hours ago
              </div>
            </article>

            {/* Placeholder Article 2 */}
            <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
                POLICY & GOVERNANCE
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Government Announces New AI Ethics Framework
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                India's new regulatory framework aims to ensure responsible AI development...
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-500">
                5 hours ago
              </div>
            </article>

            {/* Placeholder Article 3 */}
            <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
                INDUSTRY VERTICALS
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                AI in Agriculture: Smart Farming Revolution
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                How AI-powered solutions are helping Indian farmers increase productivity...
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-500">
                1 day ago
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Ahead of the AI Curve
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for daily AI insights, industry analysis, and exclusive reports
          </p>
          <a
            href="/newsletter"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all hover:shadow-lg"
          >
            Subscribe to Newsletter
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">
            © {new Date().getFullYear()} AI Spectrum India. All rights reserved.
          </p>
          <p className="text-sm">
            The Business of AI and Industry Transformation
          </p>
        </div>
      </footer>
    </div>
  );
}
