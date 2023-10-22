import React, { useState } from "react";
import { styled } from "styled-components";

const Progress = styled.div`
  display: flex;
  background: #ddd;
  width: 50%;
`;
const ProgressBar = styled.div`
  width: ${props => props.progress}%;
  height: 10px;

`;

export default function LinearProgressBar({style}) {
  const [fillColor, setFillColor] = useState(10);
  return (
      <Progress onClick={() => setFillColor((prev) => prev + 10)}>
        <ProgressBar progress = {fillColor} style={{...style}}/>
      </Progress>
  );
}
