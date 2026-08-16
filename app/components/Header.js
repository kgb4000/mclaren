'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { PHONE_NUMBER, PHONE_HREF } from '../../lib/constants'

const navLinkClasses =
  'block cursor-pointer py-3 text-[0.95rem] uppercase tracking-[0.03em] text-white hover:text-gold md:py-0'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)
  const isHome = usePathname() === '/'

  return (
    <header
      className={`sticky top-0 bg-black py-4 text-white ${isHome ? 'z-100' : ''}`}
    >
      <div className="container flex items-center justify-between">
        <a
          href="/"
          className="text-[1.2rem] font-bold uppercase tracking-wider text-white"
          onClick={close}
        >
          McLaren Rentals Las Vegas
        </a>
        <button
          className="flex h-5 w-7 cursor-pointer flex-col justify-between border-none bg-transparent p-0 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="block h-0.5 w-full bg-white" />
          <span className="block h-0.5 w-full bg-white" />
          <span className="block h-0.5 w-full bg-white" />
        </button>
        <nav
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } absolute left-0 right-0 top-full flex-col bg-black pb-8 pl-[1.2rem] pr-[1.2rem] pt-4 md:static md:flex md:flex-row md:items-center md:gap-6 md:bg-transparent md:p-0`}
        >
          <a href="/" className={navLinkClasses} onClick={close}>
            Home
          </a>
          <div className="group md:relative md:inline-flex md:w-fit">
            <span className={`${navLinkClasses} cursor-pointer`}>Fleet</span>
            <div className="flex flex-col pl-4 md:hidden md:min-w-52.5 md:flex-col md:border-t-2 md:border-gold md:bg-black md:px-4 md:py-2 md:pl-0 md:group-hover:flex md:absolute md:top-full md:left-0">
              <a
                href="/mclaren-570gt"
                className={`${navLinkClasses} py-2 md:whitespace-nowrap`}
                onClick={close}
              >
                McLaren 570GT
              </a>
              <a
                href="/mclaren-570s"
                className={`${navLinkClasses} py-2 md:whitespace-nowrap`}
                onClick={close}
              >
                McLaren 570S
              </a>
            </div>
          </div>
          <div className="group md:relative md:inline-flex md:w-fit">
            <span className={`${navLinkClasses} cursor-pointer`}>
              Occasions
            </span>
            <div className="flex flex-col pl-4 md:hidden md:min-w-52.5 md:flex-col md:border-t-2 md:border-gold md:bg-black md:px-4 md:py-2 md:pl-0 md:group-hover:flex md:absolute md:top-full md:left-0">
              <a
                href="/bachelor-party"
                className={`${navLinkClasses} py-2 md:whitespace-nowrap`}
                onClick={close}
              >
                Bachelor Parties
              </a>
              <a
                href="/weddings"
                className={`${navLinkClasses} py-2 md:whitespace-nowrap`}
                onClick={close}
              >
                Weddings &amp; Proposals
              </a>
              <a
                href="/corporate-events"
                className={`${navLinkClasses} py-2 md:whitespace-nowrap`}
                onClick={close}
              >
                Corporate Events
              </a>
              <a
                href="/content-creators"
                className={`${navLinkClasses} py-2 md:whitespace-nowrap`}
                onClick={close}
              >
                Content Creators
              </a>
              <a
                href="/anniversary-date-night"
                className={`${navLinkClasses} py-2 md:whitespace-nowrap`}
                onClick={close}
              >
                Anniversary &amp; Date Night
              </a>
              <a
                href="/music-video-film"
                className={`${navLinkClasses} py-2 md:whitespace-nowrap`}
                onClick={close}
              >
                Music Video &amp; Film
              </a>
            </div>
          </div>
          <a
            href="/drives-in-las-vegas"
            className={navLinkClasses}
            onClick={close}
          >
            Drives
          </a>
          <a href="/pricing" className={navLinkClasses} onClick={close}>
            Pricing
          </a>
          <a
            href="/rental-requirements"
            className={navLinkClasses}
            onClick={close}
          >
            Rental Requirements
          </a>
          <a href="/#faq" className={navLinkClasses} onClick={close}>
            FAQ
          </a>
          <a href="/contact" className={navLinkClasses} onClick={close}>
            Contact
          </a>
          <a
            href={PHONE_HREF}
            className="mt-2 inline-block border-2 border-gold px-4 py-[0.6rem] text-center text-gold hover:bg-gold hover:text-black md:mt-0"
          >
            Call {PHONE_NUMBER}
          </a>
        </nav>
      </div>
    </header>
  )
}
