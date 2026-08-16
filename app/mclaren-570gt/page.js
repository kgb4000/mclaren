import VehiclePage from '../components/VehiclePage'

const title = 'McLaren 570GT Rental in Las Vegas'
const description =
  'Rent a McLaren 570GT in Las Vegas for $699.00/day. Check real-time availability and reserve online.'

export const metadata = {
  title,
  description,
  alternates: {
    canonical: '/mclaren-570gt',
  },
}

const specs = [
  { label: 'Horsepower', value: '562 hp' },
  { label: '0-60 mph', value: '3.3 sec' },
  { label: 'Top Speed', value: '204 mph' },
  { label: 'Engine', value: '3.8L Twin-Turbo V8' },
]

export default function McLaren570GTPage() {
  return (
    <VehiclePage
      heading="McLaren 570GT - Elegance Meets Power"
      image="/images/mclaren-570GT.webp"
      imageAlt="Rent a McLaren 570GT in Las Vegas."
      imageWidth={1928}
      imageHeight={956}
      price="$699.00 per day"
      description={[
        'Experience the perfect blend of luxury, comfort, and sportiness with our McLaren 570GT rental in Las Vegas. Born from the McLaren Sports Series family, the 570GT is the ultimate sports car experience, with a touch of grand tourer luxury.',
        "There's a version of Las Vegas that never touches the Strip — the ninety-minute run out to Hoover Dam, where the highway drops through red rock before the dam's concrete curve appears against Lake Mead. The 570GT's panoramic glass roof turns that drive into a moving postcard, and its softer suspension tuning means you arrive as relaxed as when you left.",
        "Point it the other way and Death Valley National Park's empty two-lane blacktop stretches to the horizon — the kind of open road that makes 562 horsepower feel less like a car and more like an escape. Closer to town, the crimson sandstone of Valley of Fire State Park makes for a shorter but no less unforgettable golden-hour drive.",
      ]}
      specs={specs}
      checkAvailabilityUrl="https://lanier-luxury-rentals.fleetwire.io/rental/reservations?l_id=l_9QSAMXD6"
    />
  )
}
