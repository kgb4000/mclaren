import styled from 'styled-components'

const Button = styled.button`
  ${
    '' /* border: none;
  background-color: #f4b755;
  color: #fff;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  margin-bottom: 2rem;
  padding: 2rem 2.5rem; */
  }

  border: 3px solid #f4b755;
  background-color: transparent;
  color: #f4b755;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;
  text-transform: uppercase;
  margin-bottom: 2rem;
  padding: 1rem 1.5rem;

  @media screen and (min-width: 900px) {
    font-size: 1.5rem;
    padding: 2rem 2.5rem;
  }
`

export default Button
