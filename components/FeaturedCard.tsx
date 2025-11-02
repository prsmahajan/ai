import Link from 'next/link';
import Image from 'next/image';
import type { FeaturedArticle } from '@/lib/featured-articles';

interface FeaturedCardProps {
  article: FeaturedArticle;
  size?: 'large' | 'medium';
}

export default function FeaturedCard({ article, size = 'large' }: FeaturedCardProps) {
  return (
    <Link
      href={`/article/${article.slug}`}
      className="group block"
      aria-label={`Read article: ${article.title}`}
    >
      {/* Image */}
      <div className="relative aspect-[3/2] rounded-lg overflow-hidden mb-4">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
        />
      </div>

      {/* Image Credit */}
      <p className="text-xs text-gray-500 dark:text-gray-500 text-right mb-3">
        {article.imageCredit}
      </p>

      {/* Category Badge (optional) */}
      {article.category && (
        <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
          {article.category}
        </div>
      )}

      {/* Headline */}
      <h2 className={`font-bold leading-tight text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 ${
        size === 'large' ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-xl md:text-2xl lg:text-3xl'
      }`}>
        {article.title}
      </h2>

      {/* Excerpt (optional) */}
      {article.excerpt && (
        <p className="text-base text-gray-600 dark:text-gray-400 mt-3 line-clamp-2">
          {article.excerpt}
        </p>
      )}

      {/* Date */}
      <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
        {article.date}
      </p>
    </Link>
  );
}
