import React from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const ContactUsHeader = styled.h1`
    font-size: 38px;
`;

const AddressSpan = styled.span`
    font-size: 20px;
`;

const SpaceContainer = styled.div`
    padding-top: ${props => props.space ? props.space : '10'}px;
    padding-bottom: ${props => props.space ? props.space : '10'}px;
`;

const ContactUs = () => {
    return <>
        <Container>
            <SpaceContainer space={2}>
                <ContactUsHeader>Contact us at these emails:</ContactUsHeader>
            </SpaceContainer>
            <SpaceContainer space={2}>
                <AddressSpan>office.omega23@gmail.com / contact@mailgen.org</AddressSpan>
            </SpaceContainer>
            <SpaceContainer space={4}>
                <ContactUsHeader>Our address:</ContactUsHeader>
            </SpaceContainer>
            <SpaceContainer space={2}>
                <AddressSpan>Sofia, Bulgaria, Georgi Benkovski 14 str.</AddressSpan>
            </SpaceContainer>
        </Container>
    </>
}

export default ContactUs;