import React from "react";
import { List, withStyles, Box } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ClearIcon from "@material-ui/icons/Clear";
import CircularProgress from "@material-ui/core/CircularProgress";

import styles from "./styles";

const EmployeesLayout = ({
  isLoading,
  classes,
  users,
  handleCreateUser,
  handleInput,
  handleRemove,
  inputValue
}) => {
  return (
    <Box className={classes.root}>
      <form onSubmit={handleCreateUser} className={classes.form}>
        <TextField
          name="first"
          id="standard-basic"
          label="First Name"
          value={inputValue.first}
          required
          onChange={event => handleInput(event)}
        />
        <TextField
          name="last"
          id="standard-basic"
          label="Last Name"
          value={inputValue.last}
          required
          onChange={event => handleInput(event)}
        />
        <Button type="submit" variant="contained" color="primary">
          Add User
        </Button>
      </form>
      {isLoading && <CircularProgress className={classes.progress} />}
      {users.map(({ first_name, last_name, id }) => {
        return (
          <List key={id} component="nav" aria-label="main mailbox folders">
            <ListItem button>
              <ListItemText primary={first_name} />
              <ListItemText primary={last_name} />
              <Button
                onClick={() => handleRemove(id)}
                variant="contained"
                color="primary"
              >
                <ClearIcon />
              </Button>
            </ListItem>
          </List>
        );
      })}
    </Box>
  );
};

export default withStyles(styles)(EmployeesLayout);
