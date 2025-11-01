export default function SubscribePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              🚀 Subscribe to AI Spectrum India
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Get unlimited access to premium AI news and analysis
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase mb-2">Monthly</div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">₹499</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">per month</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <span className="mr-2">✓</span> Unlimited articles
                </li>
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <span className="mr-2">✓</span> Daily newsletter
                </li>
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <span className="mr-2">✓</span> Premium reports
                </li>
              </ul>
              <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                Get Started
              </button>
            </div>

            <div className="border-2 border-blue-600 dark:border-blue-400 rounded-xl p-6 relative bg-blue-50 dark:bg-blue-900/20">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                BEST VALUE
              </div>
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase mb-2">Annual</div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">₹4,999</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">per year (save 17%)</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <span className="mr-2">✓</span> Everything in Monthly
                </li>
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <span className="mr-2">✓</span> Exclusive webinars
                </li>
                <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <span className="mr-2">✓</span> Early access to reports
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg">
                Subscribe Now
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              What You Get
            </h2>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl mb-2">📰</div>
                <div className="font-semibold text-gray-900 dark:text-white">Unlimited Access</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">All articles & reports</div>
              </div>
              <div>
                <div className="text-3xl mb-2">📧</div>
                <div className="font-semibold text-gray-900 dark:text-white">Daily Digest</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Morning newsletter</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-semibold text-gray-900 dark:text-white">Expert Analysis</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">In-depth insights</div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>30-day money-back guarantee • Cancel anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
}
