export default function NICEBanner() {
  return (
    <section className="bg-gray-900 dark:bg-black py-12 my-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <div className="bg-white px-6 py-3 rounded">
              <span className="text-2xl font-black text-gray-900">NICE</span>
            </div>

            {/* Text */}
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              AI that connects people and platforms
            </h2>
          </div>

          {/* Button */}
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-full transition-colors whitespace-nowrap">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
}
