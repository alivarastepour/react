import { Button, ButtonGroup, Step, StepLabel, Stepper } from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import CallEndOutlinedIcon from "@mui/icons-material/CallEndOutlined";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import React, { useState } from "react";

const Setup = () => {
  const [state, setState] = useState([false, false, false]);
  return (
    <>
      <Stepper orientation="horizontal" variant="elevation" activeStep={-1}>
        <Step completed={state[0]} sx={{ color: state[0] ? "blue" : "gray" }}>
          <StepLabel StepIconComponent={FlagIcon}>
            <div style={{ color: state[0] ? "blue" : "gray" }}>
              dont forget to flag what you need
            </div>
          </StepLabel>
        </Step>
        <Step completed={state[1]} sx={{ color: state[1] ? "blue" : "gray" }}>
          <StepLabel StepIconComponent={SendOutlinedIcon}>
            <div style={{ color: state[1] ? "blue" : "gray" }}>
              and also send them for us
            </div>
          </StepLabel>
        </Step>
        <Step completed={state[2]} sx={{ color: state[1] ? "blue" : "gray" }}>
          <StepLabel StepIconComponent={CallEndOutlinedIcon}>
            <div style={{ color: state[2] ? "blue" : "gray" }}>
              we will call you ASAP
            </div>
          </StepLabel>
        </Step>
      </Stepper>
      <br />
      <ButtonGroup>
        <Button
          variant="contained"
          color="success"
          onClick={() => setState((prev) => [true, prev[1], prev[2]])}
        >
          complete first one
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => setState((prev) => [prev[0], true, prev[2]])}
        >
          complete second one
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => setState((prev) => [prev[0], prev[1], true])}
        >
          complete third one
        </Button>
      </ButtonGroup>

      <br />
      <br />
      <br />

      <ButtonGroup>
        <Button
          variant="contained"
          color="error"
          onClick={() => setState((prev) => [false, prev[1], prev[2]])}
        >
          mark first one as not compelet
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => setState((prev) => [prev[0], false, prev[2]])}
        >
          mark second one as not compelet
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => setState((prev) => [prev[0], prev[1], false])}
        >
          mark third one as not compelet
        </Button>
      </ButtonGroup>
    </>
  );
};
export default Setup;
