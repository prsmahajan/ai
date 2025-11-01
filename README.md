# AI Spectrum India

**The Business of AI and Industry Transformation**

A premium, Bloomberg/TechCrunch-inspired news website focused on AI developments, policy, and industry transformation in India.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)

---

## 🌟 Features

### Navigation System
- ✅ **Responsive Header** - Works seamlessly on desktop, tablet, and mobile
- ✅ **Dropdown Menus** - Hover-activated on desktop, tap-activated on mobile
- ✅ **Mobile Menu** - Accordion-style navigation with smooth animations
- ✅ **Dark Mode** - System-aware theme with manual toggle
- ✅ **Sticky Navigation** - Always accessible while scrolling
- ✅ **Keyboard Accessible** - Full keyboard navigation support

### Content Categories
1. **News & Analysis** - Daily news, market updates, policy & regulations
2. **Policy & Governance** - Ethics, policy updates, government initiatives
3. **Industry Verticals** - Healthcare, Finance, Manufacturing, Agriculture, and more
4. **Technology & Innovation** - Generative AI, ML, Robotics, IoT, and more
5. **AI Leadership** - Interviews, features, insights
6. **AI Special** - Reports, analysis, research, events
7. **Regions** - Global coverage including India, North America, Europe, Asia Pacific
8. **AI Investor Corner** - Funding news and market analysis

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd ai
```

2. **Install dependencies**
```bash
npm install --legacy-peer-deps
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

---

## 📁 Project Structure

```
ai/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Main navigation component
│   └── ThemeProvider.tsx   # Theme wrapper
├── public/
│   └── ai.svg              # Logo file (replace with your ai.png)
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

---

## 🎨 Design System

### Colors

**Light Mode:**
- Background: `#ffffff`
- Text: `#171717`
- Navy: `#0f172a`, `#1e293b`
- Blue: `#3b82f6`, `#2563eb`

**Dark Mode:**
- Background: `#0a0a0a`
- Text: `#ededed`
- Navy: `#0f172a`, `#1e293b`
- Blue: `#3b82f6`, `#2563eb`

### Typography
- Font: Inter (Google Fonts)
- Headings: Bold, various sizes
- Body: Regular weight

### Spacing
- Navigation height: 56px
- Top bar: 48px
- Logo bar: Auto (padding-based)

---

## 🧭 Navigation Structure

### Desktop Navigation
- Hover over category names to see dropdown menus
- Click to navigate to category pages
- Theme toggle on the right side
- Subscribe button in logo bar

### Mobile Navigation
- Hamburger menu button
- Accordion-style categories
- Tap to expand/collapse
- Subscribe button at bottom of menu

### URL Structure

All URLs follow the pattern:
```
/{parent-category}/{sub-category}

Examples:
/news-and-analysis/daily-news
/technology-and-innovation/generative-ai
/industry-verticals/healthcare-and-life-sciences
/regions/india
```

---

## ⚙️ Configuration

### Theme Configuration

The site uses `next-themes` for theme management:
- **System default** - Follows OS preference
- **Manual toggle** - Sun/Moon icon in navigation
- **Persistent** - Theme choice saved to localStorage

### Tailwind Configuration

Dark mode is configured as `class`-based:
```typescript
// tailwind.config.ts
darkMode: 'class'
```

---

## 📝 Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Adding New Categories

To add a new category to the navigation:

1. Open `components/Header.tsx`
2. Add to `NAVIGATION_DATA` object:
```typescript
const NAVIGATION_DATA: Record<string, string[]> = {
  // ... existing categories
  'Your New Category': [
    'Sub-item 1',
    'Sub-item 2',
    'Sub-item 3'
  ]
}
```

3. The URL will be auto-generated as `/your-new-category/sub-item-1`

---

## 🎯 Key Components

### Header Component
**Location:** `components/Header.tsx`

Features:
- Date display in top bar
- Logo with link to homepage
- Desktop dropdown navigation
- Mobile accordion menu
- Theme toggle
- Subscribe CTA button

**State Management:**
- `mobileMenuOpen` - Controls mobile menu visibility
- `activeDropdown` - Tracks which desktop dropdown is open
- `expandedMobile` - Tracks which mobile accordion is expanded
- `currentDate` - Formatted date string

### Theme Provider
**Location:** `components/ThemeProvider.tsx`

Simple wrapper around `next-themes` for theme functionality.

---

## 🔧 Customization

### Replace Logo

Replace `/public/ai.svg` with your own logo:
1. Add your logo file to `/public/` (e.g., `ai.png`)
2. Update `components/Header.tsx`:
```typescript
<Image
  src="/ai.png"  // Change this
  alt="AI Spectrum India"
  width={280}
  height={60}
/>
```

### Change Colors

Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      navy: {
        950: '#your-color',
        900: '#your-color',
      },
    },
  },
}
```

### Modify Navigation

Edit the `NAVIGATION_DATA` object in `components/Header.tsx` to add/remove/modify categories.

---

## 📱 Responsive Breakpoints

```typescript
sm: 640px   // Small devices
md: 768px   // Medium devices
lg: 1024px  // Large devices (desktop nav shows)
xl: 1280px  // Extra large
2xl: 1536px // 2X Extra large
```

**Behavior:**
- **< 1024px:** Mobile menu (hamburger)
- **≥ 1024px:** Desktop menu (horizontal navigation)

---

## ♿ Accessibility

- ✅ Semantic HTML
- ✅ ARIA attributes on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus states visible
- ✅ Alt text on images
- ✅ Proper heading hierarchy

---

## 🚀 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import repository in Vercel
3. Vercel auto-detects Next.js
4. Deploy!

### Environment Variables

No environment variables required for basic setup.

### Build Command
```bash
npm run build
```

---

## 📦 Dependencies

### Core
- **next** (14.2.0) - React framework
- **react** (18.3.1) - UI library
- **react-dom** (18.3.1) - DOM rendering

### UI & Styling
- **tailwindcss** (3.4.1) - Utility-first CSS
- **next-themes** (0.3.0) - Theme management
- **lucide-react** (0.263.1) - Icons

### Dev Dependencies
- **typescript** (5.x) - Type safety
- **eslint** (8.x) - Code linting
- **autoprefixer** (10.x) - CSS prefixing

---

## 🐛 Troubleshooting

### Logo Not Showing
- Ensure logo file exists in `/public/`
- Check file path in `Header.tsx`
- Try clearing Next.js cache: `rm -rf .next`

### Theme Not Working
- Check `ThemeProvider` wraps app in `layout.tsx`
- Ensure `suppressHydrationWarning` is on `<html>` tag
- Clear browser localStorage

### Mobile Menu Not Opening
- Check for JavaScript errors in console
- Ensure `mobileMenuOpen` state is working
- Verify click handler is attached

---

## 📄 License

© 2025 AI Spectrum India. All rights reserved.

---

## 🤝 Contributing

This is a private project. For questions or issues, contact the development team.

---

## 📞 Support

For support, please contact:
- **Product Manager:** Your Wife 💙
- **Developer:** Claude Code

---

**Built with ❤️ for AI Spectrum India**

*Let's build something amazing together!* 🚀
