import Link from 'next/link';

export default function InvestorCornerPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold uppercase mb-2 text-blue-200">
              AI Spectrum India
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              💼 AI Investor Corner
            </h1>
            <p className="text-xl text-blue-100">
              Your gateway to AI funding news, market analysis, and investment opportunities in India
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">₹12,450 Cr</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Funding Q4 2024</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">127</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Active AI Startups</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">34</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">New Funding Rounds</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">8</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Unicorn Exits</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Articles */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Latest Funding News</h2>

            {[
              { title: "AI Startup Raises ₹500 Cr Series B", company: "TechVenture AI", amount: "₹500 Cr", time: "2 hours ago" },
              { title: "Major VC Fund Announces ₹2000 Cr India AI Fund", company: "Global Ventures", amount: "₹2000 Cr", time: "5 hours ago" },
              { title: "Healthcare AI Platform Secures Pre-Series A", company: "MediTech AI", amount: "₹85 Cr", time: "1 day ago" },
              { title: "Acquisition Alert: BigCorp Acquires AI Analytics Firm", company: "DataInsights AI", amount: "Undisclosed", time: "2 days ago" },
            ].map((item, index) => (
              <article key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold px-3 py-1 rounded-full">
                    {item.amount}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{item.time}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <a href="#">{item.title}</a>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.company} has successfully closed their latest funding round, marking a significant milestone
                  in India's AI startup ecosystem. This investment will fuel expansion and product development.
                </p>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                  Read Full Story →
                </a>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Market Indices */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Market Indices</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">AI Index</span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">+12.5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Tech Sector</span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">+8.3%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">VC Activity</span>
                  <span className="text-red-600 dark:text-red-400 font-semibold">-2.1%</span>
                </div>
              </div>
            </div>

            {/* Top Investors */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Top Investors</h3>
              <ul className="space-y-2">
                {['Sequoia Capital India', 'Accel Partners', 'Tiger Global', 'Lightspeed Venture', 'Matrix Partners'].map((investor) => (
                  <li key={investor}>
                    <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                      • {investor}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">Investor Newsletter</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Get weekly funding updates and market insights
              </p>
              <Link
                href="/newsletter"
                className="block w-full bg-white text-blue-600 text-center px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Subscribe Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
