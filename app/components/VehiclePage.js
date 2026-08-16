import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import { PHONE_NUMBER, PHONE_HREF } from '../../lib/constants'

const ctaButtonClasses = 'block w-full m-0 text-center md:inline-block md:w-auto'

export default function VehiclePage({
  heading,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  price,
  description,
  specs,
  checkAvailabilityUrl,
  vehicleName,
}) {
  return (
    <main>
      <section>
        <div className="medium-container">
          <div className="md:grid md:grid-cols-2 md:items-center md:gap-15">
            <Image
              src={image}
              alt={imageAlt}
              title={imageAlt}
              width={imageWidth}
              height={imageHeight}
              style={{ width: '100%', height: 'auto' }}
              priority
            />
            <div>
              <h1 className="text-5xl leading-tight font-bold md:text-6xl">
                {heading}
              </h1>
              <p className="mt-2 mb-4 text-[1.8rem] font-bold text-gold-dark">
                {price}
              </p>
              {description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
              <div className="my-6 grid grid-cols-2 gap-4">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="border-t border-[#ccc] pt-2"
                  >
                    <span className="block text-[0.85rem] tracking-[0.03em] text-[#666] uppercase">
                      {spec.label}
                    </span>
                    <span className="block text-[1.1rem] font-bold">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="my-6 flex flex-wrap gap-4">
                <Button
                  href={checkAvailabilityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ctaButtonClasses}
                  posthogEvent="book_now_clicked"
                  posthogProperties={{
                    vehicle: vehicleName,
                    location: `vehicle_page_${vehicleName}`,
                  }}
                >
                  Check Availability
                </Button>
                <Button
                  href={PHONE_HREF}
                  className={ctaButtonClasses}
                  posthogEvent="call_button_clicked"
                  posthogProperties={{
                    location: `vehicle_page_${vehicleName}`,
                  }}
                >
                  Call {PHONE_NUMBER}
                </Button>
              </div>
              <p>
                <Link href="/rental-requirements">
                  View rental requirements
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
