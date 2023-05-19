'use client'
import styled from 'styled-components'
import HeroSection from './components/HeroSection'
import Button from './components/Button'

export default function Home() {
  return (
    <>
      <main>
        <HeroSection
          heroText="Rent a McLaren in Las Vegas"
          subText="Elevate your Vegas adventure with an unbelievable driving experience."
          backgroundImage="images/mclaren-570GT.webp"
          backgroundHeight="100vh"
          buttonText="Call to reserve your McLaren today!"
          buttonLink=""
        />
        <section>
          <div className="medium-container">
            <Intro>
              <img
                src="images/rent-a-mclaren-las-vegas.jpg"
                alt="Rent a McLaren 570GT in Las Vegas."
                title="Rent a McLaren 570GT in Las Vegas."
                loading="lazy"
                width="1920px"
              />
              <div>
                <h2>Rent a McLaren and Turn Heads</h2>
                <p>
                  At Supercar Rentals Las Vegas, we turn dreams into reality.
                </p>
                <p>
                  We give you the most luxurious and thrilling{' '}
                  <a href="https://cars.mclaren.com/en" target="_blank">
                    McLaren
                  </a>{' '}
                  rental experience in the fabulous of Las Vegas.
                </p>
                <p>
                  Our mission is to provide you with an unforgettable driving
                  adventure that will elevate your Vegas experience to new
                  heights.
                </p>
                <p>
                  Whether you're cruising the Strip, exploring the surrounding
                  scenic roads, or attending a glamorous event, driving a
                  McLaren can make your stay in Sin City one for the books.
                </p>
              </div>
            </Intro>
            <Button>Call to Reserve Your McLaren Today!</Button>
          </div>
        </section>

        <section>
          <div className="medium-container">
            <h2>Our McLaren Vehicles</h2>
            <CarsForRent>
              <Car>
                <h3>McLaren 570GT - Elegance Meets Power</h3>
                <img
                  src="images/mclaren-570GT.webp"
                  alt="Rent a McLaren 570GT in Las Vegas."
                  title="Rent a McLaren 570GT in Las Vegas."
                  loading="lazy"
                />
                <h4>$649.00 per day</h4>
                <p>
                  Experience the perfect blend of luxury, comfort, and
                  sportiness with our McLaren 570GT. Born from the McLaren
                  Sports Series family, the 570GT is the ultimate sports car
                  experience, with a touch of grand tourer luxury.
                </p>
                <div className="car-btns">
                  <SmallButton>Reserve Now!</SmallButton>
                  <SmallButton>Learn More!</SmallButton>
                </div>
              </Car>
              <Car>
                <h3>McLaren 570S - Sportiness Redefined</h3>
                <img
                  src="images/mclaren-570S.webp"
                  alt="Rent a McLaren 570S in Las Vegas."
                  title="Rent a McLaren 570S in Las Vegas."
                  loading="lazy"
                />
                <h4>$649.00 per day</h4>
                <p>
                  Enter the world of pure exhilaration with the McLaren 570S.
                  This elegant beast from the McLaren Sports Series is a
                  testament to the British automaker's racing heritage, offering
                  an uncompromised driving experience that combines thrilling
                  performance, sophisticated design, and advanced technology.
                </p>
                <div className="car-btns">
                  <SmallButton>Reserve Now!</SmallButton>
                  <SmallButton>Learn More!</SmallButton>
                </div>
              </Car>
            </CarsForRent>
          </div>
          <div className="container">
            <p>
              Our McLarens are meticulously maintained to ensure your safety,
              comfort, and enjoyment. Each vehicle is detailed to perfection and
              equipped with state-of-the-art technology, allowing you to
              experience the full potential of these engineering marvels.
            </p>
            <Button>Call to Reserve Your McLaren Today!</Button>
          </div>
        </section>

        <section>
          <div className="medium-container">
            <h2>Take a Scenic Drive Near Las Vegas in a McLaren</h2>
            <p className="center">
              Don't just rent your supercar and cruse the{' '}
              <a
                href="https://www.lasvegashowto.com/las-vegas-strip-map"
                target="_blank"
              >
                Las Vegas strip
              </a>
              . Take a scenic driving tour to one of these exotic locations near
              Vegas.
            </p>
            <PlacesToVisit>
              <div className="places">
                <img
                  src="images/drive-through-death-valley.png"
                  alt="Driving through Death Valley near Las Vegas."
                  title="Driving through Death Valley near Las Vegas."
                  loading="lazy"
                  width="1920px"
                  height="auto"
                />
                <h3>Hover Dam</h3>
              </div>
              <div className="places">
                <img
                  src="images/drive-through-death-valley.png"
                  alt="Driving through Red Rock Canyon Scenic Byway."
                  title="Driving through Red Rock Canyon Scenic Byway."
                  loading="lazy"
                  width="1920px"
                  height="auto"
                />
                <h3>Red Rock Canyon Scenic Byway</h3>
              </div>
              <div className="places">
                <img
                  src="images/drive-through-death-valley.png"
                  alt="Driving through Death Valley near Las Vegas."
                  title="Driving through Death Valley near Las Vegas."
                  loading="lazy"
                  width="1920px"
                  height="auto"
                />
                <h3>Death Valley National Park</h3>
              </div>
            </PlacesToVisit>
            <PlacesToVisit>
              <div className="places">
                <img
                  src="images/drive-through-death-valley.png"
                  alt="Driving through Pyramid Lake Scenic Byway near Las Vegas."
                  title="Driving through Pyramid Lake Scenic Byway near Las Vegas."
                  loading="lazy"
                  width="1920px"
                  height="auto"
                />
                <h3>Pyramid Lake Scenic Byway</h3>
              </div>
              <div className="places">
                <img
                  src="images/drive-through-death-valley.png"
                  alt="Driving through Valley of Fire State Park."
                  title="Driving through Valley of Fire State Park."
                  loading="lazy"
                  width="1920px"
                  height="auto"
                />
                <h3>Valley of Fire State Park</h3>
              </div>
              <div className="places">
                <img
                  src="images/drive-through-death-valley.png"
                  alt="Driving through Blue Diamond Bend."
                  title="Driving through Blue Diamond Bend."
                  loading="lazy"
                  width="1920px"
                  height="auto"
                />
                <h3>Blue Diamond Bend</h3>
              </div>
            </PlacesToVisit>
            <Button>Call to Reserve Your Car Today!</Button>
          </div>
        </section>

        <section>
          <div className="medium-container">
            <h2>Upcoming Event in Las Vegas</h2>
            <h3>NAHB International Builders' Show 2024 Las Vegas</h3>
            <h3>Allegiant Stadium - Las Vegas Raiders</h3>
            <h3>CES 2024 Las Vegas</h3>
            <h3>SHOT Show 2024 Las Vegas</h3>
            <h3>World of Concrete 2024 Las Vegas</h3>
            <Button>See more events in Vegas</Button>
          </div>
        </section>

        <section>
          <div className="medium-container">
            <Why>
              <img
                src="/images/mclaren-about-us.jpg"
                alt="About Supercar rentas Las Vegas"
                loading="lazy"
              />
              <div>
                <h2>Why Choose Supercar Rentals Las Vegas</h2>
                <p>
                  Although there are many exotic car rental companies in Las
                  Vegas, there are reasons to rent your car from us.
                </p>
                <div className="faq">
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
                    service. Our team of dedicated professionals are committed
                    to ensuring your Mclaren rental experience is seamless and
                    memorable.
                  </p>
                  <h3>#4. Fair Pricing</h3>
                  <p>
                    We believe that luxury should be accessible. That's why we
                    offer competitive rates, special promotions, and flexible
                    rental terms.
                  </p>
                  <h3>#5. Safety First</h3>
                  <p>
                    Your safety is our top priority. All our cars undergo
                    rigorous maintenance checks and are equipped with advanced
                    safety features.
                  </p>
                </div>
              </div>
            </Why>
            <Button>Call today to reserve your McLaren!</Button>
          </div>
        </section>

        <section>
          <div className="container">
            <h2>About Us</h2>
            <p>
              Supercar Rentals Las Vegas is your premier destination for
              experiencing the thrill and luxury of the world's most exquisite
              supercars. Since our establishment in 2022, we've been offering
              the opportunity to drive the dream in the heart of Las Vegas, the
              city known for its glamour, entertainment, and thrill.
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
              At Supercar Rentals Las Vegas, we believe in transforming journeys
              into unforgettable experiences. Our mission is to help you create
              memories filled with the roar of powerful engines, the thrill of
              speed, and the luxury of the world’s finest automobiles.
            </p>
            <Button>Call us to reserve your McLaren Today!</Button>
          </div>
        </section>
        <section>
          <div className="medium-container">
            <h2>Frequently Asked Questions</h2>
            <Faq>
              <div className="faq-section">
                <h3>Who can rent a McLaren?</h3>
                <p>
                  Any licensed driver aged 25 or older with full-coverage auto
                  insurance can rent a McLaren from us.
                </p>
                <h3>What do I need to bring to rent a McLaren?</h3>
                <p>
                  You will need a valid driver's license, proof of full-coverage
                  auto insurance, and a credit card for security deposit.
                </p>
                <h3>Can I drive the McLaren outside of Las Vegas?</h3>
                <p>
                  Yes, you are free to drive anywhere within the continental
                  United States. However, additional fees may apply for
                  significant mileage.
                </p>
                <h3>What happens if I damage the car?</h3>
                <p>
                  In the unfortunate event of damage, you will be responsible
                  for the deductible on your insurance policy. Additional
                  charges may apply depending on the extent of the damage.
                </p>
                <h3>Can I extend my rental period?</h3>
                <p>
                  Yes, subject to availability. Please inform us at least 24
                  hours before your rental period ends if you wish to extend.
                </p>
                <h3>What are your operating hours?</h3>
                <p>
                  Our office is open from 9 AM to 6 PM, seven days a week.
                  However, we offer 24-hour customer service for any inquiries
                  or assistance you might need during your rental period.
                </p>
              </div>
              <div className="faq-section">
                <h3>Can someone else drive the car that I rent?</h3>
                <p>
                  Yes, additional drivers are allowed but they must meet the
                  same requirements as the main driver, including age, driving
                  license, and insurance coverage. Please note that additional
                  charges may apply.
                </p>
                <h3>Do I need to refuel the car before returning it?</h3>
                <p>
                  Yes, we ask that you return the car with the same fuel level
                  as when you picked it up. If the car is returned with less
                  fuel, a refueling charge will apply.
                </p>
                <h3>Do you provide pick-up and drop-off services?</h3>
                <p>
                  Yes, we do. We offer delivery and pick-up services within Las
                  Vegas. Please contact us for further details and any
                  additional fees.
                </p>
                <h3>Can I cancel or modify my reservation?</h3>
                <p>
                  Yes, you can cancel or modify your reservation. However,
                  please note that cancellations or modifications must be made
                  at least 48 hours before the scheduled rental time to avoid
                  any charges.
                </p>
                <h3>Are the cars smoke-free?</h3>
                <p>
                  Yes, all our vehicles are smoke-free. A cleaning fee will be
                  charged if the vehicle is returned with evidence of smoking.
                </p>
                <h3>Are pets allowed in the vehicles?</h3>
                <p>
                  No, pets are not allowed in our vehicles. We strive to
                  maintain the pristine condition of our fleet for all customers
                  to enjoy.
                </p>
              </div>
            </Faq>
          </div>
        </section>
        <BaseImage>
          <div className="btn">
            <WhiteButton>Call to Reserve Your McLaren Today!</WhiteButton>
          </div>
        </BaseImage>
      </main>
    </>
  )
}

const Intro = styled.div`
  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
  }
`

const CarsForRent = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  .car-btns {
    display: flex;
  }
`

const Car = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  p {
    flex: 1 0 auto;
  }

  h3 {
    text-align: center;
  }
`

const Faq = styled.div`
  h3 {
    margin-top: 2rem;
  }
  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
  }
`

const BaseImage = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  background-image: url('/images/mclaren-base-image.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin-top: 2rem;
  height: 300px;
  color: #fff;
  @media screen and (min-width: 900px) {
    height: 900px;
  }
`

const Why = styled.div`
  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;

    h2 {
      text-align: left;
    }
  }
`

const PlacesToVisit = styled.div`
  @media screen and (min-width: 900px) {
    display: flex;
    justify-content: space-between;

    .places {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      text-align: center;
    }
  }
`

const WhiteButton = styled(Button)`
  color: #fff;
  border-color: #fff;
  text-shadow: 1px 2px #000;
`

const SmallButton = styled(Button)`
  font-size: 1rem;
`
