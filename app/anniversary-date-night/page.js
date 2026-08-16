import Link from 'next/link'
import OccasionPage from '../components/OccasionPage'
import { PHONE_NUMBER } from '../../lib/constants'

const title = 'McLaren Rental for Anniversaries & Date Night in Las Vegas'
const description =
  'Rent a McLaren for a Las Vegas date night or anniversary. $699/day, delivery available, no personal insurance required.'

export const metadata = {
  title,
  description,
  alternates: {
    canonical: '/anniversary-date-night',
  },
}

const intro = [
  'Pick them up in a McLaren. Drive to dinner. Watch every head turn on the way.',
  "A McLaren turns a normal date night into the one you'll both talk about for years.",
]

const points = [
  {
    title: 'Two Models, One Unforgettable Night',
    body: (
      <>
        The <Link href="/mclaren-570gt">570GT</Link> or the{' '}
        <Link href="/mclaren-570s">570S</Link> — both $699.00 per day.
      </>
    ),
  },
  {
    title: 'Delivery Available',
    body: 'We offer delivery and pick-up within Las Vegas, so the McLaren can meet you exactly where and when you need it.',
  },
  {
    title: 'No Personal Insurance Required',
    body: 'Just a valid license (25+) and a credit card for the refundable deposit — see our rental requirements for details.',
  },
  {
    title: 'Room for a Scenic Drive',
    body: (
      <>
        Take the night further with a drive to Red Rock Canyon or Valley of
        Fire — 100 miles are included each day. See our{' '}
        <Link href="/drives-in-las-vegas">
          guide to McLaren drives in Las Vegas
        </Link>{' '}
        for ideas.
      </>
    ),
  },
]

export default function AnniversaryDateNightPage() {
  return (
    <OccasionPage
      heading="McLaren Rental for Anniversaries & Date Night in Las Vegas"
      intro={intro}
      points={points}
      ctaText={`Call ${PHONE_NUMBER} to Reserve Your Date Night McLaren`}
    />
  )
}
