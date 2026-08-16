import Link from 'next/link'
import Button from '../components/Button'
import { PHONE_NUMBER, PHONE_HREF } from '../../lib/constants'

export default function ContactContent() {
  return (
    <main>
      <section>
        <div className="small-container">
          <h1 className="text-5xl leading-tight font-bold md:text-6xl">
            Contact Us
          </h1>
          <p>
            Have a question or ready to reserve a McLaren? Calling is the
            fastest way to reach us.
          </p>
          <div className="my-8 [&_h3]:mt-8 [&_h3]:mb-1">
            <h3>Phone</h3>
            <p>
              <a href={PHONE_HREF}>{PHONE_NUMBER}</a>
            </p>
            <h3>Hours</h3>
            <p>Open 24 hours a day, seven days a week.</p>
            <h3>Location</h3>
            <p>
              5225 South Valley View Blvd, Suite 7
              <br />
              Las Vegas, NV 89118
            </p>
            <p>
              Delivery and pick-up within Las Vegas is also available — call
              to arrange.
            </p>
          </div>
          <p>
            Check our{' '}
            <Link href="/rental-requirements">rental requirements</Link> or{' '}
            <Link href="/#faq">FAQ</Link> before you call.
          </p>
          <Button href={PHONE_HREF}>Call {PHONE_NUMBER}</Button>
        </div>
      </section>
    </main>
  )
}
