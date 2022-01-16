import React, { useState } from "react";
import { Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const Setup = () => {
  const [state, setState] = useState(0);
  return (
    <>
      <p>salam</p>
      <div>
        <Badge
          badgeContent={state}
          max={10}
          color="primary"
          invisible={state === 0}
          variant="dot"
        >
          <MailIcon />
        </Badge>
        <button className="btn" onClick={() => setState(state + 1)}>
          add
        </button>
      </div>
    </>
  );
};
export default Setup;
