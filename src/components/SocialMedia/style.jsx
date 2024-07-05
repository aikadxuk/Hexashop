import styled from "styled-components";

export const Social = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50px 3%;
  gap: 50px;
  border-bottom: 3px dotted var(--light-gray);
`;

export const SocialCards = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(100px, 300px));

  @media (width <= 750px) {
    grid-template-columns: repeat(3, minmax(100px, 300px));
  }
`;

export const TitleHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 2rem;
`;

export const Text = styled.p`
  color: var(--light-black);
  font-style: italic;
  font-size: 0.9rem;
`;

export const AbsoluteCard = styled.div`
  --black: #00000090;
  position: absolute;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: var(--black);
  display: flex;
  align-items: end;
  padding: 10px;
`;

export const SocialCard = styled.article`
  display: flex;
  position: relative;
  overflow: hidden;

  &:hover ${AbsoluteCard} {
    left: 0;
    transition: 0.2s;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const SubtitleContainer = styled.a`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-decoration: none;
`;

export const Subtitle = styled.h5`
  color: white;
  font-size: 1rem;
`;

export const IconLink = styled.div`
  color: white;
  text-decoration: none;
  font-size: 1rem;
`;

export const Icon = styled.i``;
