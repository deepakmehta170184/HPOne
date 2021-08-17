import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
);

const Footer = () => (
  <footer className="footerComponent">
    <Container maxWidth="lg">
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>

      <Copyright />
    </Container>
  </footer>
);

export default Footer;
