import React from "react";
import * as S from "./styles";
export const IconsTecnologies = () => {
  return (
    <S.Container>
       <div>
        <img
          src="../../assets/images/react-icon.svg"
          alt="React"
          title="React"
        />
        <p>React</p>
      </div>

      <div>
        <img
          src="../../assets/images/js-icon.svg"
          alt="JavaScript"
          title="JavaScript"
        />
        <p>JavaScript</p>
      </div>

      <div>
        <img src="../../assets/images/html-icon.svg" alt="Html" title="Html" />
        <p>Html</p>
      </div>

      <div>
        <img src="../../assets/images/css-icon.svg" alt="Css" title="Css" />
        <p>Css</p>
      </div>
      <div>
        <img src="../../assets/images/node-icon.svg" alt="Node" title="Node" />
        <p>Node</p>
      </div>

      <div>
        <img
          src="../../assets/images/typescript-icon.svg"
          alt="Typescript"
          title="Typescript"
        />
        <p>Typescript</p>
      </div> 
    </S.Container>
  );
};
