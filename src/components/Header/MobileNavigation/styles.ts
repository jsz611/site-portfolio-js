import styled from "styled-components";

export const ContainerMobile = styled.nav`
  @media (min-width: 200px) {
    display: flex;
    width: 100%;
    height: auto;

    flex-direction: column;
    justify-content: left;
    align-items: center;
    svg {
      margin: 15px;
      color: ${(props) => props.theme["gray-100"]};

      width: 50px;
      font-size: 32px;
    }
  }

  @media (min-width: 300px) {
    display: flex;
    width: 100%;
    height: auto;

    flex-direction: column;
    justify-content: left;
    align-items: center;
    svg {
      margin: 15px;

      width: 50px;
      font-size: 32px;
    }
  }
  @media (min-width: 788px) {
    display: none;
  }
`;

export const BoxIcon = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const BoxLinks = styled.div`
  display: flex;
  width: 100%;
`;
