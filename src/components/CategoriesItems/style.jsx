import styled from "styled-components";

export const Main = styled.main`
  padding: 70px 2%;
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-template-rows: repeat(2, 300px);
  gap: 23px;
  grid-template-areas:
    "bigCard bigCard women men"
    "bigCard bigCard kids acessories";
  border-bottom: 3px dotted var(--light-gray);

  @media (width <= 940px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    grid-template-rows: repeat(4, 300px);
    grid-template-areas:
      "bigCard bigCard"
      "bigCard bigCard"
      "women men"
      "kids acessories";
  }

  @media (width <= 540px) {
    grid-template-columns: repeat(1, 380px);
    justify-content: center;
    grid-template-rows: repeat(6, 300px);
    grid-template-areas:
      "bigCard"
      "bigCard"
      "women"
      "men"
      "kids"
      "acessories";
  }
`;

export const AbsoluteText = styled.section`
  --black: #2a2a2a70;
  position: absolute;
  inset: 7%;
  background-color: var(--black);
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const Card = styled.article`
  position: relative;
  background-image: url(${({ image }) => image && `${image}`});
  background-position: center;
  width: 100%;
  &:nth-child(1) {
    grid-area: bigCard;
  }

  &:nth-child(2) {
    grid-area: women;
  }

  &:nth-child(3) {
    grid-area: men;
  }

  &:nth-child(4) {
    grid-area: kids;
  }

  &:nth-child(5) {
    grid-area: acessories;
  }

  &:hover ${AbsoluteText} {
    display: flex;
    transition: 3s;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const CardText = styled.section`
  display: flex;
  flex-direction: column;
  align-items: ${({ alignItems }) => alignItems || "start"};
  padding: ${({ paddingCard }) => paddingCard || "0px"};
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 5px;
`;

export const Button = styled.a`
  border: 2px solid white;
  margin-top: 20px;
  background: none;
  color: white;
  font-size: 1rem;
  padding: 10px 5%;
  text-decoration: none;
  transition: 1s;
  &:hover {
    background-color: white;
    color: #000000;
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  color: white;
  font-weight: 700;
`;

export const Subtitle = styled.h2`
  font-weight: 600;
  font-size: clamp(1.3rem, 2vw, 1.6rem);
  color: white;
`;

export const Text = styled.p`
  color: white;
  font-size: ${({ smallFontSize }) =>
    smallFontSize ? "clamp(.7rem,10vw,.8rem)" : "1.1rem"};
  font-weight: 400;
  font-style: italic;
`;
