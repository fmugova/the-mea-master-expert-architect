import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The MEA (Master Expert Architect)',
  description: 'Created with BuildFlow',
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