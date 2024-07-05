import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: var(--black);
  padding: 40px 13%;
  gap: 35px;

  @media (width <= 948px) {
    gap: 15px;
  }

  @media (width <= 800px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (width <= 510px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const FooterCard = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const LogoImg = styled.img`
  width: 70%;
  margin-bottom: 10px;
`;

export const Subtitle = styled.h5`
  color: white;
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: white;
  font-size: clamp(0.75rem, 1vw, 0.9rem);
  line-height: 18px;

  &:hover {
    color: var(--lighter-gray);
  }
`;
