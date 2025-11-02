import FigmaGrid from '@/components/FigmaGrid';
import NICEBanner from '@/components/NICEBanner';
import NewsListSection from '@/components/NewsListSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <FigmaGrid />
      <NICEBanner />
      <NewsListSection />
    </div>
  );
}
