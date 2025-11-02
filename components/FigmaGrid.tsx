import Image from 'next/image';
import Link from 'next/link';
import { featuredGridArticles } from '@/lib/figma-articles';
import NewsletterCard from './NewsletterCard';
import AdvertBanner from './AdvertBanner';

export default function FigmaGrid() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-4">
        {/* Left Column - 8 cols */}
        <div className="col-span-12 lg:col-span-8">
          <div className="grid grid-cols-2 gap-4">
            {/* Article 1 - Small */}
            <Link href={`/article/${featuredGridArticles[0].id}`} className="group">
              <div className="relative aspect-[4/3] rounded overflow-hidden mb-2">
                <Image
                  src={featuredGridArticles[0].image}
                  alt={featuredGridArticles[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:underline">
                {featuredGridArticles[0].title}
              </h3>
            </Link>

            {/* Article 2 - Large (spans 2 rows) */}
            <Link href={`/article/${featuredGridArticles[1].id}`} className="group row-span-2">
              <div className="relative aspect-[3/4] rounded overflow-hidden mb-2">
                <Image
                  src={featuredGridArticles[1].image}
                  alt={featuredGridArticles[1].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:underline">
                {featuredGridArticles[1].title}
              </h3>
            </Link>

            {/* Article 3 - Small */}
            <Link href={`/article/${featuredGridArticles[2].id}`} className="group">
              <div className="relative aspect-[4/3] rounded overflow-hidden mb-2">
                <Image
                  src={featuredGridArticles[2].image}
                  alt={featuredGridArticles[2].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:underline">
                {featuredGridArticles[2].title}
              </h3>
            </Link>

            {/* Article 4 - Small */}
            <Link href={`/article/${featuredGridArticles[3].id}`} className="group">
              <div className="relative aspect-[4/3] rounded overflow-hidden mb-2">
                <Image
                  src={featuredGridArticles[3].image}
                  alt={featuredGridArticles[3].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:underline">
                {featuredGridArticles[3].title}
              </h3>
            </Link>

            {/* Article 5 - Small */}
            <Link href={`/article/${featuredGridArticles[4].id}`} className="group">
              <div className="relative aspect-[4/3] rounded overflow-hidden mb-2">
                <Image
                  src={featuredGridArticles[4].image}
                  alt={featuredGridArticles[4].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:underline">
                {featuredGridArticles[4].title}
              </h3>
            </Link>

            {/* Article 6 - Small */}
            <Link href={`/article/${featuredGridArticles[5].id}`} className="group">
              <div className="relative aspect-[4/3] rounded overflow-hidden mb-2">
                <Image
                  src={featuredGridArticles[5].image}
                  alt={featuredGridArticles[5].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:underline">
                {featuredGridArticles[5].title}
              </h3>
            </Link>

            {/* Article 7 - Small */}
            <Link href={`/article/${featuredGridArticles[6].id}`} className="group">
              <div className="relative aspect-[4/3] rounded overflow-hidden mb-2">
                <Image
                  src={featuredGridArticles[6].image}
                  alt={featuredGridArticles[6].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:underline">
                {featuredGridArticles[6].title}
              </h3>
            </Link>

            {/* Article 8 - Small */}
            <Link href={`/article/${featuredGridArticles[7].id}`} className="group">
              <div className="relative aspect-[4/3] rounded overflow-hidden mb-2">
                <Image
                  src={featuredGridArticles[7].image}
                  alt={featuredGridArticles[7].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:underline">
                {featuredGridArticles[7].title}
              </h3>
            </Link>

            {/* Article 9 - Small */}
            <Link href={`/article/${featuredGridArticles[8].id}`} className="group">
              <div className="relative aspect-[4/3] rounded overflow-hidden mb-2">
                <Image
                  src={featuredGridArticles[8].image}
                  alt={featuredGridArticles[8].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:underline">
                {featuredGridArticles[8].title}
              </h3>
            </Link>

            {/* Article 10 - Medium (spans 2 columns) */}
            <Link href={`/article/${featuredGridArticles[9].id}`} className="group col-span-2">
              <div className="relative aspect-[16/5] rounded overflow-hidden mb-2">
                <Image
                  src={featuredGridArticles[9].image}
                  alt={featuredGridArticles[9].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:underline">
                {featuredGridArticles[9].title}
              </h3>
            </Link>
          </div>
        </div>

        {/* Right Sidebar - 4 cols */}
        <div className="col-span-12 lg:col-span-4 space-y-4">
          {/* Newsletter Card */}
          <NewsletterCard />

          {/* Advertisement Banner */}
          <AdvertBanner />
        </div>
      </div>
    </section>
  );
}
