import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TimeStartIcon from '@material-ui/icons/Timer';
import TimeStopIcon from '@material-ui/icons/TimerOff'
import Chip from '@material-ui/core/Chip';
import styles from './styles';
import { format } from 'date-fns';

const DateChip = memo(({ classes = {}, timeEndBool = false, time = '' }) => {
    const icon = (timeEndBool && <TimeStopIcon/>) || <TimeStartIcon/>
    const label = format(new Date(time), 'h:mm:sa - MM/ddd/YY')

    return (
    <div className={classes.root}>
        <Chip {...{ icon, label }} className={classes.chip}/>
    </div>
    );
})

DateChip.propTypes = {
    classes: PropTypes.object.isRequired,
    timeStartBool: PropTypes.bool,
    time: PropTypes.instanceOf(Date)
}

export default withStyles(styles)(DateChip)