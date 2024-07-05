import {
  Form,
  FormContainer,
  FormHeader,
  Title,
  Text,
  FormSection,
  Input,
  Button,
  Icon,
  ScheduleInfo,
  Info,
  Subtitle,
  LinkInfo,
  Link,
} from "./style";
import { FaTelegramPlane } from "react-icons/fa";
import Data from "./Data/Data";

const FormNewsletter = () => {
  const DoubleItem = Math.ceil(Data.length / 2);
  const FirstItemCard = Data.slice(0, DoubleItem);
  const SecondItemCard = Data.slice(DoubleItem);
  const CardData = [FirstItemCard, SecondItemCard];
  return (
    <FormContainer>
      <Form>
        <FormHeader>
          <Title>By Subscribing To Our Newsletter You Can Get 30% Off</Title>
          <Text italic>
            Details to details is what makes Hexashop different from the other
            stores.
          </Text>
        </FormHeader>
        <FormSection>
          <Input type="text" placeholder="Your Name"></Input>
          <Input type="email" placeholder="Your Email Address"></Input>
          <Button type="submit">
            <Icon>
              <FaTelegramPlane />
            </Icon>
          </Button>
        </FormSection>
      </Form>
      {CardData.map((card, index) =>
        index === 0 ? (
          <ScheduleInfo key={card}>
            {card.map((card1) => (
              <Info key={card1.id}>
                <Subtitle>{card1.title}</Subtitle>
                <Text>{card1.text}</Text>
              </Info>
            ))}
          </ScheduleInfo>
        ) : (
          <ScheduleInfo key={card}>
            {card.map((card2) => (
              <Info key={card2.id}>
                <Subtitle>{card2.title}</Subtitle>
                {card2.links ? (
                  <LinkInfo>
                    {card2.links.map((link) => (
                      <Link key={link.id} href="#">{link.linktext}</Link>
                    ))}
                  </LinkInfo>
                ) : (
                  <Text>{card2.text}</Text>
                )}
              </Info>
            ))}
          </ScheduleInfo>
        )
      )}
    </FormContainer>
  );
};

export default FormNewsletter;
