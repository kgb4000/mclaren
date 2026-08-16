import Button from '../components/Button'

const HeroSection = ({
  backgroundImage,
  heroText,
  subText,
  buttonText,
  backgroundHeight,
  buttonLink,
}) => {
  return (
    <span
      className="mx-auto flex max-w-[100vw] items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.42), rgba(162,0,0,0.35)), url(${backgroundImage})`,
        height: backgroundHeight,
      }}
    >
      <div className="max-w-[80%] text-center font-bold">
        <h1 className="mt-8 mb-4 text-[2rem] font-black text-white [text-shadow:2px_4px_#000] md:text-[6rem]">
          {heroText}
        </h1>
        <p className="text-[1.4rem] leading-[1.6] font-light text-white [text-shadow:1px_2px_#000] md:text-[1.6rem] md:leading-[1.4] md:font-semibold">
          {subText}
        </p>
        {buttonText && (
          <Button
            href={buttonLink}
            className="border-white text-white hover:bg-white hover:text-black"
          >
            {buttonText}
          </Button>
        )}
      </div>
    </span>
  )
}

export default HeroSection
