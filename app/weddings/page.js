import Link from 'next/link'
import OccasionPage from '../components/OccasionPage'
import { PHONE_NUMBER } from '../../lib/constants'

const title = 'McLaren Rental for Weddings in Las Vegas'
const description =
  'Rent a McLaren for your Las Vegas wedding, proposal, or anniversary. Flexible pickup and drop-off, $699/day, no personal insurance required.'

export const metadata = {
  title,
  description,
  alternates: {
    canonical: '/weddings',
  },
}

const intro = [
  "Whether it's a dramatic proposal drive, a wedding getaway car, or an anniversary surprise, a McLaren adds a moment your partner won't forget.",
  "From a quiet drive up a scenic byway to a grand exit from your venue, we'll help you time the reservation around your plans.",
]

const points = [
  {
    title: 'Two Show-Stopping Models',
    body: (
      <>
        The elegant McLaren <Link href="/mclaren-570gt">570GT</Link> or the
        sharper <Link href="/mclaren-570s">570S</Link> — both $699.00 per
        day.
      </>
    ),
  },
  {
    title: 'Flexible Pickup & Drop-off',
    body: 'We offer delivery and pick-up within Las Vegas, so the McLaren can meet you exactly where and when you need it.',
  },
  {
    title: 'No Personal Insurance Required',
    body: 'Just a valid license (25+) and a credit card for the refundable deposit — see our rental requirements for details.',
  },
  {
    title: 'Room for a Scenic Detour',
    body: 'Take the celebration further with a drive to Red Rock Canyon or Valley of Fire — 100 miles are included each day.',
  },
]

export default function WeddingsPage() {
  return (
    <OccasionPage
      heading="McLaren Rental for Weddings & Proposals in Las Vegas"
      intro={intro}
      points={points}
      ctaText={`Call ${PHONE_NUMBER} to Reserve Your Wedding or Proposal McLaren`}
      trackingId="weddings"
    />
  )
}
