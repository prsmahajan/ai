import Link from 'next/link';
import { notFound } from 'next/navigation';

// Navigation data (same as in Header)
const NAVIGATION_DATA: Record<string, string[]> = {
  'News & Analysis': [
    'Daily News',
    'Market Updates',
    'Policy & Regulations',
    'Start-up Watch'
  ],
  'Policy & Governance': [
    'Ethics & Responsible AI',
    'India AI Policy Updates',
    'Government Initiatives',
    'International AI Collaboration'
  ],
  'Industry Verticals': [
    'Healthcare & Life Sciences',
    'Finance & FinTech',
    'Manufacturing & Industry 4.0',
    'Agriculture & FoodTech',
    'Education & Skilling',
    'Retail & E-Commerce',
    'Smart Cities & Mobility',
    'Cybersecurity & Defence',
    'Media & Entertainment'
  ],
  'Technology & Innovation': [
    'Generative AI',
    'Machine Learning & Deep Learning',
    'Robotics & Automation',
    'Data Analytics & Cloud AI',
    'Edge Computing & IoT',
    'AI Chips & Hardware',
    'Quantum & Emerging Tech',
    'Data Centre & AI Infrastructure',
    'Enterprise AI Solutions'
  ],
  'AI Leadership': [
    'INTERVIEWS',
    'FEATURE',
    'INSIGHTS'
  ],
  'AI Special': [
    'REPORTS',
    'ANALYSIS',
    'Academic & Research Voice',
    'AI Tools Kit',
    'Events',
    'AI Talent & Workforce',
    'AI Research & Development'
  ],
  'Regions': [
    'North America',
    'Europe',
    'Asia Pacific',
    'India',
    'China',
    'Middle East & North Africa',
    'Australia & New Zealand',
    'Global/International'
  ]
};

// Helper function to convert slug back to title
function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/And/g, '&');
}

// Helper function to find matching category
function findCategory(categorySlug: string, subcategorySlug: string) {
  const categoryTitle = slugToTitle(categorySlug);
  const subcategoryTitle = slugToTitle(subcategorySlug);

  for (const [category, subcategories] of Object.entries(NAVIGATION_DATA)) {
    const normalizedCategory = category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');

    if (normalizedCategory === categorySlug) {
      const matchingSubcategory = subcategories.find(sub => {
        const normalizedSub = sub.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
        return normalizedSub === subcategorySlug;
      });

      if (matchingSubcategory) {
        return {
          category,
          subcategory: matchingSubcategory,
          allSubcategories: subcategories
        };
      }
    }
  }

  return null;
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}) {
  const { category: categorySlug, subcategory: subcategorySlug } = await params;

  const pageData = findCategory(categorySlug, subcategorySlug);

  if (!pageData) {
    notFound();
  }

  const { category, subcategory, allSubcategories } = pageData;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Breadcrumb */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 dark:text-gray-400">{category}</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 dark:text-white font-semibold">{subcategory}</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold uppercase mb-2 text-blue-200">
              {category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {subcategory}
            </h1>
            <p className="text-xl text-blue-100">
              Latest news, analysis, and insights about {subcategory.toLowerCase()}
            </p>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* Placeholder Articles */}
              {[1, 2, 3, 4, 5].map((index) => (
                <article
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-semibold mb-3">
                    <span className="uppercase">{category}</span>
                    <span>•</span>
                    <span className="text-gray-500 dark:text-gray-400">{index} hour{index > 1 ? 's' : ''} ago</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <a href="#">
                      Breaking: Latest Developments in {subcategory} - Article {index}
                    </a>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    This is a placeholder article about {subcategory}. In-depth analysis and coverage of the latest trends,
                    innovations, and market movements in this rapidly evolving sector. Stay informed with expert insights
                    and comprehensive reporting from AI Spectrum India.
                  </p>
                  <div className="flex items-center justify-between">
                    <a
                      href="#"
                      className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                    >
                      Read More →
                    </a>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span>5 min read</span>
                      <span>•</span>
                      <span>By Editorial Team</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Related Topics */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  More in {category}
                </h3>
                <ul className="space-y-2">
                  {allSubcategories.map((sub) => (
                    <li key={sub}>
                      <Link
                        href={`/${categorySlug}/${sub.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
                        className={`block px-3 py-2 rounded-lg transition-colors ${
                          sub === subcategory
                            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-semibold'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                      >
                        {sub}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">
                  Stay Updated
                </h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Get the latest {subcategory} news delivered to your inbox
                </p>
                <Link
                  href="/newsletter"
                  className="block w-full bg-white text-blue-600 text-center px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Subscribe Now
                </Link>
              </div>

              {/* Trending Topics */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Trending Now
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                      📈 AI Market Growth Predictions 2025
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                      🚀 New Funding Round Announcements
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                      🏆 Top AI Startups to Watch
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                      📊 Industry Report: Q4 Analysis
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all category/subcategory combinations
export async function generateStaticParams() {
  const params: { category: string; subcategory: string }[] = [];

  Object.entries(NAVIGATION_DATA).forEach(([category, subcategories]) => {
    const categorySlug = category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');

    subcategories.forEach((subcategory) => {
      const subcategorySlug = subcategory.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
      params.push({
        category: categorySlug,
        subcategory: subcategorySlug
      });
    });
  });

  return params;
}
