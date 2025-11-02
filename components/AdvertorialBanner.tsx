export default function AdvertorialBanner() {
  return (
    <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
      {/* Advertorial Label */}
      <div className="bg-gray-200 dark:bg-gray-700 px-4 py-2 border-b border-gray-300 dark:border-gray-600">
        <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
          Advertorial Content
        </p>
      </div>

      {/* Banner Content */}
      <div className="p-6">
        <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
          <div className="text-white text-center px-4">
            <div className="text-4xl mb-2">📢</div>
            <p className="text-lg font-bold mb-1">Partner Content</p>
            <p className="text-sm opacity-90">Sponsored</p>
          </div>
        </div>

        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
          Advertise with AI Spectrum India
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Reach decision-makers and innovators in India's AI ecosystem.
        </p>

        <a
          href="/advertise"
          className="block w-full text-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 rounded font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
