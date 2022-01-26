import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import AddAlarmIcon from "@mui/icons-material/AddAlarm";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import React, { useState } from "react";
import { Box } from "@mui/system";

const A = () => {
  return <>im ali</>;
};

const B = () => {
  return <>im reza</>;
};

const Setup = () => {
  const [state, setState] = useState(0);
  return (
    <>
      <Box sx={{ width: 400 }}>
        <BottomNavigation showLabels onChange={(e, v) => setState(v)}>
          <BottomNavigationAction
            value={state}
            label="accessibility"
            icon={<AccessibilityIcon />}
          />
          <BottomNavigationAction label="alarm" icon={<AddAlarmIcon />} />
          <BottomNavigationAction label="call" icon={<AddIcCallIcon />} />
        </BottomNavigation>
      </Box>

      <div>{state}</div>
    </>
  );
};
export default Setup;
