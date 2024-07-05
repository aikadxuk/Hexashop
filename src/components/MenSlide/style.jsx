import styled from "styled-components";

export const SlideContainer = styled.section`
  padding: 40px 3%;
  gap: 50px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100vw;
  max-width: 100%;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 5px;
`;

export const Title = styled.h2`
  color: var(--black);
  font-size: 2.3rem;
`;

export const HeaderText = styled.p`
  color: var(--light-black);
  font-style: italic;
  font-size: 0.9rem;
`;

export const SlideBlock = styled.section`
  position: relative;
`;

export const Slide = styled.section`
  position: relative;
  height: 520px;
  max-width: 1100px;
  margin: 0 auto;
  overflow: hidden;

  @media (width <= 950px) {
    /* max-width: 700px; */
    height: 460px;
  }

  @media (width <= 540px) {
    height: 650px;
  }
`;

export const SlideCards = styled.div`
  display: grid;
  width: 202%;
  transition: 0.5s;
  left: ${({ moveSlideLeft }) => `-${moveSlideLeft}%`};
  grid-template-columns: repeat(6, minmax(100px, 1fr));
  gap: 20px;
  position: absolute;
  @media (width <= 700px) {
    width: 310%;
  }

  @media (width <= 540px) {
    width: 620%;
  }
`;

export const SlideCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AbsoluteLinks = styled.section`
  display: flex;
  align-items: center;
  gap: 20px;
  position: absolute;
  bottom: -100%;
  left: 21%;
`;

export const ImgContainer = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  &:hover ${AbsoluteLinks} {
    bottom: 10%;
    transition: 0.4s;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const IconsLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AbsoluteIcon = styled.i`
  background: white;
  padding: 12px 17px;
  color: var(--black);
`;

export const SubtitleHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (width <= 720px) {
    align-items: self-start;
    flex-direction: column;
    gap: 2px;
  }
`;

export const Subtitle = styled.h4`
  font-size: 1.2rem;

  @media (width <= 950px) {
    font-size: clamp(0.2rem, 3vw, 1rem);
  }
`;

export const Price = styled.span`
  color: var(--light-black);
  font-size: clamp(0.8rem, 2vw, 1rem);
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  top: 45%;
`;

export const Icon = styled.i`
  font-size: ${({ starsStyle }) =>
    starsStyle ? "clamp(.3rem, 3vw, .9rem)" : "1.2rem"};
  border: ${({ starsStyle }) =>
    starsStyle ? "none" : "1px solid var(--black)"};
  padding: ${({ starsStyle }) => (starsStyle ? "0" : "1%")};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ starsStyle }) => starsStyle && "3px"};
  cursor: ${({ starsStyle }) => (starsStyle ? "default" : "pointer")};
  transition: 0.3s;

  &:hover {
    background: ${({ starsStyle }) => (starsStyle ? "none" : "var(--black)")};
    color: ${({ starsStyle }) => (starsStyle ? "none" : "white")};
  }
`;
