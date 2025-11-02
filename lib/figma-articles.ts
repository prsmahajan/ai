export interface Article {
  id: string;
  title: string;
  image: string;
  category?: string;
  date?: string;
  size?: 'small' | 'medium' | 'large';
}

export const featuredGridArticles: Article[] = [
  {
    id: '1',
    title: 'Green Investors Enjoy Huge Returns as Stock Market Powers Through Turbulence',
    image: '/images/article-1.jpg',
    size: 'small'
  },
  {
    id: '2',
    title: 'Big Tech Earnings Reveal Cracks in Case for Massive AI Spending',
    image: '/images/article-2.jpg',
    size: 'large'
  },
  {
    id: '3',
    title: 'The AI Buildout Is So Big Even a Nuclear Power Owner Wants In',
    image: '/images/article-3.jpg',
    size: 'small'
  },
  {
    id: '4',
    title: 'China Issues First Sovereign Debt in London Since 2018',
    image: '/images/article-4.jpg',
    size: 'small'
  },
  {
    id: '5',
    title: 'Supreme Court Justices Spar Over DEI Programs',
    image: '/images/article-5.jpg',
    size: 'small'
  },
  {
    id: '6',
    title: 'Dubai Billionaire Looks to Sell Stake in NICE',
    image: '/images/article-6.jpg',
    size: 'small'
  },
  {
    id: '7',
    title: 'Anthropic Rival Path to $1 Billion',
    image: '/images/article-7.jpg',
    size: 'small'
  },
  {
    id: '8',
    title: 'Disney After Big Boost Sets Its Sights on Streaming Profit',
    image: '/images/article-8.jpg',
    size: 'small'
  },
  {
    id: '9',
    title: 'Google Pays Billions to Keep Search Deal',
    image: '/images/article-9.jpg',
    size: 'small'
  },
  {
    id: '10',
    title: 'OpenAIs Chairman Is Thinking a Lot About Board Diversity',
    image: '/images/article-10.jpg',
    size: 'medium'
  }
];

export interface NewsListItem {
  id: string;
  date: string;
  title: string;
  image: string;
}

export const moreAINews: NewsListItem[] = [
  {
    id: '1',
    date: 'October 31, 2024',
    title: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    image: '/images/news-1.jpg'
  },
  {
    id: '2',
    date: 'October 30, 2024',
    title: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    image: '/images/news-2.jpg'
  },
  {
    id: '3',
    date: 'October 29, 2024',
    title: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    image: '/images/news-3.jpg'
  },
  {
    id: '4',
    date: 'October 28, 2024',
    title: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    image: '/images/news-4.jpg'
  },
  {
    id: '5',
    date: 'October 27, 2024',
    title: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    image: '/images/news-5.jpg'
  },
  {
    id: '6',
    date: 'October 26, 2024',
    title: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    image: '/images/news-6.jpg'
  },
  {
    id: '7',
    date: 'October 25, 2024',
    title: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    image: '/images/news-7.jpg'
  },
  {
    id: '8',
    date: 'October 24, 2024',
    title: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    image: '/images/news-8.jpg'
  },
  {
    id: '9',
    date: 'October 23, 2024',
    title: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    image: '/images/news-9.jpg'
  },
  {
    id: '10',
    date: 'October 22, 2024',
    title: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    image: '/images/news-10.jpg'
  }
];
