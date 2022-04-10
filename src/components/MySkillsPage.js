import { Design, Develope } from "./AllSvgs";
import styled, { ThemeProvider } from "styled-components";

import BigTitle from "./subComponents/BigTitle";
import { LightTheme } from "./Themes";
import LogoComponent from "./subComponents/LogoComponent";
import ParticleComponent from "./subComponents/ParticleComponent";
import PowerButton from "./subComponents/PowerButton";
import React from "react";
import SocialIcons from "./subComponents/SocialIcons";
import { device } from "../config/breakPoints";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  /* height: 100vh; */
  height: ${window.innerHeight + "px"};
  position: relative;
  display: flex;

  @media ${device.small} {
    height: fit-content;
    flex-direction: column;
    padding: 5rem 0;
  }

  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  @media ${device.small} {
    margin-top: 2rem;
    width: 50vw;
    height: 15rem;
  }

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem0;

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 2rem;
  }

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
`;

const skillsPageVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
    },
  },
};

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Box
        variants={skillsPageVariants}
        initial="hidden"
        animate="show"
        exit={{
          opacity: 0,
          transition: { duration: 0.5 },
        }}
      >
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />

        <Main>
          <Title>
            <Design width={40} height={40} />
            Front End
          </Title>

          <Description>React HTML Css</Description>
          <Description>
            <strong>I like to Design</strong>
            <ul>
              <li>Web Design</li>

              <li>Mobile Design</li>
            </ul>
          </Description>

          <Description>
            <strong>Tools</strong>
            <ul>
              <li>React</li>

              <li>Express</li>
            </ul>
          </Description>
        </Main>

        <Main>
          <Title>
            <Develope width={40} height={40} />
            Back End
          </Title>
          <Description>React HTML Css</Description>

          <Description>
            <strong>Skills</strong>
            <ul>
              <li>Web Design</li>

              <li>Mobile Design</li>
            </ul>
          </Description>

          <Description>
            <strong>Tools</strong>
            <ul>
              <li>React</li>

              <li>Express</li>
            </ul>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
