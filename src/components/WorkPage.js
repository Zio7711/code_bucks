import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";

import BigTitle from "./subComponents/BigTitle";
import Card from "./subComponents/Card";
import { DarkTheme } from "./Themes";
import LogoComponent from "./subComponents/LogoComponent";
import PowerButton from "./subComponents/PowerButton";
import SocialIcons from "./subComponents/SocialIcons";
import { Work } from "../data/WorkData";
import { YinYang } from "./AllSvgs";
import { device } from "../config/breakPoints";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  height: 400vh;
  position: relative;
  /* overflow: hidden; */
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;

  @media ${device.small} {
    top: calc(18vh + 6rem);
    left: calc(8vw + 3rem);
  }
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const workPageVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
    },
  },
};

const WorkPage = () => {
  const ref = useRef(null);
  const yingyangRef = useRef(null);

  useEffect(() => {
    let element = ref.current;
    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      yingyangRef.current.style.transform =
        `rotate(` + window.pageYOffset + "deg)";
    };
    window.addEventListener("scroll", rotate);
    return () => window.removeEventListener("scroll", rotate);
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box
        variants={workPageVariants}
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
        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((d) => {
            return <Card key={d.id} data={d} />;
          })}
        </Main>
        <Rotate ref={yingyangRef}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>
        <BigTitle text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
