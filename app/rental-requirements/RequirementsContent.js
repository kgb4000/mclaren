import Link from 'next/link'
import Button from '../components/Button'
import FaqAccordion from '../components/FaqAccordion'
import { PHONE_NUMBER, PHONE_HREF } from '../../lib/constants'

const faqs = [
  {
    question: 'Do I need to show proof of my own auto insurance?',
    answer:
      "No. Personal auto insurance is not required to rent — see Insurance above. If you'd like additional coverage, ask about our optional $499.00/day McLaren protection package.",
  },
  {
    question: 'Can international visitors rent a McLaren?',
    answer: (
      <>
        Yes — international visitors are welcome to rent, provided you meet
        the age and license requirements above.{' '}
        <Link href="/contact">Contact us</Link> to confirm we can accept your
        driver's license before you book.
      </>
    ),
  },
  {
    question: 'Is there a minimum rental period?',
    answer:
      "Rentals are booked by the day — there's no minimum beyond a single day. Multi-day rentals are available; call to check availability for your dates.",
  },
  {
    question: 'Can I take the McLaren to a racetrack or do burnouts?',
    answer: (
      <>
        Our optional tire protection package doesn't cover damage from
        burnouts, donuts, or track use, so any tire wear from that kind of
        driving is your responsibility. If you're planning a track day,{' '}
        <Link href="/contact">call us first</Link> to talk through your
        options.
      </>
    ),
  },
]

export default function RequirementsContent() {
  return (
    <main>
      <section>
        <div className="small-container">
          <h1 className="text-5xl leading-tight font-bold md:text-6xl">
            McLaren Rental Requirements
          </h1>
          <p>
            Before you reserve a McLaren{' '}
            <Link href="/mclaren-570gt">570GT</Link> or{' '}
            <Link href="/mclaren-570s">570S</Link> with us, here's everything
            you need to know to make sure you're ready to drive.
          </p>
          <div className="my-8 [&_h3]:mt-8">
            <h3>Minimum Age</h3>
            <p>
              Drivers must be 25 years of age or older to rent a McLaren from
              us. This applies to every driver on the rental, including
              additional drivers.
            </p>
            <h3>Valid Driver's License</h3>
            <p>
              A current, valid driver's license must be presented at pickup
              for the primary renter and any additional drivers.
            </p>
            <h3>Insurance</h3>
            <p>
              No personal auto insurance is required to rent. If you'd like
              additional coverage, we offer an optional McLaren protection
              package for $499.00/day (100k supplemental liability, $5,000
              deductible).
            </p>
            <h3>Security Deposit</h3>
            <p>
              A $500.00 refundable security deposit is held on your credit
              card at pickup and released after the vehicle is returned in
              its original condition.
            </p>
            <h3>Mileage Allowance</h3>
            <p>
              Each rental day includes a 100-mile allowance. Additional miles
              are billed at $7.50 per mile.
            </p>
            <h3>Payment</h3>
            <p>
              A valid credit card in the renter's name is required. Rentals
              are subject to applicable state and local taxes plus a 3% card
              processing fee.
            </p>
            <h3>Additional Drivers</h3>
            <p>
              Additional drivers are welcome and must meet the same age and
              license requirements as the primary renter.
            </p>
          </div>
          <h2 className="text-left">Frequently Asked Questions</h2>
          <FaqAccordion faqs={faqs} />
          <p>
            Have more questions? Check our{' '}
            <Link href="/#faq">Frequently Asked Questions</Link> or give us a
            call.
          </p>
          <Button
            href={PHONE_HREF}
            posthogEvent="call_button_clicked"
            posthogProperties={{ location: 'rental_requirements_page' }}
          >
            Call {PHONE_NUMBER} to Reserve Your McLaren
          </Button>
        </div>
      </section>
    </main>
  )
}
