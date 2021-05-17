import { Box, withStyles } from "@material-ui/core";

import styles from "./styles";

const HomeLayout = ({ classes }) => {
  return <Box className={classes.title}>Hello</Box>;
};

export default withStyles(styles)(HomeLayout);
