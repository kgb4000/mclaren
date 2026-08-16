import OccasionPage from '../components/OccasionPage'
import { PHONE_NUMBER } from '../../lib/constants'

const title = 'Bachelor Party McLaren Rental in Las Vegas'
const description =
  'Make your Las Vegas bachelor party unforgettable — rent a McLaren 570S or 570GT for the day. $699/day, no personal insurance required.'

export const metadata = {
  title,
  description,
  alternates: {
    canonical: '/bachelor-party',
  },
}

const intro = [
  <>
    A Las Vegas bachelor party deserves an entrance to match. Rolling up to
    the club, the pool party, or dinner in a McLaren{' '}
    <a href="/mclaren-570s">570S</a> or <a href="/mclaren-570gt">570GT</a>{' '}
    turns heads before you even step out.
  </>,
  'Split between the group, a McLaren rental is one of the most memorable ways to mark the last ride of freedom.',
]

const points = [
  {
    title: 'Two McLarens to Choose From',
    body: 'Pick the 570GT for comfort-focused cruising or the 570S for pure performance — both at $699.00 per day.',
  },
  {
    title: 'No Personal Insurance Required',
    body: "Rent with just a valid license and a credit card for the deposit. See our rental requirements for full details.",
  },
  {
    title: 'Built for the Strip',
    body: 'Each day includes a 100-mile allowance — enough to cruise the Strip, take a scenic detour to Red Rock Canyon, or both.',
  },
  {
    title: 'Easy Group Logistics',
    body: "Reserve one or both McLarens for your crew and split the cost. Call us and we'll help plan pickup and drop-off around your itinerary.",
  },
]

const faqs = [
  {
    question: 'Can we rent both McLarens for the group?',
    answer:
      'Yes — the 570GT and 570S are each booked separately, so you can reserve both for your group. Check live availability on each vehicle page before you book.',
  },
  {
    question: 'Does everyone driving need to be 25 or older?',
    answer: (
      <>
        Yes. Every driver on the rental, including additional drivers, must
        be 25 or older with a valid license — see our{' '}
        <a href="/rental-requirements">rental requirements</a> for details.
      </>
    ),
  },
  {
    question: 'Can the McLaren be delivered to our hotel or the Strip?',
    answer: (
      <>
        Yes, we offer delivery and pick-up services within Las Vegas.{' '}
        <a href="/contact">Contact us</a> to arrange pickup around your
        itinerary.
      </>
    ),
  },
  {
    question: 'Is drinking and driving allowed in the McLaren?',
    answer:
      "No. Whoever is behind the wheel must always be sober and follow Nevada traffic law, no exceptions — save the celebrating for after you've parked.",
  },
]

export default function BachelorPartyPage() {
  return (
    <OccasionPage
      heading="McLaren Rental for Bachelor Parties in Las Vegas"
      intro={intro}
      points={points}
      faqs={faqs}
      ctaText={`Call ${PHONE_NUMBER} to Book Your Bachelor Party McLaren`}
    />
  )
}
