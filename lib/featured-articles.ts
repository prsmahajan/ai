// Featured articles data
export interface FeaturedArticle {
  id: string;
  title: string;
  excerpt?: string;
  image: string;
  imageCredit: string;
  category?: string;
  date: string;
  slug: string;
}

export const featuredArticles: FeaturedArticle[] = [
  {
    id: '1',
    title: 'Nvidia Becomes First Public Company To Reach $5 Trillion Market Cap',
    excerpt: 'AI chip maker hits historic milestone amid continued demand for advanced computing infrastructure across global markets.',
    image: '/images/nvidia-feature.jpg',
    imageCredit: 'SeongJoon Cho/Bloomberg',
    category: 'MARKETS',
    date: '31 October, 2025',
    slug: 'nvidia-5-trillion-market-cap'
  },
  {
    id: '2',
    title: 'Google Partners With Reliance For Free AI Access Across India',
    excerpt: 'Strategic partnership aims to democratize AI technology access for millions of Indian users and businesses.',
    image: '/images/google-reliance.jpg',
    imageCredit: 'Dhiraj Singh/Bloomberg',
    category: 'PARTNERSHIPS',
    date: '31 October, 2025',
    slug: 'google-reliance-ai-partnership'
  },
  {
    id: '3',
    title: 'OpenAI Launches GPT-5 With Breakthrough Reasoning Capabilities',
    excerpt: 'Latest model demonstrates unprecedented problem-solving abilities, raising both excitement and ethical concerns.',
    image: '/images/openai-gpt5.jpg',
    imageCredit: 'David Paul Morris/Bloomberg',
    category: 'TECHNOLOGY',
    date: '30 October, 2025',
    slug: 'openai-gpt5-launch'
  },
  {
    id: '4',
    title: 'Indian AI Startup Raises $200M Series C Led By Sequoia',
    excerpt: 'Healthcare AI platform secures major funding to expand across Southeast Asia and develop new diagnostic tools.',
    image: '/images/startup-funding.jpg',
    imageCredit: 'Kuni Takahashi/Bloomberg',
    category: 'FUNDING',
    date: '30 October, 2025',
    slug: 'indian-ai-startup-200m-funding'
  }
];

export interface Category {
  name: string;
  slug: string;
  active?: boolean;
}

export const categories: Category[] = [
  { name: 'AI News', slug: 'ai-news', active: true },
  { name: 'Funding', slug: 'funding' },
  { name: 'Policy', slug: 'policy' },
  { name: 'Technology', slug: 'technology' },
  { name: 'Startups', slug: 'startups' },
];
