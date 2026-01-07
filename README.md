# CareEase Landing Page

A modern, responsive landing page for CareEase - Premium Laundry Service in Australia.

## Features

- 🎨 Modern, clean design with Tailwind CSS
- 📱 Fully responsive for all devices
- ⚡ Built with Next.js 14 and React
- 🚀 Fast and optimized performance
- ♿ Accessible and SEO-friendly

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the landing-page directory:
```bash
cd landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
landing-page/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main landing page
│   └── globals.css     # Global styles
├── package.json        # Dependencies and scripts
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Sections

The landing page includes:

1. **Navigation Bar** - Fixed header with smooth scrolling links
2. **Hero Section** - Eye-catching headline with CTA buttons
3. **Features Section** - 6 key features with icons
4. **How It Works** - 4-step process explanation
5. **CTA Section** - Email signup form
6. **Footer** - Links and company information

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme. The primary color is currently set to blue.

### Content

All content is in `app/page.tsx`. Simply edit the text, links, and sections as needed.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
```

Then deploy the `.next` folder to your hosting provider.

## License

Private - CareEase

