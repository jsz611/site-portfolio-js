import React from "react";
import { FormContactMe } from "../../components/FormContactMe";
import * as S from "./styles";

const ContactMe = () => {
  return (
    <S.Container id="contactMe">
    <S.Header>
    <h2>Fale Comigo</h2>
    <hr />
    </S.Header>
    <S.ContainerForm>
      <FormContactMe />
    </S.ContainerForm>
    </S.Container>
  );
};

export default ContactMe;
