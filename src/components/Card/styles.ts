import styled from "styled-components";


export const ContainerCard = styled.div`
  display: flex;

  width: 320px;
  height: 550px;
  padding: 10px;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  border: 1px solid black;
  border-radius: 18px;
  background-color: ${(props) => props.theme["gray-400"]};
  &.expanded {
    height: 100%; 
  }
  @media (min-width: 200px){
    width: 100%;
    height: auto;
    margin: 0;
    

  }
 
   @media (min-width: 400px){
    width: 300px;
    height: 550px;

  }
  @media (min-width: 710px){
    width: 320px;


  }
  @media (min-width: 1024px){
    width: 340px;
    height:590px ;
    min-height: 590px;

  }
`;
export const ContainerImage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  border-radius: 22px;
  overflow: hidden;

  @media (max-width: 500px) {
    div > div > img {
      width: 300px;
      height: 180px;
      margin: 0;
      padding: 0;
      border-radius: 12px;
      object-fit: fill;
    }
  }
  @media (min-width: 501px) {
    div > div > img {
      width: 320px;
      height: 220px;
      margin: 0;
      padding: 0;
      border-radius: 12px;
      object-fit: cover;
    }
  }
`;
export const Box = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;

  background-color: ${(props) => props.theme["gray-700"]};
`;
export const ContainerBox = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  padding: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const Title = styled.h3`
  display: flex;

  align-items: center;
  justify-content: left;
  font-size: 28px;
  color: ${(props) => props.theme["gray-900"]};
  margin: 15px auto;
`;

export const ContainerDescription = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 5px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px 12px 0 0;
  background-color: ${(props) => props.theme["gray-300"]};
  color: ${(props) => props.theme["gray-900"]};
`;

export const Description = styled.p`
  position: relative;
  word-break: break-all;
  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: blue;
    cursor: pointer;
  }
  .button {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;


export const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  flex-direction: row;
  align-items: center;
  border-radius: 0 0 12px 12px;
  justify-content: space-around;
  background-color: ${(props) => props.theme["gray-300"]};

  button {
    border-radius: 8px;
    width: 80px;
    color: blue;
    padding: 5px;
    margin-bottom: 10px;
    font-size: 12px;
    background-color: ${(props) => props.theme["gray-500"]};
    a {
      color: ${(props) => props.theme["white"]};
      font-weight: 700;
      text-decoration: none;
    }
  }
  button:hover {
    background-color: ${(props) => props.theme["gray-100"]};
    a {
      color: ${(props) => props.theme["Black"]};
    }
  }
`;
