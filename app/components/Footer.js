import Link from 'next/link'
import { PHONE_NUMBER, PHONE_HREF } from '../../lib/constants'

const footerLinkClasses = 'text-white hover:text-gold'

export default function Footer() {
  return (
    <footer className="bg-black py-10 text-center text-[0.9rem] text-white">
      <div className="container">
        <p className="m-0 text-[1.1rem] font-semibold">
          Call us at{' '}
          <a href={PHONE_HREF} className="text-gold hover:underline">
            {PHONE_NUMBER}
          </a>
        </p>
        <nav className="mx-auto my-6 flex max-w-150 flex-wrap justify-center gap-x-6 gap-y-2">
          <Link href="/mclaren-570gt" className={footerLinkClasses}>
            McLaren 570GT
          </Link>
          <Link href="/mclaren-570s" className={footerLinkClasses}>
            McLaren 570S
          </Link>
          <Link href="/drives-in-las-vegas" className={footerLinkClasses}>
            Drives in Las Vegas
          </Link>
          <Link href="/bachelor-party" className={footerLinkClasses}>
            Bachelor Parties
          </Link>
          <Link href="/weddings" className={footerLinkClasses}>
            Weddings &amp; Proposals
          </Link>
          <Link href="/corporate-events" className={footerLinkClasses}>
            Corporate Events
          </Link>
          <Link href="/content-creators" className={footerLinkClasses}>
            Content Creators
          </Link>
          <Link href="/anniversary-date-night" className={footerLinkClasses}>
            Anniversary &amp; Date Night
          </Link>
          <Link href="/music-video-film" className={footerLinkClasses}>
            Music Video &amp; Film
          </Link>
          <Link href="/pricing" className={footerLinkClasses}>
            Pricing
          </Link>
          <Link href="/rental-requirements" className={footerLinkClasses}>
            Rental Requirements
          </Link>
          <Link href="/contact" className={footerLinkClasses}>
            Contact
          </Link>
          <Link href="/privacy-policy" className={footerLinkClasses}>
            Privacy Policy
          </Link>
        </nav>
        <div className="mx-auto my-6 h-px max-w-50 bg-[#333]" />
        <p className="m-0 text-[#999]">
          McLaren Rentals Las Vegas &copy;{new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  )
}
