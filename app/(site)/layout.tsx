import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muhammad Vohra',
  description: 'Muhammad Vohra is a software engineer based in the UK.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="max-w-5xl mx-auto py-4">
        <header className='py-8'>
          <div>
            <Link
              href="/"
              className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold'
            >
              Muhamamad Vohra
            </Link>
          </div>
          
        </header>
        <main>
          {children}
        </main>
        
      </body>
    </html>
  )
}

