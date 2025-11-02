import Image from 'next/image';
import Link from 'next/link';
import { moreAINews } from '@/lib/figma-articles';

export default function NewsListSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        More AI News
      </h2>

      <div className="space-y-6">
        {moreAINews.map((item) => (
          <Link
            key={item.id}
            href={`/article/${item.id}`}
            className="flex gap-6 items-start hover:bg-gray-50 dark:hover:bg-gray-900 p-4 rounded-lg transition-colors group"
          >
            {/* Date */}
            <div className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap min-w-[120px]">
              {item.date}
            </div>

            {/* Title */}
            <div className="flex-1">
              <h3 className="text-base font-normal text-gray-900 dark:text-white group-hover:underline">
                {item.title}
              </h3>
            </div>

            {/* Thumbnail */}
            <div className="relative w-24 h-16 flex-shrink-0 rounded overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
          </Link>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-10">
        <button className="border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white px-8 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium">
          Load more
        </button>
      </div>
    </section>
  );
}
