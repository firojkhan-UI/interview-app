import React, { useState } from "react";
import { styled } from "styled-components";

const WrapperAccordion = styled.div`
  display: flex;
  justify-content: center;
`;
const AccordionContentWrapper = styled.div`
  width: 400px;
  background: red;
`;

const AccordionDesc = styled.div`
  padding: 1rem;
`
const AccordionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  background: green;
  padding: 10px;
  cursor: pointer;
`;

const accordionData = {
  title: "Section1",
  content:
    "If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.",
  title: "Section1",
};

const Accordion = () => {
  const { title, content } = accordionData;
  const [isShow, setIsShow] = useState(false);
  return (
    <WrapperAccordion>
      <AccordionContentWrapper>
        <AccordionTitle onClick={() => setIsShow((prev) => !prev)} style={{}}>
          <div style={{ fontSize: "1.5rem" }}>{title}</div>
          <div>{isShow ? "+" : "-"}</div>
        </AccordionTitle>
        {isShow && <AccordionDesc>{content}</AccordionDesc>}
      </AccordionContentWrapper>
    </WrapperAccordion>
  );
};
export default Accordion;
