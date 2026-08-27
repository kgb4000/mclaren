import './globals.css'
import { Inter, Archivo } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-archivo',
})
import SiteChrome from './components/SiteChrome'

const title = 'Rent a McLaren in Las Vegas | McLaren Rentals From $699'
const description =
  'Rent a McLaren 570GT or 570S in Las Vegas — no personal insurance required. Your unforgettable driving experience is just a call away.'

export const metadata = {
  title: {
    default: title,
    template: '%s | McLaren Rentals',
  },
  description,
  metadataBase: new URL('https://rentamclarenlasvegas.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title,
    description,
    url: 'https://rentamclarenlasvegas.com',
    siteName: 'McLaren Rentals Las Vegas',
    images: ['/images/mclaren-570GT.webp'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/mclaren-570GT.webp'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRental',
  name: 'McLaren Rentals Las Vegas',
  description,
  url: 'https://rentamclarenlasvegas.com',
  telephone: '+17252503117',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5225 South Valley View Blvd, Suite 7',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89118',
    addressCountry: 'US',
  },
  priceRange: '$$$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${archivo.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  )
}
