import Card from '@/components/card/card'
import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getAbout } from '@/sanity/sanity-utils'

export const metadata: Metadata = {
  title: 'Muhammad Vohra',
  description: 'Muhammad Vohra is a software engineer based in the UK.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const about = await getAbout();
  return (
    <html lang="en">
      <body className="flex items-center justify-between bg-gray text-white">
        <Card
          name={about.name}
          logo="M"
          description={about.description}
          image={about.image}
          email={about.email}
          location={about.location}
        />
        <main>
          {children}
        </main>
        
      </body>
    </html>
  )
}

