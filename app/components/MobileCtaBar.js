'use client'
import Link from 'next/link'
import posthog from 'posthog-js'
import { PHONE_HREF } from '../../lib/constants'

const linkClasses =
  'inline-flex min-w-[150px] items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-bold'

export default function MobileCtaBar() {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-200 flex justify-center gap-3 border-t border-[#222] bg-[#0a0a0a] pt-3 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom,0))] md:hidden">
      <a
        href={PHONE_HREF}
        className={`${linkClasses} bg-gold text-black`}
        onClick={() =>
          posthog.capture('call_button_clicked', {
            location: 'mobile_cta_bar',
          })
        }
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L16 12.5l4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3z" />
        </svg>
        Call Now
      </a>
      <Link
        href="/#fleet"
        className={`${linkClasses} border border-[#444] bg-transparent text-white`}
        onClick={() =>
          posthog.capture('book_now_clicked', {
            vehicle: 'unspecified',
            location: 'mobile_cta_bar',
          })
        }
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3.5" y="5" width="17" height="15" rx="2" />
          <path d="M3.5 9.5h17M8 3v4M16 3v4" />
        </svg>
        Book Now
      </Link>
    </div>
  )
}
