import React, { Fragment } from "react";
import styled from "styled-components";
import { HeaderTitle } from "../GlobalStyle";
import { featuresData } from "../data/FeaturesData";

const FeatureBox = styled.div`
  margin-top:15rem;
  padding: 8rem;
`;

const FeaturesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 1rem;
    justify-content: center;
`;

const CardBody = styled.div`
    min-width: 0;
    max-width: 300px;
    margin:0.2rem;
    background-color: var(--Orange);
    border-radius: 1.5rem;
`;

const FeatureTitle = styled.h1`
    color: var(--Gray);
    font-size: 1.2rem;
    letter-spacing: 2px;
    margin: 10px;
`;
const FeatureLogo = styled.div`
    margin: 10px;
`;

const FeatureParagraph = styled.p`
    color: white;
    font-size: 1.2rem;
    margin:0.2rem;
`;



function Features() {
    return (
        <Fragment>
            <FeatureBox id="Features">
                <FeaturesContainer >
                <HeaderTitle>What Team Project offers you</HeaderTitle>
                {featuresData.map((item) => (
                    <CardBody>
                        <FeatureTitle>{item.name}</FeatureTitle>
                        <FeatureLogo>{item.icon}</FeatureLogo>
                        <FeatureParagraph>{item.description}</FeatureParagraph>
                    </CardBody>
                ))}
            </FeaturesContainer>
            </FeatureBox>
            
        </Fragment>
    );
}

export default Features;
