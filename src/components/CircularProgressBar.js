import React from "react";
import styled from "styled-components";

const CircularBar = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: ${(props) => `radial-gradient(closest-side, white 79%, transparent 80% 100%),
    conic-gradient(${props.bgColor} ${props.value}%, pink 0)`};
`;

export default function CircularProgressBar({value = 75,bgColor = "hotpink"}) {
  return <CircularBar value={value} bgColor={bgColor}/>;
}
