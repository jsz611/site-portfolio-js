import React from "react";
import * as S from "./styles";
import { useState } from "react";

import { save } from "../../services/axios";
interface Data {
  name?: string;
  email?: string;
  description?: string;
  Data?: string;
}

export const FormContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const date = new Date();
  const formattedDate = date.toLocaleDateString();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const resetForm = () => {
    setName("");
    setEmail("");
    setDescription("");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data: Data = {
      name: name,
      email: email,
      description: description,
      Data: formattedDate,
    };

    if (name && email && description != "") {
      save(data);

      setSuccess(true);

      resetForm();

      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    } else {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  return (
    <S.ContainerForm action="">
      <S.ContainerTitle>
        <S.Title>Vamos conversar!</S.Title>
      </S.ContainerTitle>

      <S.ContainerBox>
        <S.Input
          type="text"
          placeholder="Digite seu nome"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <S.Input
          type="email"
          placeholder="E-mail"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <textarea
          placeholder="Texto"
          required
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </S.ContainerBox>
      <S.ContainerButton>
        <button type="submit" onClick={handleSubmit}>
          Confirmar
        </button>
      </S.ContainerButton>
      {success && <S.Success>Dados enviados com sucesso!</S.Success>}
      {error && <S.Error>Preencha todos os campos!</S.Error>}
    </S.ContainerForm>
  );
};
