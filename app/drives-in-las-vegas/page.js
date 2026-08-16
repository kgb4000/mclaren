import Link from 'next/link'
import Button from '../components/Button'
import { PHONE_HREF } from '../../lib/constants'

const title = 'McLaren Drives in Las Vegas'
const description =
  'The best McLaren drives in Las Vegas — Red Rock Canyon, Hoover Dam, Valley of Fire, Mount Charleston, Blue Diamond, and Death Valley, with distances, drive times, and park fees.'

export const metadata = {
  title,
  description,
  alternates: {
    canonical: '/drives-in-las-vegas',
  },
}

const DRIVES = [
  {
    name: 'Red Rock Canyon Scenic Byway',
    tagline: 'Canyon roads, golden-hour light',
    whoFor: ['First-time renters', 'Photographers', 'Couples'],
    bestCar: '570S',
    bestCarHref: '/mclaren-570s',
    distance: '17 miles — about 30 min each way',
    features: [
      'Paved 13-mile scenic loop',
      'Photo pull-offs along the route',
      'Closest scenic drive to the Strip',
    ],
    bestTime: 'Early morning or golden hour, before the heat',
    note: 'One-way loop — no turning back once you enter.',
    parkFee: '$20/vehicle',
  },
  {
    name: 'Hoover Dam',
    tagline: 'Desert highway, engineering icon',
    whoFor: ['History fans', 'Easy cruising', 'Couples'],
    bestCar: '570GT',
    bestCarHref: '/mclaren-570gt',
    distance: '~35 miles — about 45 min each way',
    features: [
      'Paved highway the entire way',
      'Overlooks above Lake Mead',
      'Briefly crosses into Arizona — fine on US highways',
    ],
    bestTime: 'Late afternoon, return at sunset',
    note: 'No park fee to view the dam from the road; the visitor center tour is a separate paid ticket.',
    parkFee: 'None for the drive',
  },
  {
    name: 'Valley of Fire State Park',
    tagline: 'Crimson sandstone, golden hour',
    whoFor: ['Photographers', 'Couples', 'First-time renters'],
    bestCar: '570GT',
    bestCarHref: '/mclaren-570gt',
    distance: '~55 miles — about 1 hour each way',
    features: [
      'Paved park roads throughout',
      "Some of the best photo stops near Vegas",
      "Nevada's oldest state park",
    ],
    bestTime: 'Sunrise or sunset, for the deepest red in the rock',
    note: 'The west entrance has limited weekday hours through 2026 — use the east entrance via SR-169. Round trip runs about 110 miles, roughly 10 miles over your daily allowance (~$75 in extra mileage).',
    parkFee: '$15/vehicle (out-of-state rate)',
  },
  {
    name: 'Mount Charleston',
    tagline: 'Desert floor to pine forest',
    whoFor: ['Cooler air', 'Scenic-drive purists', 'Couples'],
    bestCar: '570S',
    bestCarHref: '/mclaren-570s',
    distance: '~39 miles — 45-60 min each way',
    features: [
      'Switchback climb on NV-157',
      'Often 20-30°F cooler at the summit',
      'A completely different kind of drive from the desert routes',
    ],
    bestTime: 'Midday, when the temperature contrast is greatest',
    note: 'No park fee for the scenic drive itself.',
    parkFee: 'None for the drive',
  },
  {
    name: 'Blue Diamond',
    tagline: 'A quiet detour on the way to Red Rock',
    whoFor: ['Extending a Red Rock run', 'Couples'],
    bestCar: '570S',
    bestCarHref: '/mclaren-570s',
    distance: 'About 20 min from the Strip',
    features: [
      'Paved roads throughout',
      'Easily combined with Red Rock Canyon for a longer loop',
    ],
    bestTime: 'Same window as Red Rock Canyon',
    note: 'No separate park fee.',
    parkFee: 'None',
  },
  {
    name: 'Death Valley National Park',
    tagline: 'The most open road near Las Vegas',
    whoFor: ['Full-day trips', 'Performance-focused drivers'],
    bestCar: '570S',
    bestCarHref: '/mclaren-570s',
    distance: '~120 miles — about 2 hours each way',
    features: [
      'Long, empty straightaways',
      'The most dramatic contrast to the Strip',
      'Best October through April — summer heat is extreme',
    ],
    bestTime: 'Cooler months; start early if visiting in summer',
    note: 'Fee is valid for 7 days. Round trip runs about 240 miles — roughly 140 miles over your daily allowance (~$1,050 in extra mileage) — so call ahead to talk through options before you book. Bring extra water and fuel up before you go.',
    parkFee: '$30/vehicle (7-day pass)',
  },
]

