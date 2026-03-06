import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tech Services Nano — Ethical Computer Repair & IT Support | Flat-Rate Pricing',
  description:
    'Tech Services Nano offers ethical, transparent computer repair and IT support in Eugene, OR. Flat-rate pricing starting at $45, free basic diagnostics, and a 90-day service guarantee. Home and small-business focused.',
  openGraph: {
    title: 'Tech Services Nano — Ethical Computer Repair & IT Support',
    description:
      'Flat-rate computer repair, malware removal, data transfer, and more. Free basic diagnostics and 90-day guarantee.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Tech Services Nano',
  description:
    'Ethical computer repair and IT support with transparent flat-rate pricing.',
  telephone: '+1-541-357-9862',
  email: 'techservicesnano@gmail.com',
  priceRange: '$45 - $95',
  serviceType: [
    'Computer Repair',
    'Malware Removal',
    'Operating System Reinstall',
    'New Computer Setup',
    'Software Installation',
    'Email Setup',
    'Printer Setup',
    'Router and Wi-Fi Setup',
    'Data Transfer',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
