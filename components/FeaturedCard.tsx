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
      <div className="relative aspect-[3/2] overflow-hidden mb-2">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Image Credit */}
      <p className="text-[11px] text-gray-500 dark:text-gray-500 text-right mb-3">
        {article.imageCredit}
      </p>

      {/* Headline */}
      <h2 className={`font-black leading-[1.1] text-gray-900 dark:text-white group-hover:underline transition-all duration-200 ${
        size === 'large' ? 'text-[28px] md:text-[32px]' : 'text-[24px] md:text-[28px]'
      }`}>
        {article.title}
      </h2>
    </Link>
  );
}
