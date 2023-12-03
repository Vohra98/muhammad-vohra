import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Header from '@/components/header/Header'
import Image from 'next/image'

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
      <body className={`${montserrat.variable} font-mont bg-dark text-light relative`}>
        <div className='fixed top-0 left-0 w-screen h-screen -z-10 '>
          <picture>
            <source srcSet="/background.png" media="(min-width: 768px)" />
            <img src="/background-mobile.png" className='w-full h-full object-center object-cover' alt='background'></img>
          </picture>
          
        </div>
        <Header />
        <main>
          {children}
        </main>
        
      </body>
    </html>
  )
}


