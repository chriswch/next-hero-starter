# A Next.js + HeroUI Template

For building applications with Next.js 14 and HeroUI, featuring TypeScript, Tailwind CSS, and Prettier pre-configured.

## 📦 Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [HeroUI](https://heroui.com/) - React UI components
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://motion.dev/) - Animations

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:chriswch/next-hero-starter.git
   cd next-hero-starter
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Using HeroUI Components

HeroUI is already configured in this template. You can start using components immediately:

```tsx
import { Button, Card, Input } from "@heroui/react";

export default function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button color="primary">Submit</Button>
    </Card>
  );
}
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [HeroUI Documentation](https://www.heroui.com/docs/guide/introduction)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🚀 Deployment

The easiest way to deploy your Next.js app is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

For other deployment options, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
