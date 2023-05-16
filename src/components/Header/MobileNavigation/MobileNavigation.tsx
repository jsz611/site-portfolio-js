import React from "react";
import * as S from "./styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import NavLinks from "../NavLinks/NavLInks";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLinkClick = () => {
    setOpen(false);
    return;
  };

  const icon = open ? (
    <CloseIcon onClick={handleClose} />
  ) : (
    <MenuIcon onClick={handleOpen} />
  );

  return (
    <S.ContainerMobile>
      <S.BoxIcon>{icon}</S.BoxIcon>
      <S.BoxLinks>
        {open && <NavLinks {...{ onClose: handleLinkClick }} />}
      </S.BoxLinks>
    </S.ContainerMobile>
  );
};

export default MobileNavigation;
