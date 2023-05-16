import styled from "styled-components";

export const ContainerNav = styled.div`
  display: flex;
  position: fixed;
  z-index: 999;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme["gray-800"]};
  color: ${(props) => props.theme["gray-100"]};
  margin: 0;
  padding: 0;

  .sc-gswNZR {
  
    @media (min-width: 300px) {
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    @media (min-width: 1024px) {
      height: 70px;
      flex-direction: row;
    }
  }
`;
export const Title = styled.div`
  display: flex;

  @media (max-width: 668px) {
    display: none !important;
  }
  @media (min-width: 669px) {
    width: 80%;
    display: flex;
    align-items: center;

    margin-left: 60px;
    a {
      text-decoration: none;
      color: ${(props) => props.theme["gray-100"]};
    }
  }
`;
