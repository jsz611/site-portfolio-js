import React from "react";
import MobileNavigation from "./MobileNavigation/MobileNavigation";

import * as S from "./styles";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks/NavLInks";

const isBrowser = typeof window !== "undefined";

export const Nav = () => {
  let screenSize = 0;
  if (isBrowser) screenSize = window.screen.width;

  return (
    <S.ContainerNav>
      <S.Title>
        <Link to={"/"}>
          <h2>Josiel Souza</h2>
        </Link>
      </S.Title>

      {screenSize < 668 ? (
        <MobileNavigation />
      ) : (
        <NavLinks onClose={() => {}} />
      )}
    </S.ContainerNav>
  );
};
