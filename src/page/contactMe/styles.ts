import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 90%;
  height: 100%;
  border-radius: 15px;
  background-color: ${(props) => props.theme["gray-600"]};
  padding: 5px;
  margin: 28px auto;
  flex-direction: column;
`;
export const Header = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  margin: auto;
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${(props) => props.theme["gray-100"]};

  }

  @media (min-width: 360px) {
    h2 {
      display: flex;
      width: 70%;
      height: 100%;

      font-size: 32px;
      margin: 20px auto;
    }
    hr {
      width: 168px;
      margin: -15px 0;
      height: 2px;
      color: ${(props) => props.theme["gray-100"]};

    }
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 25px;
  
`;