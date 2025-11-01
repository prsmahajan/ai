#!/bin/bash

# Full Stack Next.js App Setup Script

echo "🚀 Setting up Full Stack Next.js App..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install --legacy-peer-deps
else
  echo "✅ Dependencies already installed"
fi

# Generate Prisma Client
echo "🔧 Generating Prisma Client..."
if PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING=1 npx prisma generate; then
  echo "✅ Prisma Client generated successfully"
else
  echo "❌ Failed to generate Prisma Client"
  echo "   Try running: PRISMA_ENGINES_CHECKSUM_IGNORE_MISSING=1 npx prisma generate"
  exit 1
fi

# Initialize database
echo "💾 Initializing database..."
if npx prisma db push; then
  echo "✅ Database initialized successfully"
else
  echo "❌ Failed to initialize database"
  echo "   Try running: npx prisma db push"
  exit 1
fi

echo ""
echo "✅ Setup complete! Run 'npm run dev' to start the development server"
echo "   Open http://localhost:3000 in your browser"
