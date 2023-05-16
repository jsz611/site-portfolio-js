import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 5px;
  padding: 5px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: auto;
    margin: -5px;
    padding: 0;
  }
  div > img {
    width: 30px;
    height: 30px;
    margin: 0;
    padding: 0;
  }
  div > p {
    margin: auto;
    font-size: 8px;
  }
  @media (min-width: 200px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    gap: 4%;
    div{
      width: 40%;
      justify-content: center;
      align-items: center;

      margin: 2px;
    }
    div > img {
      width: 25px;
      height: 25px;
      margin: 5px;
    }
    div > p {
      justify-content: center;
      align-items: center;
      font-size: 10px;
    }
  }
  @media (min-width: 360px) {
    display: flex;
    flex-wrap: nowrap;
    gap: 1px;
    div{
      width: 50px;
      justify-content: center;
      align-items: center;
    
    }
    div > img {
      width: 25px;
      height: 25px;
      margin: 0;
      padding: 0;
    }
    div > p {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 10px;
    }
  }
  @media (min-width: 440px) {
    gap: 3%;
    height: 150px;

    div > img {
      width: 28px;
      height: 28px;
      margin: 0;
      padding: 0;
    }
    div > p {
      justify-content: center;
      align-items: center;
      font-size: 12px;
    }
  }
  @media (min-width: 630px) {
    gap: 5%;
    div > img {
      width: 30px;
      height: 30px;
      margin: 10px auto 5px auto;
      padding: 0;
    }
    div > p {
      justify-content: center;
      align-items: center;
      font-size: 14px;
    }
  }
  @media (min-width: 930px) {
    gap: 8%;
    div > img {
      width: 32px;
      height: 32px;
      margin: 14px auto 5px auto;
      padding: 0;
    }
    div > p {
      justify-content: center;
      align-items: center;
      font-size: 16px;
    }
  }
`;
