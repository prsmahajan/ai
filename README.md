# Full Stack Next.js Task Manager

A modern, full-stack task management application built with Next.js 15, TypeScript, Prisma, and Tailwind CSS.

## Features

- ✅ Create, Read, Update, and Delete tasks
- ✅ Mark tasks as completed
- ✅ Filter tasks by status (All, Active, Completed)
- ✅ Responsive design with dark mode support
- ✅ Type-safe with TypeScript
- ✅ RESTful API endpoints
- ✅ SQLite database with Prisma ORM
- ✅ Beautiful UI with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: SQLite with Prisma ORM
- **API**: Next.js API Routes

## Project Structure

```
.
├── app/
│   ├── api/
│   │   └── tasks/
│   │       ├── route.ts          # GET all tasks, POST new task
│   │       └── [id]/
│   │           └── route.ts      # GET, PATCH, DELETE task by ID
│   ├── tasks/
│   │   └── page.tsx              # Tasks management page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/
│   ├── TaskCard.tsx              # Individual task card component
│   └── TaskForm.tsx              # Task creation form component
├── lib/
│   └── prisma.ts                 # Prisma client singleton
├── prisma/
│   └── schema.prisma             # Database schema
├── public/                       # Static assets
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

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

3. **Set up environment variables**

Create a `.env` file in the root directory (or use the provided `.env.example`):

```env
DATABASE_URL="file:./dev.db"
```

4. **Generate Prisma Client**

```bash
npx prisma generate
```

If you encounter network issues, try:

```bash
PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING=1 npx prisma generate
```

5. **Initialize the database**

```bash
npx prisma migrate dev --name init
```

Or use:

```bash
npx prisma db push
```

6. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## API Endpoints

### Tasks

- **GET** `/api/tasks` - Get all tasks
  - Query params: `?completed=true|false` (optional filter)

- **POST** `/api/tasks` - Create a new task
  - Body: `{ title: string, description?: string }`

- **GET** `/api/tasks/[id]` - Get a specific task

- **PATCH** `/api/tasks/[id]` - Update a task
  - Body: `{ title?: string, description?: string, completed?: boolean }`

- **DELETE** `/api/tasks/[id]` - Delete a task

### Example API Usage

```javascript
// Create a task
const response = await fetch('/api/tasks', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'My Task',
    description: 'Task description'
  })
});

// Get all active tasks
const response = await fetch('/api/tasks?completed=false');

// Update a task
const response = await fetch(`/api/tasks/${taskId}`, {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ completed: true })
});

// Delete a task
const response = await fetch(`/api/tasks/${taskId}`, {
  method: 'DELETE'
});
```

## Database Schema

The application uses a simple Task model:

```prisma
model Task {
  id          String   @id @default(cuid())
  title       String
  description String?
  completed   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint

## Troubleshooting

### Prisma Binary Download Issues

If you encounter 403 Forbidden errors when downloading Prisma binaries:

1. Set the environment variable:
   ```bash
   export PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING=1
   ```

2. Try using a VPN or different network

3. Use Prisma's binary cache if available

### Database Issues

If the database file is locked or corrupted:

```bash
rm -f prisma/dev.db
npx prisma db push
```

## Development

The app uses:

- **Server Components** for static content
- **Client Components** (`'use client'`) for interactive features
- **API Routes** for backend logic
- **Prisma Client** for type-safe database access

## Deployment

### Deploy to Vercel

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Add environment variables in Vercel dashboard
5. For production, consider using PostgreSQL instead of SQLite

### Environment Variables for Production

For production deployment, update your `.env`:

```env
DATABASE_URL="postgresql://user:password@host:port/database"
```

Then update `prisma/schema.prisma`:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
