import React from "react";
import AccessAlarmTwoToneIcon from "@mui/icons-material/AccessAlarmTwoTone";
import AddShoppingCartTwoToneIcon from "@mui/icons-material/AddShoppingCartTwoTone";
import ArchitectureTwoToneIcon from "@mui/icons-material/ArchitectureTwoTone";
import AttractionsTwoToneIcon from "@mui/icons-material/AttractionsTwoTone";
import MoreVertTwoToneIcon from "@mui/icons-material/MoreVertTwoTone";
import { SpeedDial, SpeedDialAction } from "@mui/material";

const actions = [
  { icon: <AccessAlarmTwoToneIcon />, name: "add reminder" },
  { icon: <AddShoppingCartTwoToneIcon />, name: "add to cart" },
  { icon: <ArchitectureTwoToneIcon />, name: "edit" },
  { icon: <AttractionsTwoToneIcon />, name: "add game" },
];

const Setup = () => {
  return (
    <>
      <SpeedDial
        icon={<MoreVertTwoToneIcon />}
        ariaLabel="SpeedDial basic example"
      >
        {actions.map((a) => {
          return (
            <SpeedDialAction
              key={a.name}
              icon={a.icon}
              tooltipTitle={a.name}
              tooltipPlacement="right-start"
            />
          );
        })}
      </SpeedDial>
    </>
  );
};
export default Setup;
