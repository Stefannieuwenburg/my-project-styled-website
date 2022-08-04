import React, { Fragment } from "react";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import logo from "./logo.svg";


const Button = styled.button`
    a {
        text-decoration: none;
        color: var(--light);
    }
    background: var(--dark);
    color: var(--light);
    font-size: 1em;
    margin: 1em;
    padding: 0.6rem 1.3rem;
    border: 3px solid green;
    border-radius: 20px;
    text-decoration: none;
`;

function App() {
    return (
        <Fragment>
            <GlobalStyle />
            <Wrapper>
                <Nav />
                <Footer/>
            </Wrapper>
            <Button>hallo</Button>
        </Fragment>
    );
}

export default App;
