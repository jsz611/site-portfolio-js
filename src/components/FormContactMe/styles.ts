import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;

  margin: 30px auto;
  padding: 10px;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 18px;
  background-color: ${(props) => props.theme["gray-400"]};
  @media (min-width: 200px) {
    width: 190px;
  }
  @media (min-width: 360px) {
    width: 320px;
  }
  @media (min-width: 501px) {
    width: 500px;
  }
`;
export const ContainerTitle = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;
export const Title = styled.h3`
  align-items: center;
  justify-content: left;
  color: ${(props) => props.theme["gray-900"]};
  @media (min-width: 200px){
    font-size: 15px;
  }
`;
export const ContainerBox = styled.div`
  display: flex;
  width: 100%;
  padding: 5px;
  gap: 25px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: transparent;

  textarea {
    display: flex;
    height: 200px;
    margin: 5px;
    background-color: ${(props) => props.theme["gray-400"]};

    border-radius: 4px;
    border: solid 1px black;

    padding: 10px;
    color: ${(props) => props.theme["gray-900"]};

    font-weight: 400;
    font-size: 20px;
    line-height: 20px;

    letter-spacing: -0.025em;

    :hover {
      background-color: ${(props) => props.theme["white"]};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      border: solid 1px white;
    }

    &::placeholder {
      color: ${(props) => props.theme["Black"]};

      font-family: "Montserrat";
    }
    @media (min-width: 200px) {
      width: 95%;

    }
    @media (min-width: 360px) {
      width: 95%;
    }
  }
`;

export const Input = styled.input`
  display: flex;
  width: 50% !important;
  height: 40px;

  background-color: ${(props) => props.theme["gray-400"]};

  border-radius: 4px;
  border: solid 1px black;

  padding: 15px 14px;
  color: ${(props) => props.theme["gray-900"]};

  font-weight: 400;
  font-size: 20px;
  line-height: 20px;

  letter-spacing: -0.025em;

  margin-bottom: 20px;

  :hover {
    background-color: ${(props) => props.theme["white"]};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    border: solid 1px white;
  }

  &::placeholder {
    color: ${(props) => props.theme["Black"]};

    font-family: "Montserrat";
  }

  @media (min-width: 360px) {
    width: 95% !important;
    height: 40px;

    font-weight: 400;
    font-size: 20px;
    line-height: 20px;

    letter-spacing: -0.025em;

    margin-bottom: 10px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  width: 75%;
  margin: 15px 0 0 2px;
  align-items: center;
  border-radius: 22px;

  justify-content: center;


  button {
    border-radius: 8px;
    color: ${(props) => props.theme["Black"]};
    font-weight: 500;
    margin-bottom: 10px;
    font-size: 18px;
    background-color: ${(props) => props.theme["gray-300"]};
    @media (min-width: 360px) {
      width: 60%;
    padding: 6px;

    }
    @media (min-width: 500px) {
      width: 45%;
    padding: 8px;

    }
  }
  button:hover {
    background-color: ${(props) => props.theme["gray-500"]};
   
  }


`;

export const Success = styled.span`
  margin: 5px;

  color: ${(props) => props.theme["green-700"]};
`;
export const Error = styled.span`
  margin: 5px;
  color: ${(props) => props.theme["red-300"]};
`;
