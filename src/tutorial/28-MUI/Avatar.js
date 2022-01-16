import React from "react";
import { Avatar } from "@mui/material";
import { AvatarGroup } from "@mui/material";

const Setup = () => {
  return (
    <>
      <div>salam</div>
      <AvatarGroup total={20}>
        <Avatar src="../../assets/default-image.jpeg" />
        <Avatar src="../../assets/default-image.jpeg" />
        <Avatar variant="circular" src="../../assets/default-image.jpeg" />
        <Avatar sx={{ background: "red" }}>SM</Avatar>
      </AvatarGroup>
    </>
  );
};
export default Setup;
