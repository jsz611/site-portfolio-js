import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
  padding-top: 10%;
  margin-bottom: 28px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Description = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
  padding-top: 40px;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  color: ${(props) => props.theme["gray-100"]};

  h2 {
    font-size: 32px;
    font-weight: 800;
    margin: 10px;
    background: linear-gradient(to right, #323238, #417a90);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h3 {
    font-size: 24px;
    font-weight: 700;
    margin: 10px;
  }
  p {
    font-size: 18px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    padding: 15px;
  }
  @media (min-width: 360px) {
    h2 {
      font-size: 32px;
      font-weight: 800;
      margin: 10px;
      background: linear-gradient(to right, #323238, #417a90);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h3 {
      font-size: 20px;
      font-weight: 700;
      margin: 10px;
    }
    p {
      font-size: 18px;

      font-weight: 600;
      margin: 10px;
    }
  }
  @media (min-width: 800px) {
    h2 {
      font-size: 50px;
      font-weight: 800;
      margin: 8px;
      background: linear-gradient(to right, #323238, #417a90);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h3 {
      font-size: 30px;
      font-weight: 700;
      margin: 10px;
    }
    p {
      font-size: 25px;

      font-weight: 600;
      margin: 10px;
    }
  }
`;

export const ContainerIcon = styled.div`
  display: flex;

  width: 100%;
  height: 70px;
  margin: 0;
  padding: 5px;

  justify-content: space-around;
  align-items: center;
  @media (min-width: 200px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    gap: 10%;
  }
`;
export const BoxIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 0;
  padding: 0;
  height: auto;
  a:hover {
    background-color: ${(props) => props.theme["gray-100"]};
    border-radius: 4px;
  }
  @media (min-width: 200px) {
    display: flex;
    width: 100px;
    height: 100%;
    margin: 4px;

    svg {
      font-size: 28px;
      color: ${(props) => props.theme["gray-700"]};
    }
    span {
      font-size: 8px;
      font-weight: 600;
    }
  }
  @media (min-width: 250px) {
    display: flex;
    width: 100px;
    height: 100%;
    margin: 4px;

    svg {
      font-size: 28px;
      color: ${(props) => props.theme["gray-700"]};
    }
    span {
      font-size: 8px;
      font-weight: 600;
    }
  }
  @media (min-width: 360px) {
    display: flex;
    width: 100px;

    svg {
      font-size: 36px;
      color: ${(props) => props.theme["gray-700"]};
    }
    span {
      font-size: 11px;
      font-weight: 600;
    }
  }
  @media (min-width: 740px) {
    display: flex;
    width: 110px;

    svg {
      font-size: 42px;
      color: ${(props) => props.theme["gray-700"]};
    }
    span {
      font-size: 14px;
      font-weight: 600;
    }
  }
  @media (min-width: 1024px) {
    display: flex;
    width: 120px;

    svg {
      font-size: 46px;
      color: ${(props) => props.theme["gray-700"]};
    }
    span {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

export const Cv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  a:hover {
    background-color: ${(props) => props.theme["gray-100"]};
    border-radius: 4px;
  }
  @media (min-width: 200px) {
    a > img {
      width: 29px;
    }
    span {
      display: flex;
      font-size: 11px;
      justify-content: center;
      width: 100%;
      margin: 3px 11px;
      font-weight: 600;
    }
  }
  @media (min-width: 360px) {
    a > img {
      width: 36px;
    }
    span {
      display: flex;
      font-size: 11px;
      justify-content: center;
      width: 100%;
      margin: 3px 11px;
      font-weight: 600;
    }
  }
  @media (min-width: 740px) {
    a > img {
      width: 42px;
    }
    span {
      display: flex;
      font-size: 14px;
      justify-content: center;
      width: 100%;
      margin: 3px 11px;
      font-weight: 600;
    }
  }
  @media (min-width: 1024px) {
    a > img {
      width: 46px;
    }
    span {
      display: flex;
      font-size: 16px;
      justify-content: center;
      width: 100%;
      margin: 3px 11px;
      font-weight: 600;
    }
  }
`;
export const Avatar = styled.div`
  display: flex;
  margin-top: 20px;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const AboutMe = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  border-radius: 15px;
  background-color: ${(props) => props.theme["gray-600"]};
  padding: 5px;
  margin-top: 32px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 360px) {
    h3 {
      display: flex;
      width: 100%;
      height: 100%;

      font-size: 32px;
      color: ${(props) => props.theme["gray-100"]};
      margin: 20px auto;
    }
    hr {
      width: 155px;
      margin: 0;
      height: 1px;
    }
  }
`;

export const BoxText = styled.span`
  font-size: 17px;

  font-weight: 600;
  margin: 10px 25px;
  a {
    margin: 5px;
    color: ${(props) => props.theme["blue-200"]};
  }

  @media (min-width: 800px) {
    font-size: 18px;
  }
`;
