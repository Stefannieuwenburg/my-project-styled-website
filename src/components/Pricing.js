import React, { Fragment } from "react";
import styled from "styled-components";
import { HeaderTitle,Button} from "../GlobalStyle";
import { PriceData } from "../data/PricingData";

const PricingContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 1rem;
    justify-content: space-evenly;
    justify-items: center;
    align-items: center;
    padding:10rem;
    
    
`;
const Card = styled.div`
    min-width: 0;
    max-width: 250px;
    padding: 1.25rem;
    background-color: var(--Orange);
    border-radius: 1.5rem;
    
`;

const PricingHeader = styled.h1`
    font-size: 1.5rem;
    margin-top: 1.2rem;
    color: var(--Gray);
`;
    ;
const PricingParagraph = styled.p`
    font-size: 1.2rem;
    margin-top: 1.2rem;
    color: var(--light);
`;


const CardRating = styled.p`
    font-size: 1.2rem;
    margin-top: 1.2rem;
    color: var(--light);
`;



function Pricing() {
    const handleClick = () => {
        window.location.href = "#Features";
    }
    return (
        <Fragment>
            
            <PricingContainer id="Pricing">
                 <HeaderTitle>Best pricing</HeaderTitle>
                {PriceData.map((item) => (
                    <Card>
                        <PricingHeader>{item.title}</PricingHeader>
                        <PricingParagraph>{item.price}</PricingParagraph>
                        <CardRating>{item.rating}</CardRating>
                        <Button onClick={handleClick}>more info</Button>
                    </Card>
                ))}
            </PricingContainer>
        </Fragment>
    );
}
export default Pricing;
