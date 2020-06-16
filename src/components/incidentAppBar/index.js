import React, { memo } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'

const IncidentAppBar = memo(({ classes, title, children }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography className={classes.grow} variant="h5" color="inherit" >
            {title}
          </Typography>
          {children}
        </Toolbar>
      </AppBar>
    </div>
  );
})

IncidentAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  children: PropTypes.node
};

export default withStyles(styles)(IncidentAppBar);