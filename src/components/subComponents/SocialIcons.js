import { Blog, Email, Github, LinkedIn } from "../AllSvgs";

import { DarkTheme } from "../Themes";
import { NavLink } from "react-router-dom";
import React from "react";
import { device } from "../../config/breakPoints";
import { motion } from "framer-motion";
import styled from "styled-components";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;

  bottom: 0;
  left: 2rem;
  z-index: 3;

  @media ${device.small} {
    left: 1rem;
    transform: scale(0.9);
    transform-origin: bottom;
  }

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 5rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.0 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          to={{ pathname: "https://github.com/zio7711" }}
          target="_blank"
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </motion.div>

      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          to={{ pathname: "https://zio7711.gitee.io/" }}
          target="_blank"
        >
          <Blog
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </motion.div>

      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          to={{ pathname: "mailto:zi.ao.tan@outlook.com" }}
          target="_blank"
        >
          <Email
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </motion.div>

      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          to={{ pathname: "www.linkedin.com/in/zio-tan" }}
          target="_blank"
        >
          <LinkedIn
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </motion.div>

      <Line
        color={props.theme}
        initial={{ height: 0 }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
