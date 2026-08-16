import Button from '../components/Button'
import FaqAccordion from '../components/FaqAccordion'
import { PHONE_NUMBER, PHONE_HREF } from '../../lib/constants'

const title = 'McLaren Rental Pricing in Las Vegas'
const description =
  'The full cost to rent a McLaren in Las Vegas — $699/day, deposit, mileage, and optional insurance, all in one place.'

export const metadata = {
  title,
  description,
  alternates: {
    canonical: '/pricing',
  },
}

const faqs = [
  {
    question: 'Is the $699/day rate the same for both models?',
    answer:
      'Yes — the 570GT and 570S are both $699.00 per day. The only real difference between them is which one you choose to drive.',
  },
  {
    question: 'What could make my final price higher than $699?',
    answer: (
      <>
        Beyond the $699.00 daily rate, your total may include mileage
        overage ($7.50/mile beyond the included 100), the optional
        $499.00/day protection package if you choose it, state and local
        taxes, and a 3% card processing fee. See our{' '}
        <a href="/rental-requirements">rental requirements</a> for the full
        policy.
      </>
    ),
  },
  {
    question: 'Is the $699 rate the total price, or are there fees at checkout?',
    answer:
      'The $699.00/day rate is before tax and fees. For example, a one-day rental typically comes to about $777.50 total after state and local tax and the 3% card processing fee, before any optional protection package.',
  },
  {
    question: 'Is the security deposit charged, or just held?',
    answer:
      "It's held, not charged. The $500.00 deposit is authorized on your credit card at pickup and released after the vehicle is returned in its original condition.",
  },
  {
    question:
      'Do prices change during major Las Vegas events like CES or the F1 Grand Prix?',
    answer: (
      <>
        The pricing on this page is our standard daily rate.{' '}
        <a href="/contact">Call us</a> to confirm current pricing and
        availability if you're booking around a major convention or event
        weekend.
      </>
    ),
  },
]

export default function PricingPage() {
  return (
    <main>
      <section>
        <div className="small-container">
          <h1 className="text-5xl leading-tight font-bold md:text-6xl">
            McLaren Rental Pricing in Las Vegas
          </h1>
          <p>
            Both the McLaren <a href="/mclaren-570gt">570GT</a> and{' '}
            <a href="/mclaren-570s">570S</a> rent for the same flat rate.
            Here's the full cost breakdown — no hidden tiers, no surprises.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full min-w-100 border-collapse text-left [&_td]:border-t [&_td]:border-[#333] [&_td]:p-3 [&_th]:border-b-2 [&_th]:border-[#333] [&_th]:p-3">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Daily Rate (570GT or 570S)</td>
                  <td>$699.00/day</td>
                </tr>
                <tr>
                  <td>Security Deposit (refundable)</td>
                  <td>$500.00</td>
                </tr>
                <tr>
                  <td>Mileage Allowance</td>
                  <td>100 miles/day included</td>
                </tr>
                <tr>
                  <td>Additional Mileage</td>
                  <td>$7.50/mile</td>
                </tr>
                <tr>
                  <td>Optional Protection Package</td>
                  <td>$499.00/day (100k supplemental liability, $5,000 deductible)</td>
                </tr>
                <tr>
                  <td>Card Processing Fee</td>
                  <td>3%</td>
                </tr>
                <tr>
                  <td>State &amp; Local Taxes</td>
                  <td>Applied at checkout</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            No personal auto insurance is required to rent. See our{' '}
            <a href="/rental-requirements">rental requirements</a> for the
            full policy on age, license, insurance, and deposit.
          </p>

          <div className="my-6 flex flex-wrap justify-center gap-4">
            <Button
              href="https://lanier-luxury-rentals.fleetwire.io/rental/reservations?l_id=l_9QSAMXD6"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-0 my-0 inline-block w-auto"
            >
              Check 570GT Availability
            </Button>
            <Button
              href="https://lanier-luxury-rentals.fleetwire.io/rental/reservations?l_id=l_8S33E5DN"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-0 my-0 inline-block w-auto"
            >
              Check 570S Availability
            </Button>
          </div>

          <h2 className="text-left">Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />

          <p className="mt-8">
            Questions about pricing? <a href="/contact">Contact us</a> or
            give us a call.
          </p>
          <Button href={PHONE_HREF}>
            Call {PHONE_NUMBER} to Reserve Your McLaren
          </Button>
        </div>
      </section>
    </main>
  )
}
