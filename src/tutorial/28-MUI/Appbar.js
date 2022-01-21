import {
  AppBar,
  Badge,
  Button,
  ButtonGroup,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import SettingsIcon from "@mui/icons-material/Settings";
const Setup = () => {
  return (
    <>
      <AppBar color="inherit">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <ButtonGroup>
            <Button variant="text" color="inherit">
              homepage
            </Button>
            <Button variant="text" color="inherit">
              login
            </Button>
            <Button variant="text" color="inherit">
              signup
            </Button>
          </ButtonGroup>
          <TextField
            variant="outlined"
            size="small"
            sx={{
              background: "white",
              borderRadius: 3,
              outline: "none",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchTwoToneIcon />
                </InputAdornment>
              ),
            }}
          />
          <div>
            <Badge
              variant="dot"
              badgeContent={2}
              color="secondary"
              sx={{ marginRight: 1 }}
            >
              <IconButton>
                <SettingsIcon />
              </IconButton>
            </Badge>
            <Badge variant="standard" color="warning" badgeContent={20}>
              <IconButton>
                <SendIcon />
              </IconButton>
            </Badge>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Setup;
