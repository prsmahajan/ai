import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Full Stack Next.js App
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            A modern task management application built with Next.js, TypeScript, Prisma, and Tailwind CSS
          </p>
          <Link
            href="/tasks"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Get Started
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Fast & Modern
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Built with Next.js 15 and React 19 for optimal performance
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Beautiful UI
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Styled with Tailwind CSS with dark mode support
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="text-3xl mb-4">🗄️</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Full Stack
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Complete backend with Prisma ORM and SQLite database
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Features
          </h2>
          <ul className="text-lg text-gray-600 dark:text-gray-300 space-y-2">
            <li>✅ Create, Read, Update, and Delete tasks</li>
            <li>✅ Mark tasks as completed</li>
            <li>✅ Filter tasks by status</li>
            <li>✅ Responsive design</li>
            <li>✅ Type-safe with TypeScript</li>
            <li>✅ RESTful API endpoints</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
