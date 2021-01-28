import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 0,
  },
  title: {
    flexGrow: 2,
  },
}));

const Navbar: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Discovery Page
          </Typography>
          <Button color="inherit">Github</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar