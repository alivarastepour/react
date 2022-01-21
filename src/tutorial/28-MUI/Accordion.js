import { ExpandMoreRounded } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React, { useState } from "react";

const Setup = () => {
  const [state, setState] = useState(1);
  return (
    <>
      <Accordion
        expanded={state === 1}
        onChange={() =>
          setState((prev) => {
            return prev === 1 ? 0 : 1;
          })
        }
      >
        <AccordionSummary expandIcon={<ExpandMoreRounded />}>
          <div>part1</div>
        </AccordionSummary>
        <AccordionDetails>
          <p>hi im part1</p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={state === 2}
        onChange={() =>
          setState((prev) => {
            return prev === 2 ? 0 : 2;
          })
        }
      >
        <AccordionSummary expandIcon={<ExpandMoreRounded />}>
          <div>part2</div>
        </AccordionSummary>
        <AccordionDetails>
          <p>hi im part2</p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={state === 3}
        onChange={() =>
          setState((prev) => {
            return prev === 3 ? 0 : 3;
          })
        }
      >
        <AccordionSummary expandIcon={<ExpandMoreRounded />}>
          <div>part3</div>
        </AccordionSummary>
        <AccordionDetails>
          <p>hi im part3</p>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
export default Setup;
