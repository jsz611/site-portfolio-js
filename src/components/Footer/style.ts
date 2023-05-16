import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  width: 100%;
  height: 70px;

  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme["gray-800"]};
  color: ${(props) => props.theme["gray-100"]};

  p {
    justify-content: center;
    align-items: center;
    margin: 22px;
  }
 @media (min-width: 200px) {
  width: 100%;
  font-size: 49%;
  font-weight: 500;
  
 }
 @media (min-width: 360px) {
  width: 100%;
  font-size: 87%;
  font-weight: 600;
 }
`;
