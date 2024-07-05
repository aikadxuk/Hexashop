import {
  Card,
  Main,
  Subtitle,
  Title,
  Text,
  CardText,
  Button,
  AbsoluteText,
} from "./style";
import { CardData, AbsoluteData } from "./Data/Data";

const Categories = () => {
  return (
    <Main>
      {CardData.map((card, index) => (
        <Card key={card.id} image={card.img}>
          <CardText
            alignItems={index === 0 ? "start" : "center"}
            paddingCard={index === 0 && "0 13%"}
          >
            {card.maintitle && <Title>{card.maintitle}</Title>}
            <Subtitle>{card.title}</Subtitle>
            {index > 0 ? (
              <Text style={{ textAlign: "center" }}>{card.text}</Text>
            ) : (
              <Text>{card.text}</Text>
            )}
            {card.mainbutton && <Button href="">{card.mainbutton}</Button>}
            {index > 0 &&
              index <= AbsoluteData.length &&
              AbsoluteData.map((absolutecard) => (
                <AbsoluteText key={AbsoluteData[index - 1].id}>
                  <Subtitle textAlign>
                    {AbsoluteData[index - 1].absolutetitle}
                  </Subtitle>
                  {index > 0 && (
                    <Text style={{ textAlign: "center" }} smallFontSize>
                      {absolutecard.text}
                    </Text>
                  )}
                  <Button href="#">{absolutecard.button}</Button>
                </AbsoluteText>
              ))}
          </CardText>
        </Card>
      ))}
    </Main>
  );
};

export default Categories;
