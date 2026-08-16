import Link from 'next/link'
import OccasionPage from '../components/OccasionPage'
import { PHONE_NUMBER } from '../../lib/constants'

const title = 'McLaren Rental for Content Creators'
const description =
  'Rent a McLaren in Las Vegas for photo shoots, YouTube, or social content. $699/day, no personal insurance required.'

export const metadata = {
  title,
  description,
  alternates: {
    canonical: '/content-creators',
  },
}

const intro = [
  "Whether you're filming a car review, shooting a photo series, or capturing content for social media, a McLaren gives your video or photos an instant upgrade.",
  "We'll work with your schedule so the car is ready when your crew is.",
]

const points = [
  {
    title: 'Two Camera-Ready Models',
    body: (
      <>
        The McLaren <Link href="/mclaren-570gt">570GT</Link> and{' '}
        <Link href="/mclaren-570s">570S</Link>, both $699.00 per day,
        detailed and ready before pickup.
      </>
    ),
  },
  {
    title: 'No Personal Insurance Required',
    body: 'Book with a valid license and a credit card for the deposit — see our rental requirements for the full list.',
  },
  {
    title: 'Flexible Scheduling',
    body: 'Coordinate pickup around your shoot schedule; delivery and pick-up within Las Vegas is available.',
  },
  {
    title: 'Built for the Shot',
    body: (
      <>
        Need a backdrop? See our{' '}
        <Link href="/drives-in-las-vegas">
          guide to McLaren drives in Las Vegas
        </Link>{' '}
        for scenic locations within a short drive of the Strip.
      </>
    ),
  },
]

const faqs = [
  {
    question: 'Can we shoot stationary content, or does the car need to be driven?',
    answer:
      'Both — whether you need the McLaren parked as a backdrop or driving on camera, just let us know your plans when you book so we can help with logistics.',
  },
  {
    question: 'Do you offer hourly rentals for shorter shoots?',
    answer:
      "Rentals are booked by the day at $699.00 — we don't currently offer hourly rates, but a full day gives you the flexibility to shoot at multiple times or locations.",
  },
]

export default function ContentCreatorsPage() {
  return (
    <OccasionPage
      heading="McLaren Rental for Content Creators in Las Vegas"
      intro={intro}
      points={points}
      faqs={faqs}
      ctaText={`Call ${PHONE_NUMBER} to Book Your Shoot`}
    />
  )
}
