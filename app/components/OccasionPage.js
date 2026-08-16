import Link from 'next/link'
import Button from './Button'
import FaqAccordion from './FaqAccordion'
import { PHONE_NUMBER, PHONE_HREF } from '../../lib/constants'

export default function OccasionPage({
  heading,
  intro,
  points,
  faqs,
  ctaText,
}) {
  return (
    <main>
      <section>
        <div className="small-container">
          <h1 className="text-5xl leading-tight font-bold md:text-6xl">
            {heading}
          </h1>
          {intro.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <div className="my-8">
            {points.map((point, i) => (
              <div key={i}>
                <h3 className="mt-8">{point.title}</h3>
                <p>{point.body}</p>
              </div>
            ))}
          </div>
          {faqs && (
            <>
              <h2 className="text-left">Frequently Asked Questions</h2>
              <FaqAccordion faqs={faqs} />
            </>
          )}
          <p>
            Ready to book? Check our{' '}
            <Link href="/rental-requirements">rental requirements</Link> or
            give us a call.
          </p>
          <Button href={PHONE_HREF}>
            {ctaText || `Call ${PHONE_NUMBER} to Reserve Your McLaren`}
          </Button>
        </div>
      </section>
    </main>
  )
}
