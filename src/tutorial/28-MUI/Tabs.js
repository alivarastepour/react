import { Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PhoneIcon from "@mui/icons-material/Phone";
import React, { useState } from "react";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const Setup = () => {
  const [value, setValue] = useState();
  const handle = (e, v) => {
    setValue(v);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <>
      <Box>
        <Box sx={{ borderColor: "divider", borderBottom: 1 }}>
          <Tabs
            onChange={handle}
            value={value}
            aria-label="basic tabs example"
            textColor="secondary"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            // orientation="vertical"
            sx={{ width: 600 }}
          >
            <Tab label="hello world" {...a11yProps(0)} />
            <Tab label="variables" {...a11yProps(1)} />
            <Tab label="conditions" {...a11yProps(2)} />
            <Tab
              icon={<PhoneIcon />}
              iconPosition="start"
              label="conditions"
              {...a11yProps(3)}
            />
            <Tab label="conditions" {...a11yProps(4)} />
            <Tab label="conditions" {...a11yProps(5)} />
            <Tab label="conditions" {...a11yProps(6)} />
            <Tab label="conditions" {...a11yProps(7)} />
            <Tab label="conditions" {...a11yProps(8)} />
            <Tab label="conditions" {...a11yProps(9)} />
            <Tab label="conditions" {...a11yProps(10)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          hello world
        </TabPanel>
        <TabPanel value={value} index={1}>
          variables are good
        </TabPanel>
        <TabPanel value={value} index={2}>
          if else switch
        </TabPanel>
      </Box>
    </>
  );
};
export default Setup;