export default function DrivesInLasVegasPage() {
  return (
    <main>
      <section>
        <div className="medium-container">
          <h1 className="text-center text-5xl leading-tight font-extrabold md:text-6xl">
            The Best Scenic McLaren Drives Near Las Vegas
          </h1>
          <p className="text-center">
            Six routes within a day of the Strip — each with its own
            character, best car, and best time to go.
          </p>

          <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {DRIVES.map((drive) => (
              <div key={drive.name} className="border border-[#333] p-6">
                <h3 className="mt-0 mb-1">{drive.name}</h3>
                <p className="mt-0 mb-1 font-semibold text-gold-dark italic">
                  {drive.tagline}
                </p>
                <p className="mt-0 mb-3 text-[0.85rem] text-[#666]">
                  {drive.distance}
                </p>

                <p className="mt-0 mb-1 text-[0.8rem] font-semibold tracking-wide uppercase">
                  Who it's for
                </p>
                <p className="mt-0 mb-3">{drive.whoFor.join(' · ')}</p>

                <p className="mt-0 mb-1 text-[0.8rem] font-semibold tracking-wide uppercase">
                  What you'll get
                </p>
                <ul className="mt-0 mb-3 list-disc pl-5">
                  <li>
                    Best car:{' '}
                    <Link
                      href={drive.bestCarHref}
                      className="text-inherit underline hover:text-gold-dark"
                    >
                      McLaren {drive.bestCar}
                    </Link>
                  </li>
                  {drive.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <p className="mt-0 mb-1">
                  <strong>Best time:</strong> {drive.bestTime}
                </p>
                <p className="mt-0 mb-1">
                  <strong>Park fee:</strong> {drive.parkFee}
                </p>
                <p className="mt-0 mb-4 text-[0.85rem] text-[#666]">
                  {drive.note}
                </p>

                <Button
                  href={drive.bestCarHref}
                  className="mx-0 my-0 inline-block w-auto text-base"
                >
                  Reserve the {drive.bestCar}
                </Button>
              </div>
            ))}
          </div>

          <h2>Compare All Six Drives</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-160 border-collapse text-left [&_td]:border-t [&_td]:border-[#333] [&_td]:p-3 [&_th]:border-b-2 [&_th]:border-[#333] [&_th]:p-3">
              <thead>
                <tr>
                  <th>Drive</th>
                  <th>Distance / Time</th>
                  <th>Best Car</th>
                  <th>Best For</th>
                  <th>Park Fee</th>
                </tr>
              </thead>
              <tbody>
                {DRIVES.map((drive) => (
                  <tr key={drive.name}>
                    <td>{drive.name}</td>
                    <td>{drive.distance}</td>
                    <td>
                      <Link
                        href={drive.bestCarHref}
                        className="text-inherit underline hover:text-gold-dark"
                      >
                        {drive.bestCar}
                      </Link>
                    </td>
                    <td>{drive.whoFor[0]}</td>
                    <td>{drive.parkFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-center">
            Red Rock Canyon, Hoover Dam, Mount Charleston, and Blue Diamond
            all fit comfortably within your{' '}
            <Link href="/rental-requirements">100-mile daily allowance</Link>.
            Valley of Fire and Death Valley run over it round trip — see the
            notes above for the extra mileage cost. Ready to pick a route?
          </p>
          <Button href={PHONE_HREF}>Call to Reserve Your McLaren</Button>
        </div>
      </section>
    </main>
  )
}
