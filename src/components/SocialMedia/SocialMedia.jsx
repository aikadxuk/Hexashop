import Data from "./Data/Data";
import {
  AbsoluteCard,
  Icon,
  IconLink,
  Img,
  Social,
  SocialCard,
  Subtitle,
  SubtitleContainer,
  Title,
  TitleHeader,
  Text,
  SocialCards,
} from "./style";

const SocialMedia = () => {
  return (
    <Social>
      <TitleHeader>
        <Title>Social Media</Title>
        <Text>
          Details to details is what makes Hexashop different from the other
          stores.
        </Text>
      </TitleHeader>
      <SocialCards>
        {Data.map((card) => (
          <SocialCard key={card.id}>
            <Img src={card.img}></Img>
            <AbsoluteCard>
              <SubtitleContainer href="#">
                <Subtitle>{card.text}</Subtitle>
                <IconLink href="#">
                  <Icon>{card.icon}</Icon>
                </IconLink>
              </SubtitleContainer>
            </AbsoluteCard>
          </SocialCard>
        ))}
      </SocialCards>
    </Social>
  );
};

export default SocialMedia;
