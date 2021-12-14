import React from "react";
import sizeMe from "react-sizeme";
import StackGrid from "react-stack-grid";
import {
  Content,
  CardContent,
  CardDate,
  CardTitle,
  CardImage,
  CardAuthor,
} from "./style";

interface IProps {
  cards: Array<any>;
  width: string;
}

const Masonry = ({ cards, width }: IProps) => {
  return (
    <Content>
      <StackGrid columnWidth={width}>
        {cards &&
          cards.map((card, key) => (
            <CardContent key={key}>
              <CardImage src={card.image} alt="" />
              <CardDate>{card.date}</CardDate>
              <CardTitle>{card.title}</CardTitle>
              <CardAuthor>Powed by {card.title}</CardAuthor>
            </CardContent>
          ))}
      </StackGrid>
    </Content>
  );
};

export default sizeMe()(Masonry);
