import { FooterCard, FooterContainer, Link, LogoImg, Subtitle } from "./style";
import Data from "./Data/Data";

const Footer = () => {
  return (
    <FooterContainer>
      {Data.map((card) => (
        <FooterCard key={card.id}>
          {card.logo && <LogoImg src={card.logo}></LogoImg>}
          {card.subtitle && <Subtitle>{card.subtitle}</Subtitle>}
          {card.links.map((linktext) => (
            <Link key={linktext.id} href="">
              {linktext.link}
            </Link>
          ))}
        </FooterCard>
      ))}
    </FooterContainer>
  );
};

export default Footer;
