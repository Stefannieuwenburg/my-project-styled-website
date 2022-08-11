import React, { Fragment } from "react";
import styled from "styled-components";
import ScrumTeam from '../assets/img/Team.jpg';
import ProjectTeam from "../assets/img/teamwork.jpg";
import DeveloperTeam from "../assets/img/DeveloperTeam.jpg";
const TeamContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 1rem;
    
`;
const TeamCard = styled.div`
    border: 2px solid #e7e7e7;
    border-radius: 1.2rem;
    padding: 0.5rem;
`;
const CardImage = styled.img`
    width: 100%;
    
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
            <TeamTitle>meet your team</TeamTitle>
            <TeamContainer>
                <TeamCard>
                    <CardImage src={ScrumTeam}></CardImage>
                    <TeamText>scrum planning</TeamText>
                </TeamCard>
                <TeamCard>
                    <CardImage src={DeveloperTeam}></CardImage>
                    <TeamText>Developer Team </TeamText>
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
