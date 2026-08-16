import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Button from './components/Button'
import FaqAccordion from './components/FaqAccordion'
import { PHONE_HREF } from '../lib/constants'

const smallButtonClasses = 'inline-block w-auto mx-2 my-0 text-base'
const whiteButtonClasses = 'text-white border-white [text-shadow:1px_2px_#000]'

const EVENTS = [
  {
    name: 'Global Gaming Expo (G2E)',
    dates: 'September 28 – October 1, 2026',
    description:
      "The gaming industry's premier trade show, bringing casino and gaming executives to the Venetian Expo.",
    url: 'https://www.globalgamingexpo.com/',
  },
  {
    name: 'Money20/20',
    dates: 'October 18-21, 2026',
    description:
      'A leading fintech and payments conference drawing banking and tech leaders to the Venetian Expo.',
    url: 'https://us.money2020.com/',
  },
  {
    name: 'SEMA Show',
    dates: 'November 3-6, 2026',
    description:
      "The automotive aftermarket industry's biggest trade show, filling the Las Vegas Convention Center with the latest in performance and specialty vehicles.",
    url: 'https://www.semashow.com/',
  },
  {
    name: 'Formula 1 Heineken Las Vegas Grand Prix',
    dates: 'November 19-21, 2026',
    description:
      'F1 racing takes over the Strip for a weekend of high-speed action — the ultimate weekend to arrive in a McLaren.',
    url: 'https://www.f1lasvegasgp.com/',
  },
  {
    name: 'National Finals Rodeo (NFR)',
    dates: 'December 3-12, 2026',
    description:
      "Ten nights of championship rodeo at the Thomas & Mack Center, drawing fans from across the country to the Strip.",
    url: 'https://www.visitlasvegas.com/nfr/',
  },
  {
    name: 'CES 2027',
    dates: 'January 6-9, 2027',
    description:
      "The world's largest consumer electronics and technology show, filling the Las Vegas Convention Center.",
    url: 'https://www.ces.tech/',
  },
  {
    name: 'World of Concrete 2027',
    dates: 'January 19-21, 2027',
    description:
      "The construction industry's biggest annual trade show for concrete and masonry professionals.",
    url: 'https://www.worldofconcrete.com/en/home.html',
  },
  {
    name: 'SHOT Show 2027',
    dates: 'January 19-22, 2027',
    description:
      "The shooting, hunting, and outdoor trade industry's largest annual trade show.",
    url: 'https://shotshow.org/',
  },
  {
    name: "NAHB International Builders' Show 2027",
    dates: 'February 2-4, 2027',
    description:
      'One of the largest annual gatherings for the residential construction industry.',
    url: 'https://www.buildersshow.com/',
  },
]

const OCCASIONS = [
  {
    eyebrow: 'The Ultimate Send-Off',
    title: 'Bachelor & Bachelorette',
    description:
      'Roll up to the club, hit the Strip, or take the crew out for an unforgettable night.',
    suggested: '570S',
    href: '/bachelor-party',
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="7" r="3" />
        <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5" />
        <circle cx="17" cy="8" r="2.5" />
        <path d="M15.5 12.5c2.5.3 4 1.8 4.5 4" />
      </svg>
    ),
  },
  {
    eyebrow: 'The Grand Entrance (or Exit)',
    title: 'Weddings & Proposals',
    description:
      'A getaway car, a proposal drive, or a grand entrance — make the moment unforgettable.',
    suggested: '570GT',
    href: '/weddings',
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20s-7-4.5-9.5-9C1 8 2 4.5 5.5 4c2-.3 4 .7 6.5 3.5C14.5 4.7 16.5 3.7 18.5 4 22 4.5 23 8 21.5 11c-2.5 4.5-9.5 9-9.5 9z" />
      </svg>
    ),
  },
  {
    eyebrow: 'Arrive Like You Mean It',
    title: 'Corporate & Conventions',
    description:
      'In town for CES, SHOT Show, or a corporate event? Make your entrance count.',
    suggested: '570GT or 570S',
    href: '/corporate-events',
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
      </svg>
    ),
  },
  {
    eyebrow: 'Your Next Viral Video',
    title: 'Content Creators',
    description:
      'Photo shoots, YouTube, or social content. We work with your schedule so the car is ready when your crew is.',
    suggested: '570S',
    href: '/content-creators',
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 8h3l2-2h6l2 2h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
        <circle cx="12" cy="14" r="3.5" />
      </svg>
    ),
  },
  {
    eyebrow: 'Make It a Night to Remember',
    title: 'Anniversary & Date Night',
    description:
      'Pick them up in a McLaren. Drive to dinner. Watch every head turn on the way.',
    suggested: '570GT',
    href: '/anniversary-date-night',
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
      </svg>
    ),
  },
  {
    eyebrow: 'Production-Ready Exotics',
    title: 'Music Video & Film',
    description:
      'Need a McLaren for a shoot? We coordinate with your production team for seamless logistics.',
    suggested: '570GT or 570S',
    href: '/music-video-film',
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9h18M3 9l2-4h3l-2 4M8 9l2-4h3l-2 4M13 9l2-4h3l-2 4" />
        <rect x="3" y="9" width="18" height="11" rx="1" />
      </svg>
    ),
  },
]

