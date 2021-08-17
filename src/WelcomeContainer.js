import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default function WelcomeContainer() {
  return (
    <Paper className="mainContainer">
      <div className="overlay" />
      <Grid container>
        <Grid item md={6}>
          <div className="containerContent">
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              Welcome To ImDb Movies & Shows
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Search for you favourite movies
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
