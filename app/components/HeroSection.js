import styled from 'styled-components'
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
    <>
      <Hero
        backgroundImage={backgroundImage}
        backgroundHeight={backgroundHeight}
      >
        <div className="content">
          <h1 className="heroText">{heroText}</h1>
          <p>{subText}</p>
          {buttonText && (
            <a href={buttonLink}>
              <WhiteButton>{buttonText}</WhiteButton>
            </a>
          )}
        </div>
      </Hero>
    </>
  )
}

const Hero = styled('span')`
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.42),
      rgba(162, 0, 0, 0.35)
    ),
    url(${(props) => props.backgroundImage});
  background-position: center;
  height: ${(props) => props.backgroundHeight};
  background-size: cover;
  margin: 0 auto;
  max-width: 100vw;

  @media only screen and (min-device-width: 360px) {
    color: #f4b755;
    color: #fff;

    h1 {
      font-size: 2.5rem;
      font-weight: 900;
      margin-bottom: 1rem;
      text-shadow: 2px 4px #000;
    }

    p {
      font-size: 1.4rem;
      line-height: 1.6;
      font-weight: 300;
      text-shadow: 1px 2px #000;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 6rem;
    }

    p {
      font-size: 1.6rem;
      line-height: 1.4;
      font-weight: 600;
    }
  }

  .content {
    max-width: 80%;
    text-align: center;
    font-weight: 700;
  }
`

const WhiteButton = styled(Button)`
  color: #fff;
  border-color: #fff;
`

export default HeroSection
