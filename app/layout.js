import StyledComponentsRegistry from 'lib/registry'
import './globals.scss'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Footer from './components/Footer'

export const metadata = {
  title: {
    default: 'Rent a McLaren in Las Vegas | Supercar Rentals Las Vegas',
    template: '%s | Supercar Rentals Las Vegas',
  },
  description:
    'Feel the adrenaline rush when you rent a McLaren in Las Vegas from Supercars Las Vegas. Your unforgettable driving experience is just a click away!',
  metadataBase: new URL('https://rentamclarenlasvegas.com'),
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Footer />
      </body>
    </html>
  )
}
