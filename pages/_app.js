import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { withRouter } from "next/router";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import Header from "../component/Header";
import "../styles/main.scss";

const MyApp = ({ Component, pageProps, router }) => {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>ImDb Movies & Shows</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component router={router} {...pageProps} />
      </ThemeProvider>
    </div>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default withRouter(MyApp);