const FAQS_COL_1 = [
  {
    question: 'How much does it cost to rent a McLaren for a day?',
    answer: (
      <>
        Renting a McLaren costs $699.00 per day for either the{' '}
        <a href="/mclaren-570gt">570GT</a> or the{' '}
        <a href="/mclaren-570s">570S</a>.
      </>
    ),
  },
  {
    question: 'Who can rent a McLaren?',
    answer: (
      <>
        Any licensed driver aged 25 or older can rent a McLaren from us — no
        personal auto insurance required. See our{' '}
        <a href="/rental-requirements">full rental requirements</a> for
        details.
      </>
    ),
  },
  {
    question: 'Can international visitors rent a McLaren?',
    answer: (
      <>
        Yes, international visitors are welcome to rent, provided you meet
        our age and license requirements. <a href="/contact">Contact us</a>{' '}
        to confirm we can accept your driver's license before you book.
      </>
    ),
  },
  {
    question: 'Do I need additional insurance coverage?',
    answer: (
      <>
        No personal auto insurance is required, and it's included in the
        $699.00/day rate. If you'd like additional coverage, we offer an
        optional McLaren protection package for $499.00/day (100k
        supplemental liability, $5,000 deductible) — see our{' '}
        <a href="/rental-requirements">rental requirements</a> for details.
      </>
    ),
  },
  {
    question: 'What do I need to bring to rent a McLaren?',
    answer:
      "You will need a valid driver's license and a credit card for the refundable security deposit. Personal auto insurance is not required.",
  },
  {
    question: 'Can I drive the McLaren outside of Las Vegas?',
    answer: (
      <>
        Yes, you are free to drive anywhere within the continental United
        States. Each rental day includes a 100-mile allowance, with a $7.50
        per-mile fee beyond that — see our{' '}
        <a href="/drives-in-las-vegas">
          guide to McLaren drives in Las Vegas
        </a>{' '}
        for routes that fit within it.
      </>
    ),
  },
  {
    question: 'What happens if I damage the car?',
    answer: (
      <>
        In the unfortunate event of damage, you will be responsible for the
        deductible on your insurance policy. See our{' '}
        <a href="/rental-requirements">rental requirements</a> for details on
        our optional protection package.
      </>
    ),
  },
  {
    question: 'Can I extend my rental period?',
    answer: (
      <>
        Yes, subject to availability. Please <a href="/contact">contact us</a>{' '}
        at least 24 hours before your rental period ends if you wish to
        extend.
      </>
    ),
  },
  {
    question: 'What are your operating hours?',
    answer: (
      <>
        We're open 24 hours a day, seven days a week. See our{' '}
        <a href="/contact">contact page</a> for phone and location details.
      </>
    ),
  },
]

const FAQS_COL_2 = [
  {
    question: 'Can someone else drive the car that I rent?',
    answer: (
      <>
        Yes, additional drivers are allowed but they must meet the{' '}
        <a href="/rental-requirements">
          same requirements as the main driver
        </a>
        , including age, driving license, and insurance coverage. Please note
        that additional charges may apply.
      </>
    ),
  },
  {
    question: 'Do I need to refuel the car before returning it?',
    answer:
      'Yes, we ask that you return the car with the same fuel level as when you picked it up. If the car is returned with less fuel, a refueling charge will apply.',
  },
  {
    question: 'Do you provide pick-up and drop-off services?',
    answer: (
      <>
        Yes, we do. We offer delivery and pick-up services within Las Vegas.
        Please <a href="/contact">contact us</a> for further details and any
        additional fees.
      </>
    ),
  },
  {
    question: 'Can I cancel or modify my reservation?',
    answer: (
      <>
        Yes, you can <a href="/contact">contact us</a> to cancel or modify
        your reservation. However, please note that cancellations or
        modifications must be made at least 48 hours before the scheduled
        rental time to avoid any charges.
      </>
    ),
  },
  {
    question: 'Are the cars smoke-free?',
    answer:
      'Yes, all our vehicles are smoke-free. A cleaning fee will be charged if the vehicle is returned with evidence of smoking.',
  },
  {
    question: 'Can I take the McLaren to a racetrack or do burnouts?',
    answer: (
      <>
        Our optional tire protection package doesn't cover damage from
        burnouts, donuts, or track use, so any tire wear from that kind of
        driving is your responsibility. If you're planning a track day,{' '}
        <a href="/contact">call us first</a> to talk through your options.
      </>
    ),
  },
  {
    question: 'Are pets allowed in the vehicles?',
    answer:
      'No, pets are not allowed in our vehicles. We strive to maintain the pristine condition of our fleet for all customers to enjoy.',
  },
]

export default function Home() {
  return (
    <>
      <main>
        <HeroSection
          heroText="Rent a McLaren in Las Vegas"
          subText="Elevate your Vegas adventure with an unbelievable driving experience."
          backgroundImage="images/mclaren-570GT.webp"
          backgroundHeight="100vh"
          buttonText="Call to Reserve"
          buttonLink={PHONE_HREF}
        />
        <section>
          <div className="medium-container">
            <div className="md:grid md:grid-cols-2 md:gap-15">
              <Image
                src="/images/rent-a-mclaren-las-vegas.jpg"
                alt="McLaren rental Las Vegas — rent a McLaren 570GT for the day."
                title="McLaren rental Las Vegas — rent a McLaren 570GT for the day."
                loading="lazy"
                width={2036}
                height={1160}
                style={{ width: '100%', height: 'auto' }}
              />
              <div>
                <h2>Rent a McLaren and Turn Heads</h2>
                <p>
                  At McLaren Rentals Las Vegas, we turn dreams into reality.
                </p>
                <p>
                  We give you the most luxurious and thrilling{' '}
                  <a
                    href="https://cars.mclaren.com/en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    McLaren
                  </a>{' '}
                  rental experience in the fabulous city of Las Vegas.
                </p>
                <p>
                  Our mission is to provide you with an unforgettable driving
                  adventure that will elevate your Vegas experience to new
                  heights.
                </p>
                <p>
                  Whether you want to rent a McLaren or hire a McLaren for a
                  weekend, our team makes it effortless.
                </p>
                <p>
                  Whether you're cruising the Strip, exploring the surrounding
                  scenic roads, or attending a glamorous event, driving a
                  McLaren can make your stay in Sin City one for the books.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="fleet">
          <div className="container">
            <h2>Rent A McLaren For A Day</h2>
            <div className="mb-4 flex flex-wrap justify-center">
              <Button
                href="https://lanier-luxury-rentals.fleetwire.io/rental/reservations?l_id=l_9QSAMXD6"
                target="_blank"
                rel="noopener noreferrer"
                className={smallButtonClasses}
              >
                Book 570GT
              </Button>
              <Button
                href="https://lanier-luxury-rentals.fleetwire.io/rental/reservations?l_id=l_8S33E5DN"
                target="_blank"
                rel="noopener noreferrer"
                className={smallButtonClasses}
              >
                Book 570S
              </Button>
            </div>
            <div className="flex flex-wrap md:grid md:grid-cols-2 md:gap-10">
              <div className="mb-8 flex flex-col">
                <h3 className="text-center">
                  <a
                    href="/mclaren-570gt"
                    className="text-inherit hover:text-gold-dark"
                  >
                    McLaren 570GT - Elegance Meets Power
                  </a>
                </h3>
                <Image
                  src="/images/mclaren-570GT.webp"
                  alt="Rent a McLaren 570GT in Las Vegas."
                  title="Rent a McLaren 570GT in Las Vegas."
                  loading="lazy"
                  width={1928}
                  height={956}
                  style={{ width: '100%', height: 'auto' }}
                />
                <h4>$699.00 per day</h4>
                <p className="flex-1">
                  Experience the perfect blend of luxury, comfort, and
                  sportiness with our McLaren 570GT rental in Las Vegas. Born
                  from the McLaren Sports Series family, the 570GT is the
                  ultimate sports car experience, with a touch of grand
                  tourer luxury.
                </p>
                <div className="flex justify-center">
                  <Button href="/mclaren-570gt" className={smallButtonClasses}>
                    View Details!
                  </Button>
                </div>
              </div>
              <div className="mb-8 flex flex-col">
                <h3 className="text-center">
                  <a
                    href="/mclaren-570s"
                    className="text-inherit hover:text-gold-dark"
                  >
                    McLaren 570S - Sportiness Redefined
                  </a>
                </h3>
                <Image
                  src="/images/mclaren-570S.webp"
                  alt="Rent a McLaren 570S in Las Vegas — sports car rental."
                  title="Rent a McLaren 570S in Las Vegas — sports car rental."
                  loading="lazy"
                  width={964}
                  height={478}
                  style={{ width: '100%', height: 'auto' }}
                />
                <h4>$699.00 per day</h4>
                <p className="flex-1">
                  Rent a McLaren 570S and enter the world of pure
                  exhilaration. This elegant beast from the McLaren Sports
                  Series is a testament to the British automaker's racing
                  heritage, offering an uncompromised driving experience that
                  combines thrilling performance, sophisticated design, and
                  advanced technology.
                </p>
                <div className="flex justify-center">
                  <Button href="/mclaren-570s" className={smallButtonClasses}>
                    View Details!
                  </Button>
                </div>
              </div>
            </div>
            <h2>Compare the 570GT and 570S</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-100 border-collapse text-left [&_td]:border-t [&_td]:border-[#333] [&_td]:p-3 [&_th]:border-b-2 [&_th]:border-[#333] [&_th]:p-3">
                <thead>
                  <tr>
                    <th>Spec</th>
                    <th>
                      <a
                        href="/mclaren-570gt"
                        className="text-inherit underline hover:text-gold-dark"
                      >
                        570GT
                      </a>
                    </th>
                    <th>
                      <a
                        href="/mclaren-570s"
                        className="text-inherit underline hover:text-gold-dark"
                      >
                        570S
                      </a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Price</td>
                    <td>$699.00/day</td>
                    <td>$699.00/day</td>
                  </tr>
                  <tr>
                    <td>Horsepower</td>
                    <td>562 hp</td>
                    <td>562 hp</td>
                  </tr>
                  <tr>
                    <td>0-60 mph</td>
                    <td>3.3 sec</td>
                    <td>3.2 sec</td>
                  </tr>
                  <tr>
                    <td>Top Speed</td>
                    <td>204 mph</td>
                    <td>204 mph</td>
                  </tr>
                  <tr>
                    <td>Engine</td>
                    <td>3.8L Twin-Turbo V8</td>
                    <td>3.8L Twin-Turbo V8</td>
                  </tr>
                  <tr>
                    <td>Best For</td>
                    <td>Comfort-focused cruising</td>
                    <td>Pure performance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h2>Rent a McLaren for Any Occasion</h2>
            <p className="text-center">
              Whether it's a bachelor party, a wedding, or a business trip —
              there's a McLaren for that.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {OCCASIONS.map((occasion) => (
                <a
                  key={occasion.title}
                  href={occasion.href}
                  className="flex h-full flex-col border border-[#333] p-6 text-inherit hover:border-gold"
                >
                  <div className="text-gold">{occasion.icon}</div>
                  <p className="mt-3 mb-1 text-[0.8rem] font-semibold tracking-wide text-[#666] uppercase">
                    {occasion.eyebrow}
                  </p>
                  <h3 className="mt-0 mb-2">{occasion.title}</h3>
                  <p className="mb-3 flex-1">{occasion.description}</p>
                  <p className="mb-0 text-[0.85rem] text-[#666]">
                    Suggested: <strong>{occasion.suggested}</strong>
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="medium-container">
            <h2>Rent a McLaren and Take a Scenic Drive Near Las Vegas</h2>
            <p className="text-center">
              Don't just rent your supercar to cruise the{' '}
              <a
                href="https://www.lasvegashowto.com/las-vegas-strip-map"
                target="_blank"
                rel="noopener noreferrer"
              >
                Las Vegas strip
              </a>
              . Take a scenic driving tour to one of these exotic locations near
              Vegas.
            </p>
            <div className="md:flex md:justify-between">
              <div className="md:mx-2 md:text-center">
                <Image
                  src="/images/drive-through-death-valley.png"
                  alt="Driving to Hoover Dam near Las Vegas."
                  title="Driving to Hoover Dam near Las Vegas."
                  loading="lazy"
                  width={481}
                  height={352}
                  style={{ width: '100%', height: 'auto' }}
                />
                <h3>Hoover Dam</h3>
              </div>
              <div className="md:mx-2 md:text-center">
                <Image
                  src="/images/drive-through-death-valley.png"
                  alt="Driving through Red Rock Canyon Scenic Byway."
                  title="Driving through Red Rock Canyon Scenic Byway."
                  loading="lazy"
                  width={481}
                  height={352}
                  style={{ width: '100%', height: 'auto' }}
                />
                <h3>Red Rock Canyon Scenic Byway</h3>
              </div>
              <div className="md:mx-2 md:text-center">
                <Image
                  src="/images/drive-through-death-valley.png"
                  alt="Driving through Death Valley near Las Vegas."
                  title="Driving through Death Valley near Las Vegas."
                  loading="lazy"
                  width={481}
                  height={352}
                  style={{ width: '100%', height: 'auto' }}
                />
                <h3>Death Valley National Park</h3>
              </div>
            </div>
            <div className="md:flex md:justify-between">
              <div className="md:mx-2 md:text-center">
                <Image
                  src="/images/drive-through-death-valley.png"
                  alt="Driving up Mount Charleston near Las Vegas."
                  title="Driving up Mount Charleston near Las Vegas."
                  loading="lazy"
                  width={481}
                  height={352}
                  style={{ width: '100%', height: 'auto' }}
                />
                <h3>Mount Charleston</h3>
              </div>
              <div className="md:mx-2 md:text-center">
                <Image
                  src="/images/drive-through-death-valley.png"
                  alt="Driving through Valley of Fire State Park."
                  title="Driving through Valley of Fire State Park."
                  loading="lazy"
                  width={481}
                  height={352}
                  style={{ width: '100%', height: 'auto' }}
                />
                <h3>Valley of Fire State Park</h3>
              </div>
              <div className="md:mx-2 md:text-center">
                <Image
                  src="/images/drive-through-death-valley.png"
                  alt="Driving through Blue Diamond Bend."
                  title="Driving through Blue Diamond Bend."
                  loading="lazy"
                  width={481}
                  height={352}
                  style={{ width: '100%', height: 'auto' }}
                />
                <h3>Blue Diamond Bend</h3>
              </div>
            </div>
            <p className="text-center">
              See our full guide to{' '}
              <a href="/drives-in-las-vegas">
                McLaren drives in Las Vegas
              </a>
              , with distances and drive times for each route.
            </p>
          </div>
        </section>

        <section id="events">
          <div className="container">
            <h2>Upcoming Events in Las Vegas</h2>
            <div className="my-8 grid grid-cols-1 gap-6 min-[700px]:grid-cols-2 min-[1100px]:grid-cols-3">
              {EVENTS.map((event) => (
                <div key={event.name} className="border border-[#333] p-6">
                  <h3 className="mt-0 mb-2">
                    <a
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-inherit hover:text-gold-dark hover:underline"
                    >
                      {event.name}
                    </a>
                  </h3>
                  <p className="mt-0 mb-3 font-semibold text-gold-dark">
                    {event.dates}
                  </p>
                  <p className="mb-0">{event.description}</p>
                </div>
              ))}
            </div>
            <Button
              href="https://www.visitlasvegas.com/events/"
              target="_blank"
              rel="noopener noreferrer"
            >
              See more events in Vegas
            </Button>
          </div>
        </section>

        <section>
          <div className="medium-container">
            <div className="md:grid md:grid-cols-2 md:gap-15 md:[&_h2]:text-left">
              <Image
                src="/images/mclaren-about-us.jpg"
                alt="About McLaren Rentals Las Vegas"
                loading="lazy"
                width={1920}
                height={2880}
                style={{ width: '100%', height: 'auto' }}
              />
              <div>
                <h2>Why Choose McLaren Rentals Las Vegas</h2>
                <p>
                  Although there are many exotic car rental companies in Las
                  Vegas, there are reasons to rent your car from us.
                </p>
                <div className="my-8">
                  <h3>#1. Best McLaren Cars</h3>
                  <p>
                    Our collection comprises the most sought-after models, from
                    the exhilarating McLaren 570S to the luxurious McLaren
                    570GT.
                  </p>
                  <h3>#2. Reservations Made Easy</h3>
                  <p>
                    Booking your dream car has never been easier. Our
                    user-friendly website lets you browse through our impressive
                    inventory and reserve your chosen vehicle with just a few
                    clicks. Our knowledgeable team is also available to assist
                    you via phone, email, or live chat if you have any questions
                    or require personalized recommendations.
                  </p>
                  <h3>#3. Premium Service</h3>
                  <p>
                    We pride ourselves on offering personalized, top-notch
                    service. Our team of dedicated professionals is committed
                    to ensuring your McLaren rental experience is seamless and
                    memorable.
                  </p>
                  <h3>#4. Fair, Partner-Backed Pricing</h3>
                  <p>
                    We believe that luxury should be accessible. That's why
                    we've partnered with Lanier Luxury Rentals to offer
                    competitive, market-matched rates and flexible rental
                    terms.
                  </p>
                  <h3>#5. Safety First</h3>
                  <p>
                    Your safety is our top priority. All our cars undergo
                    rigorous maintenance checks and are equipped with advanced
                    safety features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="small-container">
            <h2>About Us</h2>
            <p>
              McLaren Rentals Las Vegas is your premier McLaren rental and
              Las Vegas sports car rentals destination, offering the thrill
              and luxury of the world's most exquisite supercars. Since our
              establishment in 2022, we've been offering the opportunity to
              drive the dream in the heart of Las Vegas, the city known for
              its glamour, entertainment, and thrill.
            </p>
            <p>
              Our love for supercars is deeply rooted in our team's shared
              passion for power, performance, and precision engineering. We
              understand the allure of these incredible machines and we take
              immense pleasure in sharing this excitement with our customers.
            </p>
            <p>
              Our commitment goes beyond just providing exceptional vehicles. We
              strive to deliver an unrivaled customer experience, marked by
              personalized service, transparent pricing, and absolute
              convenience. We meticulously maintain our fleet to ensure that
              every car we rent out is in impeccable condition, both
              aesthetically and mechanically.
            </p>
            <p>
              At McLaren Rentals Las Vegas, we believe in transforming journeys
              into unforgettable experiences. Our mission is to help you create
              memories filled with the roar of powerful engines, the thrill of
              speed, and the luxury of the world’s finest automobiles.
            </p>
          </div>
        </section>
        <section id="faq">
          <div className="small-container">
            <h2>Frequently Asked Questions</h2>
            <FaqAccordion faqs={[...FAQS_COL_1, ...FAQS_COL_2]} />
          </div>
        </section>
        <div
          className="mt-8 flex h-75 items-center justify-center bg-[url('/images/mclaren-base-image.jpg')] bg-cover bg-center bg-no-repeat text-white md:h-225"
        >
          <div className="my-8 self-center px-[1.2rem]">
            <Button href={PHONE_HREF} className={whiteButtonClasses}>
              Your McLaren Is Waiting — Reserve Today!
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}
