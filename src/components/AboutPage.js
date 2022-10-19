import styled, { ThemeProvider, keyframes } from "styled-components";

import BigTitle from "./subComponents/BigTitle";
import { DarkTheme } from "./Themes";
import LogoComponent from "./subComponents/LogoComponent";
import ParticleComponent from "./subComponents/ParticleComponent";
import PowerButton from "./subComponents/PowerButton";
import React from "react";
import SocialIcons from "./subComponents/SocialIcons";
import astronaut from "../assets/Images/spaceman.png";
import { device } from "../config/breakPoints";
import { motion } from "framer-motion";

const float = keyframes`
0% {
  transform: translateY(-10px)
}

50% {
  transform: translateY(15px) translateX(15px)
}

100% {
  transform: translateY(-10px)
}

`;
const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;

  img {
    width: 100%;
    height: auto;
  }
`;

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  /* height: 100vh; */
  height: ${window.innerHeight + "px"};

  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;

  /* z-index: 3; */
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  /* position: absolute;
  left: calc(5rem + 5vw); */

  /* top: 10rem; */
  @media ${device.small} {
    left: calc(3rem + 5vw);
    top: 7rem;
    height: calc(10rem + 70vw);
  }

  font-family: "Ubutntu Mono", monospace;
  font-style: italic;
`;

const aboutPageVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
    },
  },
};

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box
        variants={aboutPageVariants}
        initial="hidden"
        animate="show"
        exit={{
          opacity: 0,
          transition: { duration: 0.5 },
        }}
      >
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>

        <Main>
          I'm a front-end developer located in Vancouver. I love coding and building beautiful websites.
          <br />
          <br />
          I'm interested in the whole frontend stack Like trying new things and
          building great projects. I love to write blogs as well.
          <br />
          <br />
          I also have two years experience in the field of field surveying. I love to try out new things and new skills.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
