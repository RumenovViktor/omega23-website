import styled from 'styled-components';

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

const HomeHeader = styled.h1`
    font-size: 38px;
`;

const SpaceContainer = styled.div`
    padding: 20px;
`;

const ContactUsButton = styled.button`
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 20px;
    background-color: white;
    border: none;
    font-size: .7em;
    cursor: pointer;
`;

const Home = ({history}) => {
    return <>
        <Container>
            <HomeHeader>Level up your business</HomeHeader>
            <span>Get your dream app built for both iOS and Android.</span>
            <SpaceContainer>
                <ContactUsButton onClick={() => history.push('/contact-us')}>Contact us</ContactUsButton>
            </SpaceContainer>
        </Container>
    </>
}

export default Home;