export default function EditorialCalendarPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Editorial Calendar
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Stay informed about our upcoming coverage and special reports
          </p>

          {/* Upcoming Coverage */}
          <div className="space-y-8">
            {[
              {
                date: 'November 4, 2025',
                title: 'AI in Healthcare Special Report',
                description: 'Comprehensive analysis of AI applications in Indian healthcare sector',
                topics: ['Medical Imaging', 'Drug Discovery', 'Patient Care']
              },
              {
                date: 'November 11, 2025',
                title: 'Generative AI Landscape 2025',
                description: 'Deep dive into the latest LLMs and their business applications',
                topics: ['GPT Models', 'Enterprise Use Cases', 'ROI Analysis']
              },
              {
                date: 'November 18, 2025',
                title: 'AI Policy & Governance Forum',
                description: 'Expert roundtable on India\'s AI regulatory framework',
                topics: ['Ethics', 'Data Privacy', 'Government Initiatives']
              },
              {
                date: 'November 25, 2025',
                title: 'Q4 Funding Report',
                description: 'Complete analysis of AI startup funding in India',
                topics: ['Venture Capital', 'Valuations', 'Exit Strategies']
              },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-semibold px-3 py-1 rounded-full">
                    {item.date}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.topics.map((topic) => (
                    <span
                      key={topic}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Recurring Features */}
          <div className="mt-12 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Recurring Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">📅 Daily</h3>
                <ul className="space-y-1 text-blue-100 text-sm">
                  <li>• Morning News Digest</li>
                  <li>• Market Updates</li>
                  <li>• Funding Announcements</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">📅 Weekly</h3>
                <ul className="space-y-1 text-blue-100 text-sm">
                  <li>• Industry Deep Dive (Mondays)</li>
                  <li>• Leadership Interview (Wednesdays)</li>
                  <li>• Weekend Roundup (Fridays)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">📅 Monthly</h3>
                <ul className="space-y-1 text-blue-100 text-sm">
                  <li>• Policy & Governance Report</li>
                  <li>• Startup Spotlight</li>
                  <li>• Technology Trends Analysis</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">📅 Quarterly</h3>
                <ul className="space-y-1 text-blue-100 text-sm">
                  <li>• Funding Landscape Report</li>
                  <li>• Industry Benchmark Study</li>
                  <li>• Market Predictions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
