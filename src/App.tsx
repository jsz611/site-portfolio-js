import React from "react";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Home } from "../src/page";
import AboutMe from "./page/aboutMe";
import ContactMe from "./page/contactMe";
import Portfolio from "./page/portfolio";
import { Nav } from "./components/Header";
import { Footer } from "./components/Footer";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contactme" element={<ContactMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}
