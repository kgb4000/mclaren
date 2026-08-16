import OccasionPage from '../components/OccasionPage'
import { PHONE_NUMBER } from '../../lib/constants'

const title = 'Corporate Event McLaren Rental in Las Vegas'
const description =
  'Rent a McLaren for client entertainment or a Las Vegas trade show. $699/day, no personal insurance required, flexible scheduling.'

export const metadata = {
  title,
  description,
  alternates: {
    canonical: '/corporate-events',
  },
}

const intro = [
  "Las Vegas hosts some of the country's biggest trade shows and conferences — CES, SHOT Show, Money20/20, Global Gaming Expo, and the NAHB International Builders' Show all fill the city's calendar. A McLaren rental is a fast way to make an impression with clients.",
  "Whether you're entertaining clients, arriving at a keynote, or filming content for a launch, we'll get you behind the wheel of a McLaren for the day.",
]

const points = [
  {
    title: 'Client-Ready Fleet',
    body: (
      <>
        The McLaren <a href="/mclaren-570gt">570GT</a> and{' '}
        <a href="/mclaren-570s">570S</a>, both $699.00 per day, detailed and
        ready before pickup.
      </>
    ),
  },
  {
    title: 'No Personal Insurance Required',
    body: 'Book with a valid license and a credit card for the deposit — see our rental requirements for the full list.',
  },
  {
    title: 'Flexible Scheduling',
    body: 'Coordinate pickup around your event schedule; delivery and pick-up within Las Vegas is available.',
  },
  {
    title: 'Built for the Convention Calendar',
    body: (
      <>
        Check our <a href="/#events">upcoming events</a> for this year's
        major Las Vegas trade shows.
      </>
    ),
  },
]

const faqs = [
  {
    question: 'Can we get a receipt for expense reporting?',
    answer:
      'Yes — we can provide a receipt for your rental. Let us know your expense reporting needs when you book.',
  },
  {
    question: 'Can I book a McLaren for a multi-day corporate event?',
    answer:
      'Yes. Rentals are booked by the day with no minimum, and multi-day bookings are available — call to check availability for your dates.',
  },
  {
    question: 'Is a professional driver available, or is this self-drive only?',
    answer: (
      <>
        Our McLarens are self-drive rentals — a licensed member of your team,
        25 or older, must be behind the wheel. See our{' '}
        <a href="/rental-requirements">rental requirements</a> for details.
      </>
    ),
  },
  {
    question:
      'Can we use the McLaren for a product launch, photo, or video shoot?',
    answer:
      'Yes — many clients use our McLarens for product launches, photo shoots, and promotional content. Let us know your plans when you book so we can help with logistics.',
  },
  {
    question:
      'Can the McLaren be delivered directly to a convention center or venue?',
    answer: (
      <>
        Yes, we offer delivery and pick-up within Las Vegas, including
        convention centers and event venues.{' '}
        <a href="/contact">Contact us</a> to arrange logistics around your
        event schedule.
      </>
    ),
  },
]

export default function CorporateEventsPage() {
  return (
    <OccasionPage
      heading="McLaren Rental for Corporate Events in Las Vegas"
      intro={intro}
      points={points}
      faqs={faqs}
      ctaText={`Call ${PHONE_NUMBER} to Reserve Your Corporate Event McLaren`}
    />
  )
}
