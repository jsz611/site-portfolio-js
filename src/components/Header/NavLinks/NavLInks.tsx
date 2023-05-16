import React from "react";
import * as S from "./styles";
import { Link } from "react-scroll";

interface NavLinksProps {
  onClose: () => void;
}

const NavLinks = ({ onClose }: NavLinksProps) => {
  return (
    <S.ContainerLinks>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={onClose}
      >
        <li>Sobre</li>
      </Link>
      <Link
        activeClass="active"
        to="portfolio"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={onClose}
      >
        <li>Projetos</li>
      </Link>
      <Link
        activeClass="active"
        to="contactMe"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={onClose}
      >
        <li>Fale Comigo</li>
      </Link>
    </S.ContainerLinks>
  );
};

export default NavLinks;
