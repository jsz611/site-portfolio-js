import React from "react";
import * as S from "./styles";
import { ContentCard } from "./components/ContentCard/ContentCard";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

interface ICardProps {
  id: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  name: string;
  description: string;
  site?: string;
  codigo?: string;
}

export const Card = () => {
  const [cards, setCards] = useState<Array<ICardProps>>(ContentCard);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const toggleReadMore = (cardId: string) => {
    if (cardId === expandedCardId) {
      setExpandedCardId(null);
    } else {
      setExpandedCardId(cardId);
    }
  };

  return (
    <>
      {cards.map((card) => {
        const isExpanded = card.id === expandedCardId;
        return (
          <S.ContainerCard key={card.id} className={isExpanded ? 'expanded' : ''}>
            <S.ContainerImage>
              <Carousel>
                <Carousel.Item>
                  <img src={card.img1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={card.img2} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={card.img3} alt="Third slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={card.img4} alt="Third slide" />
                </Carousel.Item>
              </Carousel>
            </S.ContainerImage>

            <S.ContainerBox>
              <S.Title>{card.name} </S.Title>
            </S.ContainerBox>
            <S.ContainerDescription>
              <h5>Descrição:</h5>
              <S.Description>
                {isExpanded
                  ? card.description
                  : `${card.description.substring(0, 200)}.....`}
                <button
                  className="botao"
                  onClick={() => toggleReadMore(card.id)}
                >
                  {isExpanded ? "ver menos" : "ver mais"}
                </button>
              </S.Description>
            </S.ContainerDescription>
            <S.ContainerButton>
              {card.site && (
                <button type="button">
                  <a href={card.site} target="_blank">
                    Ver site
                  </a>
                </button>
              )}
              {card.codigo && (
                <button type="button">
                  <a href={card.codigo} target="_blank">
                    Ver Código
                  </a>
                </button>
              )}
            </S.ContainerButton>
          </S.ContainerCard>
        );
      })}
    </>
  );
};
