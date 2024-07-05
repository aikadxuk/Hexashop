import styled from "styled-components";
import quote from "./../../assets/quote.svg";

export const ExploreContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  padding: 50px 7%;
  height: auto;
  border-bottom: 3px dotted var(--light-gray);

  @media (width <= 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const ExploreText = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Title = styled.h2`
  color: var(--black);
  font-size: 2rem;
  font-weight: 600;
`;

export const Text = styled.p`
  color: var(--light-black);
  font-size: clamp(0.8rem, 1.5vw, 0.9rem);
`;

export const SupportLink = styled.a`
  color: var(--blue);
  text-decoration: none;
  font-size: 1rem;
`;

export const TextAside = styled.aside`
  font-weight: 600;
  position: relative;
  padding: 0 40px;
  font-size: clamp(0.8rem, 1.5vw, 0.9rem);

  &:before {
    position: absolute;
    content: "";
    background-image: url(${quote});
    width: 24px;
    height: 24px;
    left: 0;
  }
`;

export const ButtonLink = styled.a`
  text-decoration: none;
  color: var(--black);
`;

export const Button = styled.button`
  background: none;
  padding: 13px 20px;
  margin-right: auto;
  border: 1px solid var(--black);
  letter-spacing: 0.5px;
  &:hover {
    background: var(--black);
    color: white;
  }

  &:hover ${ButtonLink} {
    color: white;
  }
`;

export const BannerGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 400px));
  justify-content: center;
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: auto;
  background: var(--light-gray);
`;

export const Subtitle = styled.h5`
  font-weight: 600;
  font-size: clamp(1.1rem, 2vw, 1.3rem);
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
