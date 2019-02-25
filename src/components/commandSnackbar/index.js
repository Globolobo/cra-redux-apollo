import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import styles from './styles'

class CommandSnackbar extends React.Component {
 
  handleClose = (close) => (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    close()
  };

  render() {
    const { classes, open, message, onClose } = this.props;

    return (
      <div>
        <Snackbar
          {...{open}}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          autoHideDuration={3000}
          onClose={this.handleClose(onClose)}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{message}</span>}
          action={
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose(onClose)}
            >
              <CloseIcon />
            </IconButton>
          }
        />
      </div>
    );
  }
}

CommandSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommandSnackbar);