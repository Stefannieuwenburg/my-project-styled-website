import React from "react";
import styled from "styled-components";
import img from '../assets/img/teamwork.jpg';



const HeroContainer = styled.div`
/*  */

`;
const HeroSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-image: linear-gradient(
            rgba(0, 0, 0, 0.342),
            rgba(0, 0, 0, 0.342)
        ),
        url(${img});
`;

const HeroTitle = styled.h1`
    color: var(--Orange);
    font-size: 3rem;
    letter-spacing: 2px;
    margin: 10px;
`;

const HeroDescription = styled.p`
    font-size: 2rem;
    margin: 10px;
    color: whitesmoke;
`;

const HeroButton = styled.button`
    padding: 10px 20px;
    margin: 20px;
    background-color: var(--White);
    color: var(--Black);
    font-family: var(--main-font);
    font-size: 0.9rem;
    text-decoration:bold;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 20px;
    transition: 0.6s;
    &:hover {
        background-color: var(--Orange);
        transition: 0.6s;
    }
`;

const HeaderHero = () => {
    return (
        <HeroContainer id="HeaderHero">
            <HeroSection>
                <HeroTitle>Team Project</HeroTitle>
                <HeroDescription>
                    Boost up your team connect to Team Project
                </HeroDescription>
                <HeroButton>Click me for More</HeroButton>
            </HeroSection>
        </HeroContainer>
    );
};

export default HeaderHero;
