import Link from 'next/link'
import OccasionPage from '../components/OccasionPage'
import { PHONE_NUMBER } from '../../lib/constants'

const title = 'McLaren Rental for Music Videos & Film'
const description =
  'Rent a McLaren for a Las Vegas music video, film, or commercial shoot. $699/day, flexible scheduling.'

export const metadata = {
  title,
  description,
  alternates: {
    canonical: '/music-video-film',
  },
}

const intro = [
  "Need a McLaren for a music video, commercial, or film shoot? We coordinate with your production team for seamless logistics.",
  "From a single scene to a full day of takes, we'll help make sure the car is camera-ready when you need it.",
]

const points = [
  {
    title: 'Two Production-Ready Models',
    body: (
      <>
        The <Link href="/mclaren-570gt">570GT</Link> and{' '}
        <Link href="/mclaren-570s">570S</Link>, both $699.00 per day.
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
    title: 'Scout Real Las Vegas Backdrops',
    body: (
      <>
        See our{' '}
        <Link href="/drives-in-las-vegas">
          guide to McLaren drives in Las Vegas
        </Link>{' '}
        for scenic filming locations within a short drive of the Strip.
      </>
    ),
  },
]

const faqs = [
  {
    question: 'Can the McLaren be used for a multi-day shoot?',
    answer:
      'Yes. Rentals are booked by the day with no minimum, and multi-day bookings are available — call to check availability for your shoot dates.',
  },
  {
    question: 'Do you coordinate directly with our production team?',
    answer:
      "Yes — let us know your production contact and schedule when you book, and we'll work with them directly on pickup, drop-off, and any logistics for the shoot.",
  },
]

export default function MusicVideoFilmPage() {
  return (
    <OccasionPage
      heading="McLaren Rental for Music Videos & Film in Las Vegas"
      intro={intro}
      points={points}
      faqs={faqs}
      ctaText={`Call ${PHONE_NUMBER} to Book Your Production`}
    />
  )
}
