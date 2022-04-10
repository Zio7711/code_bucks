import { NavLink, useLocation } from "react-router-dom";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import Intro from "./Intro";
import LogoComponent from "./subComponents/LogoComponent";
import PowerButton from "./subComponents/PowerButton";
import SocialIcons from "./subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";
import { device } from "../config/breakPoints";
import { motion } from "framer-motion";

const windowHeight = window.innerHeight;
//main screen component
const MainContainer = styled(motion.div)`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: ${window.innerHeight + "px"};
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

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
  @media ${device.small} {
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  }
`;

const Blog = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;

const Work = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};

  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);

  text-decoration: none;
  z-index: 1;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const About = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;

const Skills = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const rotate = keyframes`
from{
  transform:rotate(0deg)

}

to {
  transform:rotate(360deg)
}
`;

const rotateSmall = keyframes`
from{
  transform:rotate(0deg) scale(0.8)

}

to {
  transform:rotate(360deg) scale(0.8)
}
`;

const Center = styled.button`
  position: absolute;
  color: ${(props) => props.theme.text};
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};

  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  @media ${device.small} {
    top: ${(props) => (props.click ? "85%" : "50%")};
    left: ${(props) => (props.click ? "85%" : "50%")};
  }

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;

    @media ${device.small} {
      animation: ${rotateSmall} infinite 1.5s linear;
    }
  }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;

  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;

  @media ${device.small} {
    right: 0;
    bottom: 0;
    left: 0;
    width: ${(props) => (props.click ? "100%" : "0%")};
    height: ${(props) => (props.click ? "50%" : "0%")};
  }
`;

const mainContainerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const Main = () => {
  const [click, setClick] = useState(false);
  const [movingDirection, setMovingDirection] = useState({});

  const handleClick = (e) => {
    setClick(!click);
  };

  const handleLinkClick = (e) => {
    if (e.target.id === "blog") setMovingDirection({ x: "-100vw" });
    if (e.target.id === "about" || e.target.id === "skills")
      setMovingDirection({ y: "-100vh" });
    if (e.target.id === "work") setMovingDirection({ x: "100vw" });
  };

  return (
    <div>
      <MainContainer
        variants={mainContainerVariants}
        initial="initial"
        animate="animate"
        exit={{
          ...movingDirection,
          transition: {
            duration: 1,
            ease: "easeOut",
          },
        }}
      >
        <DarkDiv click={click ? true : undefined} />
        <Container>
          <PowerButton />
          <LogoComponent theme={click ? "dark" : "light"} />
          <SocialIcons theme={click ? "dark" : "light"} />

          <Center click={click ? true : undefined}>
            <YinYang
              onClick={() => handleClick()}
              width={click ? 120 : 200}
              height={click ? 120 : 200}
              fill="currentColor"
            />
            <span>click here</span>
          </Center>

          <Contact
            to={{ pathname: "mailto:zi.ao.tan@outlook.com" }}
            target="_blank"
          >
            <motion.h2
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Say Hi...
            </motion.h2>
          </Contact>

          <Blog to="/blog">
            <motion.h2
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleLinkClick}
              id="blog"
            >
              Blog
            </motion.h2>
          </Blog>

          <Work to="/work" click={click ? true : undefined}>
            <motion.h2
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleLinkClick}
              id="work"
            >
              Work
            </motion.h2>
          </Work>

          <BottomBar>
            <About to="/about" click={click ? true : undefined}>
              <motion.h2
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleLinkClick}
                id="about"
              >
                About.
              </motion.h2>
            </About>

            <Skills to="/skills">
              <motion.h2
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleLinkClick}
                id="skills"
              >
                My Skills.
              </motion.h2>
            </Skills>
          </BottomBar>
        </Container>
        {click && <Intro />}
      </MainContainer>
    </div>
  );
};

export default Main;
