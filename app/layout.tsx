import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luxe Hair Salon | Premium Hair Care & Styling',
  description: 'Experience luxury hair care with our expert stylists. Cuts, color, treatments and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
