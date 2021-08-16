import { Container, Paper, Tab, Tabs } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(/assets/images/HeroBackground.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    flexGrow: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  tabs: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(4),
    "&:hover": {
      opacity: 1,
      backgroundColor: "cadetblue",
      transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    },
  },
}));

export default function ActionTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.mainFeaturedPost}>
      <div className={classes.overlay} />
      <Container>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="inherit"
        >
          <Tab className={classes.tabs} label="Action (45)" />
          <Tab className={classes.tabs} label="Drama (58)" />
          <Tab className={classes.tabs} label="Sci-Fi (98)" />
          <Tab className={classes.tabs} label="Horror  (50)" />
        </Tabs>
      </Container>
    </Paper>
  );
}
