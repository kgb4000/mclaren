import VehiclePage from '../components/VehiclePage'

const title = 'McLaren 570S Rental in Las Vegas $699/Day'
const description =
  'Rent a McLaren 570S in Las Vegas for $699.00/day. Check real-time availability and reserve online.'

export const metadata = {
  title,
  description,
  alternates: {
    canonical: '/mclaren-570s',
  },
}

const specs = [
  { label: 'Horsepower', value: '562 hp' },
  { label: '0-60 mph', value: '3.2 sec' },
  { label: 'Top Speed', value: '204 mph' },
  { label: 'Engine', value: '3.8L Twin-Turbo V8' },
]

export default function McLaren570SPage() {
  return (
    <VehiclePage
      heading="McLaren 570S - Sportiness Redefined"
      image="/images/mclaren-570S.webp"
      imageAlt="Rent a McLaren 570S in Las Vegas — sports car rental."
      imageWidth={964}
      imageHeight={478}
      price="$699.00 per day"
      description={[
        'Rent a McLaren 570S and enter the world of pure exhilaration. This elegant beast from the McLaren Sports Series is a testament to the British automaker\'s racing heritage, offering an uncompromised driving experience that combines thrilling performance, sophisticated design, and advanced technology.',
        'The 570S was built for a road like the Red Rock Canyon Scenic Byway — thirteen miles of elevation changes and sweeping curves just twenty minutes from the Strip, with sandstone cliffs rising on every side. Every downshift echoes off the canyon walls, and every straightaway is an invitation to feel what a 3.2-second 0-60 actually means.',
        "For something longer, the run out to Blue Diamond Bend rewards precision over raw speed, and the switchbacks up Mount Charleston are where the 570S's 562 horsepower finally gets the room it deserves.",
      ]}
      specs={specs}
      checkAvailabilityUrl="https://lanier-luxury-rentals.fleetwire.io/rental/reservations?l_id=l_8S33E5DN"
    />
  )
}
