import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import React from "react";
import SocialIcons from "../subComponents/SocialIcons";
import styled from "styled-components";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Main = () => {
  return (
    <div>
      <MainContainer>
        <Container>
          <PowerButton />
          <LogoComponent />
          <SocialIcons />
        </Container>
      </MainContainer>
    </div>
  );
};

export default Main;
