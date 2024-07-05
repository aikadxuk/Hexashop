import Data from "./Data/Data";
import {
  AbsoluteIcon,
  AbsoluteLinks,
  Header,
  HeaderText,
  Icon,
  IconContainer,
  IconsLink,
  Img,
  ImgContainer,
  Price,
  Slide,
  SlideBlock,
  SlideCard,
  SlideCards,
  SlideContainer,
  Subtitle,
  SubtitleHeader,
  Title,
} from "./style";
import {
  FaAngleLeft,
  FaAngleRight,
  FaEye,
  FaStar,
  FaCartShopping,
} from "react-icons/fa6";
import { useState, useEffect } from "react";

const MenSlide = () => {
  const [moveSlideLeft, setMoveSlideDirection] = useState(0);

  const leftButton = () => {
    setMoveSlideDirection((prev) => (prev > 0 ? prev - 100 : prev));
  };

  const rightButton = () => {
    setMoveSlideDirection((prev) => (prev < 100 ? prev + 100 : prev));
  };

  useEffect(() => {
    if (moveSlideLeft < 0) {
      setMoveSlideDirection(0);
    } else if (moveSlideLeft > 100) {
      setMoveSlideDirection(100);
    }
  }, [moveSlideLeft]);
  return (
    <SlideContainer>
      <Header>
        <Title>Kid&apos;s Latest</Title>
        <HeaderText>
          Details to details is what makes Hexashop different from the other
          stores.
        </HeaderText>
      </Header>
      <SlideBlock>
        <Slide>
          <SlideCards moveSlideLeft={moveSlideLeft}>
            {Data.map((card) => (
              <SlideCard key={card.id}>
                <ImgContainer>
                  <Img src={card.img}></Img>
                  <AbsoluteLinks>
                    <IconsLink href="#">
                      <AbsoluteIcon>
                        <FaEye />
                      </AbsoluteIcon>
                    </IconsLink>
                    <IconsLink href="#">
                      <AbsoluteIcon>
                        <FaStar />
                      </AbsoluteIcon>
                    </IconsLink>
                    <IconsLink href="#">
                      <AbsoluteIcon>
                        <FaCartShopping />
                      </AbsoluteIcon>
                    </IconsLink>
                  </AbsoluteLinks>
                </ImgContainer>
                <SubtitleHeader>
                  <Subtitle>{card.title}</Subtitle>
                  <Icon starsStyle>{card.stars}</Icon>
                </SubtitleHeader>
                <Price>{card.price}</Price>
              </SlideCard>
            ))}
          </SlideCards>
        </Slide>
        <IconContainer>
          <Icon onClick={leftButton}>
            <FaAngleLeft />
          </Icon>
          <Icon onClick={rightButton}>
            <FaAngleRight />
          </Icon>
        </IconContainer>
      </SlideBlock>
    </SlideContainer>
  );
};

export default MenSlide;
