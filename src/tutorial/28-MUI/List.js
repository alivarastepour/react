import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
} from "@mui/material";
const Setup = () => {
  return (
    <>
      <List>
        <ListItem selected>
          <ListItemIcon>
            <Avatar src="../../assets/default-image.jpeg" />
          </ListItemIcon>
          <ListItemText secondary="salam">Ali Varaste Pour</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Avatar src="../../assets/default-image.jpeg" />
          </ListItemIcon>{" "}
          <ListItemText secondary="wtF">Mamad golpoor</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Avatar src="../../assets/default-image.jpeg" />
          </ListItemIcon>
          <ListItemText secondary="hello">reza pare zade</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Avatar src="../../assets/default-image.jpeg" />
          </ListItemIcon>
          <ListItemText secondary="bye">ishi guru</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Avatar src="../../assets/default-image.jpeg" />
          </ListItemIcon>
          <ListItemText secondary="hello wrold">tobi maguire</ListItemText>
        </ListItem>
      </List>
    </>
  );
};
export default Setup;
