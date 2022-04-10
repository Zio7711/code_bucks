import styled, { keyframes } from "styled-components";

import React from "react";

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  /* height: 100vh; */
  height: ${window.innerHeight + "px"};
  background-color: black;
`;

const BounceAnimation = keyframes`
  0% { 
    margin-bottom: 0; 
  }

  50% { 
    margin-bottom: 1rem;
  }

  100% { 
    margin-bottom: 0;
  }
`;

const Dot = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.25rem;
  /*Animation*/
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <h3>Loading</h3>
      <Dot />
      <Dot />
      <Dot />
    </LoadingWrapper>
  );
};

export default Loading;
