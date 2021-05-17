import React from "react";
import { AppBar, withStyles } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import ROUTES from "../../../../routes/RoutesName";
import styles from "./styles";

const HeaderLayout = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.menu}>
          <Link to={ROUTES.HOME_IN_PAGE} className={classes.menu__link}>
            <Typography>Home</Typography>
          </Link>
          <Link to={ROUTES.EMPLOYEES_IN_PAGE} className={classes.menu__link}>
            <Typography>Employees</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(HeaderLayout);
