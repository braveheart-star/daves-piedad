# Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS, inspired by the design from [camilo-frontend-portfolio.vercel.app](https://camilo-frontend-portfolio.vercel.app/resume).

## Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js for optimal performance
- **TypeScript**: Full TypeScript support for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Pages

- **Home**: Project showcase with featured work
- **About**: Personal information and background
- **Resume**: Education, work history, and skills
- **Contact**: Contact form and information

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── resume/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       └── Navigation.tsx
├── public/
├── tailwind.config.js
├── package.json
└── README.md
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js` and `globals.css`.

### Content
- Update personal information in the respective page components
- Modify project data in `src/app/page.tsx`
- Update work history and education in `src/app/resume/page.tsx`

### Styling
- Custom styles are defined in `src/app/globals.css`
- Component-specific styles use Tailwind CSS classes
- Animations and transitions are included for enhanced user experience

## Deployment

The project can be deployed to any platform that supports Next.js:

- **Vercel** (recommended): Connect your GitHub repository
- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **AWS Amplify**: Configure build settings for Next.js

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React**: JavaScript library for building user interfaces

## License

This project is open source and available under the [MIT License](LICENSE).