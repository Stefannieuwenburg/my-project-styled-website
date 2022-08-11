import React, { Fragment } from "react";
import styled from "styled-components";
import { HeaderTitle } from "../GlobalStyle";
import {footerSocialData,footerData} from "../data/FooterData"

const FooterContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 1rem;
    margin-top: 1rem;
    margin: 1.2rem;
    background-color: var(--Orange);
    border-radius: 1.5rem;
`;
const CardBody1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.2rem;
   
`;
const CardBody2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.2rem;
    
`;

const FooterIcon = styled.div`
    margin: 0.2rem;
`;
const FooterName = styled.p`
    font-size: 1,8rem;
    color: var(--DarkSlateGray);
`;
const FooterTitle = styled.h1`
    color: var(--Gray);
    font-size: 1.5rem;
    letter-spacing: 0.3rem;
`;
const FooterLinks = styled.p`
    margin: 0.2rem;
`;

function Footer() {
    return (
        <Fragment>
            <HeaderTitle>Contact team project</HeaderTitle>
            <FooterContainer id="Contact">
                {footerSocialData.map((item) => (
                    <CardBody1>
                        <FooterName>{item.name}</FooterName>
                        <FooterIcon>{item.icon}</FooterIcon>
                    </CardBody1>
                ))}
                {footerData.map((item) => (
                    <CardBody2>
                        <FooterTitle>{item.title}</FooterTitle>
                        <FooterLinks>{item.links}</FooterLinks>
                    </CardBody2>
                ))}
            </FooterContainer>
        </Fragment>
    );
}

export default Footer;
