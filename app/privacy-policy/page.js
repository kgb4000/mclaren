import Link from 'next/link'

const title = 'Privacy Policy'
const description =
  'Privacy Policy for McLaren Rentals Las Vegas — how we collect, use, and share your information.'

export const metadata = {
  title,
  description,
  alternates: {
    canonical: '/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section>
        <div className="small-container">
          <h1 className="text-5xl leading-tight font-bold md:text-6xl">
            Privacy Policy
          </h1>
          <p>
            <strong>Effective Date:</strong> August 15, 2026
          </p>

          <p>
            McLaren Rentals Las Vegas ("we," "us," or "our") respects your
            privacy. This Privacy Policy explains what information we
            collect through rentamclarenlasvegas.com (the "Site"), how we
            use it, and who we share it with. By using the Site or calling
            us to book a rental, you agree to the practices described here.
          </p>

          <h2 className="text-left">Information We Collect</h2>

          <h3>Information You Provide by Phone</h3>
          <p>
            Reservations and inquiries are currently handled by phone. When
            you call us, we may collect your name, phone number, and any
            other details you choose to share in order to answer your
            questions or refer your booking to our rental partner.
          </p>

          <h3>Information Collected Automatically</h3>
          <p>
            Like most websites, our hosting provider automatically logs
            standard technical information when you visit the Site, such as
            your IP address, browser type, device type, and the pages you
            view. We use this only for basic site operation and security —
            not for advertising or analytics profiling.
          </p>

          <h3>Information Collected by Our Booking Partner</h3>
          <p>
            When you click "Check Availability" or "Book" on the Site, you
            are taken to a reservation platform operated by{' '}
            <a
              href="https://www.lanierluxuryrental.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lanier Luxury Rentals
            </a>{' '}
            (via Fleetwire), a separate company. Any personal information you
            provide there — including your name, contact details, driver's
            license, and payment information — is collected and processed by
            Lanier Luxury Rentals and Fleetwire under their own privacy
            policies, not this one. We encourage you to review their privacy
            practices before booking.
          </p>

          <h2 className="text-left">How We Use Your Information</h2>
          <ul className="list-disc pl-5">
            <li>To respond to your calls and inquiries</li>
            <li>To provide and manage our services</li>
            <li>To maintain and secure the Site</li>
          </ul>
          <p>
            We do not use your information for automated advertising, and we
            do not sell it to third parties.
          </p>

          <h2 className="text-left">Cookies and Tracking Technologies</h2>
          <p>
            The Site does not currently use analytics, advertising, or
            tracking cookies of our own. If you navigate to our booking
            partner's platform or to any external site linked from ours
            (such as McLaren's official website or local tourism resources),
            those third-party sites may use their own cookies or tracking
            technologies under their own privacy policies.
          </p>

          <h2 className="text-left">Third-Party Links and Services</h2>
          <p>The Site links to third-party websites we don't control, including:</p>
          <ul className="list-disc pl-5">
            <li>
              Our booking partner (Lanier Luxury Rentals / Fleetwire)
            </li>
            <li>McLaren Automotive's official website</li>
            <li>Local tourism, event, and scenic-drive resources</li>
          </ul>
          <p>
            We are not responsible for the privacy practices of these third
            parties.
          </p>

          <h2 className="text-left">Data Sharing and Disclosure</h2>
          <p>
            We do not sell your personal information. We may share
            information you give us by phone with Lanier Luxury Rentals
            solely to facilitate your rental, or as required by law.
          </p>

          <h2 className="text-left">Data Security</h2>
          <p>
            We take reasonable measures to protect the information we
            collect, but no method of transmission or storage is completely
            secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-left">Data Retention</h2>
          <p>
            We retain information collected by phone only as long as
            necessary to respond to your inquiry or facilitate your rental,
            unless a longer period is required by law.
          </p>

          <h2 className="text-left">Your Privacy Rights</h2>
          <p>
            Nevada law (NRS 603A) gives Nevada consumers the right to opt
            out of the sale of certain covered information. We do not sell
            personal information, so no action is needed to opt out. If you
            have questions about information we hold about you, contact us
            using the details below.
          </p>

          <h2 className="text-left">Children's Privacy</h2>
          <p>
            The Site is not directed to children under 13, and we do not
            knowingly collect personal information from children.
          </p>

          <h2 className="text-left">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The
            "Effective Date" above reflects the most recent revision.
          </p>

          <h2 className="text-left">Contact Us</h2>
          <p>
            Questions about this Privacy Policy? See our{' '}
            <Link href="/contact">Contact page</Link> for our phone number
            and location.
          </p>
        </div>
      </section>
    </main>
  )
}
