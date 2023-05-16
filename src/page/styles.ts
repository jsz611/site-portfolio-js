import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  color: ${(props) => props.theme["gray-700"]};
  background-color: ${(props) => props.theme["gray-400"]};
  
  width: 100%;
  height: 100%;
  gap: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
`;
