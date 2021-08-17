import { Container, Paper, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";

const ActionTabs = ({ router, setOption }) => {
  const [value, setValue] = useState(0);
  const [actionTabsHide, setActionTabsHide] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setOption(newValue);
  };

  return (
    <Paper
      className="actionTabsContainer"
      onMouseEnter={() => setActionTabsHide(false)}
      onMouseLeave={() => setActionTabsHide(true)}
    >
      <div className="overlay" />
      <div
        className={
          actionTabsHide
            ? "tabsContent hideComponent"
            : "tabsContent showComponent"
        }
      >
        <Container>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="inherit"
          >
            <Tab className="tabs" label="Action (45)" />
            <Tab className="tabs" label="Drama (58)" />
            <Tab className="tabs" label="Sci-Fi (98)" />
            <Tab className="tabs" label="Horror  (50)" />
          </Tabs>
        </Container>
      </div>
    </Paper>
  );
};

export default ActionTabs;
