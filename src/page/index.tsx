import React from "react";
import AboutMe from "./aboutMe";
import ContactMe from "./contactMe";
import Portfolio from "./portfolio";
import * as S from "./styles";
export const Home = () => {
  return (
    <S.Container>
      <AboutMe />
      <Portfolio />
      <ContactMe />
    </S.Container>
  );
};
