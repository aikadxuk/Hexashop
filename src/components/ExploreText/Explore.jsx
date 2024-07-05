import {
  ExploreContainer,
  ExploreText,
  Title,
  Text,
  BannerGrid,
  TextAside,
  Button,
  Banner,
  Subtitle,
  Img,
  ButtonLink,
} from "./style";
import Data from "./Data/Data";
import img1 from "./../../assets/explore-image-01.jpg";
import img2 from "./../../assets/explore-image-02.jpg";

const Explore = () => {
  return (
    <ExploreContainer>
      <ExploreText>
        <Title>Explore Our Products</Title>
        {Data.map((text) => (
          <>
            {text.asideText ? (
              <TextAside key={text.id}>{text.asideText}</TextAside>
            ) : (
              <Text key={text.id}>{text.text}</Text>
            )}
          </>
        ))}
        <Button>
          <ButtonLink href="#">Discover More</ButtonLink>
        </Button>
      </ExploreText>
      <BannerGrid>
        <Banner>
          <Subtitle>Leather Bags</Subtitle>
          <Text>Latest Collection</Text>
        </Banner>
        <Banner>
          <Img src={img1}></Img>
        </Banner>
        <Banner>
          <Img src={img2}></Img>
        </Banner>
        <Banner>
          <Subtitle>Different Types</Subtitle>
          <Text>Over 30 Products</Text>
        </Banner>
      </BannerGrid>
    </ExploreContainer>
  );
};

export default Explore;
