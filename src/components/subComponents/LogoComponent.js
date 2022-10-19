import { DarkTheme } from "../Themes";
import { Link } from "react-router-dom";
import React from "react";
import { device } from "../../config/breakPoints";
import styled from "styled-components";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: "Pacifico", cursive;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;

  @media ${device.small} {
    left: 0.5rem;
  }
`;
const LogoComponent = (props) => {
  return <Logo color={props.theme}><Link to='/' style={{'textDecoration':'none'}}>Zio</Link></Logo>;
};

export default LogoComponent;
