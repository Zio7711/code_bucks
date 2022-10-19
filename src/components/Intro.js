import Me from "../assets/Images/profile-img.png";
import React from "react";
import { device } from "../config/breakPoints";
import { motion } from "framer-motion";
import styled from "styled-components";

const Box = styled(motion.div)`
  width: 65vw;
  height: 55vh;
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;

  z-index: 1;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  background-repeat: no-repeat;
  background-size: 100% 2px;

  @media ${device.small} {
    background: none;
    flex-direction: column;
    border-right: none;
    border-left: none;

    & > :last-child {
      border-left: 2px solid ${(props) => props.theme.text};
      border-bottom: 2px solid ${(props) => props.theme.text};
      border-right: 2px solid ${(props) => props.theme.text};
    }
    & > :first-child {
      border-left: 2px solid ${(props) => props.theme.body};
      border-top: 2px solid ${(props) => props.theme.body};
      border-right: 2px solid ${(props) => props.theme.body};
    }
  }
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  @media ${device.small} {
    width: 100%;
    height: 50%;
  }

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 120%;
    /* height: auto; */
    height: 195%;
    @media ${device.small} {
      height: 145%;
      object-fit: contain;
    }
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 1.5em;
  padding-right: 0.5em;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5em+ 1vw);
    font-weight: 300;
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I am Zio.</h3>
          <h6>I'm a web developer. I code and develop beautiful websites.</h6>
        </Text>
      </SubBox>

      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="Profile" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
