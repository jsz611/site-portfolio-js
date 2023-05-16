import React from "react";
import { Card } from "../../components/Card";
import * as S from "./styles";

const Portfolio = () => {
  return (
    <S.Container id="portfolio">
      <S.Header>
        <h2>
          Projetos
          <hr />
        </h2>
      </S.Header>
      <S.ContainerCard>
        <Card />
      </S.ContainerCard>
    </S.Container>
  );
};

export default Portfolio;
