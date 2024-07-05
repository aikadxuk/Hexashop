import {
  Bar,
  Hamburguer,
  HeaderContainer,
  IconDown,
  Link,
  LinkHover,
  Logo,
  Nav,
  Submenu,
  SubmenuContainer,
} from "./style";
import LogoImg from "./../../assets/logo.png";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {
  const [openMenuBox, setOpenMenuBox] = useState(false);

  const openMenu = () => {
    setOpenMenuBox((prevState) => !prevState);
  };
  return (
    <HeaderContainer>
      <Logo src={LogoImg}></Logo>
      <Nav openMenuBox={openMenuBox}>
        <Link href="#">Home</Link>
        <Link href="#">Men&apos;s</Link>
        <Link href="#">Women&apos;s</Link>
        <Link href="#">Kid&apos;s</Link>
        <SubmenuContainer>
          <LinkHover>
            Pages
            <IconDown>
              <FaAngleDown />
            </IconDown>
          </LinkHover>
          <Submenu>
            <Link href="#">About Us</Link>
            <Link href="#">Product</Link>
            <Link href="#">Single Products</Link>
            <Link href="#">Contact Us</Link>
          </Submenu>
        </SubmenuContainer>
        <SubmenuContainer>
          <LinkHover>
            Features
            <IconDown>
              <FaAngleDown />
            </IconDown>
          </LinkHover>
          <Submenu>
            <Link href="#">Feature Page 1</Link>
            <Link href="#">Feature Page 2</Link>
            <Link href="#">Feature Page 3</Link>
            <Link href="#">Feature Page 4</Link>
          </Submenu>
        </SubmenuContainer>
        <Link href="#">Explore</Link>
      </Nav>
      <Hamburguer onClick={openMenu}>
        <Bar openMenuBox={openMenuBox}></Bar>
        <Bar openMenuBox={openMenuBox}></Bar>
        <Bar openMenuBox={openMenuBox}></Bar>
      </Hamburguer>
    </HeaderContainer>
  );
};

export default Header;
