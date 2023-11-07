import React, { Fragment } from "react";
import styled from "styled-components";
import ScrumTeam from '../assets/img/Team.jpg';
import ProjectTeam from "../assets/img/teamwork.jpg";

const TeamContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 1rem;
    justify-content:center;
    padding:8rem;
`;
const TeamCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #e7e7e7;
    border-radius: 1.2rem;
    padding: 2rem;
    
`;
const CardImage = styled.img`
    width: 75%;
    
    
`;
const TeamTitle = styled.h1`
    font-size: 3.25rem;
    font-weight: bold;
    margin: 1.2rem;
    text-align: center;
`;
const TeamText = styled.p`
    margin: 0.2rem;
    color: #6c757d;
    text-align: center;
    font-size: 1.50rem;
    font-weight: bold;
`;



const Team = () => {
    return (
        <Fragment>
            <TeamContainer>
                 <TeamTitle>meet your team</TeamTitle>
                <TeamCard>
                    <CardImage src={ScrumTeam}></CardImage>
                    <TeamText>scrum planning</TeamText>
                </TeamCard>
                <TeamCard>
                    <CardImage src={ProjectTeam}></CardImage>
                    <TeamText>Project Team</TeamText>
                </TeamCard>
            </TeamContainer>
        </Fragment>
    );
};
export default Team;
