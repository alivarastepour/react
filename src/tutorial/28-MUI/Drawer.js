import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  SwipeableDrawer,
} from "@mui/material";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
const Setup = () => {
  const [state, setState] = useState(false);
  const [o, v] = useState(1);
  const [state1, setState1] = useState(false);
  const [o1, v1] = useState(1);
  return (
    <>
      <Drawer open={state} onClose={() => setState(false)} anchor="right">
        <List sx={{ paddingRigth: 6, paddingTop: 5 }}>
          <ListItemButton
            sx={{ width: 300 }}
            onClick={() => v(1)}
            selected={o === 1}
          >
            <HomeIcon />
            <ListItem sx={{ fontSize: 25 }}>home</ListItem>
          </ListItemButton>
          <ListItemButton
            sx={{ width: 300 }}
            onClick={() => v(2)}
            selected={o === 2}
          >
            <AccountCircleIcon />
            <ListItem sx={{ fontSize: 25 }}>profile</ListItem>
          </ListItemButton>
          <ListItemButton
            sx={{ width: 300 }}
            onClick={() => v(3)}
            selected={o === 3}
          >
            <LogoutIcon />
            <ListItem sx={{ fontSize: 25 }}>logout</ListItem>
          </ListItemButton>
        </List>
      </Drawer>
      <Button
        variant="contained"
        color="success"
        onClick={() => setState(true)}
      >
        open right
      </Button>
    </>
  );
};
export default Setup;
