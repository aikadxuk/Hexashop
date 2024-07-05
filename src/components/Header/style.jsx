import styled, { keyframes, css } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 8%;
  background: white;
  position: relative;
  border-bottom: 3px dotted var(--light-gray);
  max-width: 100%;
`;

export const Logo = styled.img``;

const fadeInNavMobile = keyframes`
    from{
        height:0;
        opacity: 0;
        background-color: transparent;
    }
    to{
        height: 630px;
        opacity: 1;
        background-color: var(--light-gray);
    }
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 25px;

  @media (width <= 1000px) {
    gap: 15px;
  }

  @media (width <= 865px) {
    position: absolute;
    flex-direction: column;
    top: ${({ openMenuBox }) => (openMenuBox ? "102px" : "-530px")};
    right: 0;
    z-index: ${({ openMenuBox }) => (openMenuBox ? 2 : -1)};
    gap: 25px;
    background-color: var(--light-gray);
    width: 50%;
    height: 630px;
    align-items: center;
    justify-content: center;
    ${({ openMenuBox }) =>
      openMenuBox
        ? css`
            animation: ${fadeInNavMobile} 3s;
          `
        : ""}
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: var(--black);
  font-weight: 600;

  &:hover {
    color: var(--light-black);
  }
`;

export const Submenu = styled.nav`
  display: none;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  width: 200px;
  max-width: 200px;
  top: 25px;
  background-color: var(--light-gray);
  padding: 15px;
  z-index: 1000;

  @media (width <= 865px) {
    right: 100%;
    top: 0;
    background-color: var(--lighter-gray);
  }
`;

export const LinkHover = styled.p`
  cursor: pointer;
  position: relative;
  font-weight: 600;
  display: inline-block;
  &:hover {
    color: var(--light-black);
  }
`;

export const SubmenuContainer = styled.section`
  position: relative;
  margin-right: 20px;
  &:hover ${Submenu} {
    display: flex;
  }
`;

export const IconDown = styled.i`
  position: absolute;
  top: 6px;
  right: -19px;
  font-size: 0.7rem;
`;

export const Hamburguer = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

  @media (width <= 866px) {
    display: flex;
  }
`;

export const Bar = styled.span`
  height: 2px;
  background-color: var(--light-black);
  transition: 0.5s;
  &:nth-child(1) {
    width: 45px;
    position: ${({ openMenuBox }) => (openMenuBox ? "absolute" : "static")};
    transform: ${({ openMenuBox }) =>
      openMenuBox ? "rotate(45deg)" : "rotate(0)"};
  }

  &:nth-child(2) {
    width: ${({ openMenuBox }) => (openMenuBox ? "0" : "55px")};
  }

  &:nth-child(3) {
    width: 45px;
    position: ${({ openMenuBox }) => (openMenuBox ? "absolute" : "static")};
    transform: ${({ openMenuBox }) =>
      openMenuBox ? "rotate(-45deg)" : "rotate(0)"};
  }
`;
