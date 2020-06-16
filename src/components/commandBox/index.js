import React, { memo } from 'react';
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import AddCircle from '@material-ui/icons/AddCircle';
import styles from './styles'

const CommandBox = memo(({ onCommand, onSubmit, classes }) => (
  <div className={classes.margin}>
    <Grid container spacing={8} alignItems="flex-end">
      <Grid item>
        <AddCircle />
      </Grid>
      <Grid item>
        <form {...{ onSubmit }}>
          <TextField id="command-input" label="Enter a command" onChange={({target}) => onCommand(target.value)}/>
        </form>
      </Grid>
    </Grid>
  </div>
))

CommandBox.propTypes = {
  onCommand: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CommandBox)
