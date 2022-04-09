import LogoComponent from "./subComponents/LogoComponent";
import PowerButton from "./subComponents/PowerButton";
import React from "react";
import img from "../assets/Images/patrick-tomasso.jpg";
import styled from "styled-components";

const MainContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;
const BlogPage = () => {
  return (
    <MainContainer>
      <Container>
        <LogoComponent />
        <PowerButton />
      </Container>
    </MainContainer>
  );
};

export default BlogPage;
