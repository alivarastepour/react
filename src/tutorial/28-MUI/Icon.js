import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Badge } from "@mui/material";
import { Button } from "@mui/material";
const Setup = () => {
  const [state, setState] = useState(0);
  const [state1, setState1] = useState(12);
  return (
    <>
      <div>
        <Badge
          max={100}
          variant="standard"
          badgeContent={state}
          showZero
          color="error"
        >
          <SettingsIcon />
        </Badge>
        <Button onClick={() => setState(state + 1)}>add</Button>
      </div>
      <div>
        <Badge max={20} showZero color="primary" badgeContent={state1}>
          <TelegramIcon />
        </Badge>
        <Button onClick={() => setState1(state1 + 1)}>add</Button>
      </div>
    </>
  );
};
export default Setup;
