import React, { Fragment } from "react";
import GlobalStyle from "./GlobalStyle";
// import { Button, Paragraph } from "./GlobalStyle";
// import styled from "styled-components";
import NavHeader from "./components/NavHeader";
import HeaderHero from "./components/HeaderHero"
import Features from './components/Features'
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Team from "./components/TeamCard";
// import logo from "./logo.svg";


function App() {
    return (
        <Fragment>
            <GlobalStyle />
            <NavHeader />
            <HeaderHero />
            <Features />
            <Team />
            <Pricing />
            <Footer />
        </Fragment>
    );
}

export default App;
