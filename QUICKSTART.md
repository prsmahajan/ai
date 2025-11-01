# Quick Start Guide

Get your Full Stack Next.js Task Manager up and running in minutes!

## 1. Install Dependencies

```bash
npm install --legacy-peer-deps
```

## 2. Set Up Database

Run the automated setup script:

```bash
chmod +x setup.sh
./setup.sh
```

Or manually:

```bash
# Generate Prisma Client
PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING=1 npx prisma generate

# Initialize database
npx prisma db push
```

## 3. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## That's it!

Your full stack task manager is now running with:

- ✅ Next.js 15 + React 18
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Prisma ORM + SQLite
- ✅ RESTful API

## What's Next?

1. Navigate to `/tasks` to start managing tasks
2. Check out the API at `/api/tasks`
3. Explore the code in `app/` and `components/`
4. Read the full [README.md](README.md) for detailed documentation

## Troubleshooting

### Prisma Issues?

If Prisma binaries fail to download:

```bash
# Set environment variable
export PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING=1

# Try again
npx prisma generate
```

### Database Issues?

If the database gets locked or corrupted:

```bash
rm -f prisma/dev.db
npx prisma db push
```

### Port Already in Use?

```bash
# Use a different port
PORT=3001 npm run dev
```

## Need Help?

Check the [README.md](README.md) for:
- Full API documentation
- Deployment guides
- Project structure
- Contributing guidelines
