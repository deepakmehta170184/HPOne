import React, { useState } from "react";
import PropTypes from "prop-types";
import { alpha, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { ButtonGroup, InputBase } from "@material-ui/core";
import fetchMoviesAction from "../store/actions/fetchMovies";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  search: {
    position: "relative",
    borderRadius: "2px",
    backgroundColor: alpha(theme.palette.primary.main, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.primary.main, 0.25),
    },
    marginRight: theme.spacing(10),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(5),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const { fetchMovies } = fetchMoviesAction();
  const [searchValue, setSearchValue] = useState("");
  const sections = [
    { title: "Action", url: "#" },
    { title: "Adventure", url: "#" },
    { title: "Romance", url: "#" },
    { title: "Sci-Fi", url: "#" },
    { title: "Drama", url: "#" },
    { title: "Comedy", url: "#" },
    { title: "Horror", url: "#" },
    { title: "History", url: "#" },
    { title: "TV Show", url: "#" },
    { title: "Crime", url: "#" },
  ];

  const handleChange = ({ target: { value } }) => {
    setSearchValue(value);
  };

  const handleSubmit = ({ keyCode }) => {
    if (keyCode === 13) {
      fetchMovies(searchValue);
    }
  };

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          ImDb Movies & Shows
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search for movies…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            onChange={handleChange}
            onKeyDown={handleSubmit}
          />
        </div>
        <ButtonGroup orientation="horizontal">
          <Button variant="outlined" size="small">
            Log in
          </Button>
          <Button variant="outlined" size="small">
            Sign up
          </Button>
        </ButtonGroup>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body1"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
