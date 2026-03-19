import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daves Piedad - Portfolio - Full-Stack Developer',
  description: 'Daves Piedad - Professional portfolio showcasing web development projects and experience',
  icons: {
    icon: '/coder-favicon.svg',
    shortcut: '/coder-favicon.svg',
    apple: '/coder-favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}