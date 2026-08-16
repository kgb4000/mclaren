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
          <a href="/mclaren-570gt" className={footerLinkClasses}>
            McLaren 570GT
          </a>
          <a href="/mclaren-570s" className={footerLinkClasses}>
            McLaren 570S
          </a>
          <a href="/drives-in-las-vegas" className={footerLinkClasses}>
            Drives in Las Vegas
          </a>
          <a href="/bachelor-party" className={footerLinkClasses}>
            Bachelor Parties
          </a>
          <a href="/weddings" className={footerLinkClasses}>
            Weddings &amp; Proposals
          </a>
          <a href="/corporate-events" className={footerLinkClasses}>
            Corporate Events
          </a>
          <a href="/content-creators" className={footerLinkClasses}>
            Content Creators
          </a>
          <a href="/anniversary-date-night" className={footerLinkClasses}>
            Anniversary &amp; Date Night
          </a>
          <a href="/music-video-film" className={footerLinkClasses}>
            Music Video &amp; Film
          </a>
          <a href="/pricing" className={footerLinkClasses}>
            Pricing
          </a>
          <a href="/rental-requirements" className={footerLinkClasses}>
            Rental Requirements
          </a>
          <a href="/contact" className={footerLinkClasses}>
            Contact
          </a>
          <a href="/privacy-policy" className={footerLinkClasses}>
            Privacy Policy
          </a>
        </nav>
        <div className="mx-auto my-6 h-px max-w-50 bg-[#333]" />
        <p className="m-0 text-[#999]">
          McLaren Rentals Las Vegas &copy;{new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  )
}
