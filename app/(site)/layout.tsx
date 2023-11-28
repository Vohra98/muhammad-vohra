import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Header from '@/components/header/Header'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-mont"
})

export const metadata: Metadata = {
  title: 'Muhammad Vohra',
  description: 'Muhammad Vohra is a software engineer based in the UK.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-mont bg-light text-dark`}>
        <Header />
        <main>
          {children}
        </main>
        
      </body>
    </html>
  )
}


