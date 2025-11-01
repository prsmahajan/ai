export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">📧</div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Ahead of the AI Curve
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Get daily AI insights, industry analysis, and exclusive reports delivered to your inbox
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="interests" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Interests (Optional)
              </label>
              <select
                id="interests"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option>All Topics</option>
                <option>Technology & Innovation</option>
                <option>Policy & Governance</option>
                <option>Industry Verticals</option>
                <option>AI Investor News</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-lg"
            >
              Subscribe Now
            </button>
          </form>

          <div className="mt-8 space-y-4">
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">What to Expect:</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Daily morning digest with top AI news</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Weekly deep-dive analysis and reports</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Exclusive interviews with industry leaders</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Early access to funding announcements</span>
                </li>
              </ul>
            </div>

            <div className="text-center text-xs text-gray-500 dark:text-gray-400">
              <p>We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
