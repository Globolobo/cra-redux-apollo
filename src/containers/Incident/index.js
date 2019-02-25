import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import GridList from '@material-ui/core/GridList'
import IncidentCard from '../../components/incidentCard'
import DateChip from '../../components/dateChip'
import CommandBox from '../../components/commandBox'
import { submitCommand, closeSnackbar } from '../Incident/actions'
import CommandSnackbar from '../../components/commandSnackbar';

class Incident extends Component {
  state = {
    command: ''
  }

  onCommand = (value) =>
    this.setState({
      command: value
    })

  handleSubmit = (e) => {
      e.preventDefault()
      this.props.submitCommand(this.state.command)
    }

  render() {
    const { startTime, stopTime, status, open, message, closeSnackbar } = this.props
    const endTimeBool = !!(stopTime)
    const onCommand = (value) => this.onCommand(value)

    return(
      <GridList cellHeight={160} cols={3}>
      <p>
        Please Enter '/start' to start a new incident, or '/stop' end it.
      </p>
        <CommandBox {...{ onCommand }} onSubmit={this.handleSubmit} />
        <CommandSnackbar {...{open, message}} onClose={closeSnackbar}/>
          { startTime && <IncidentCard {...{ status }}>
            <>
              <span>
                Incident Started at: <DateChip time={startTime || null}/>
              </span>
              <span>
                Incident Ended:
                  { stopTime && <DateChip {...{ endTimeBool }} time={stopTime} /> }
              </span>
            </>
          </IncidentCard>
          }
      </GridList>) || <div />
  }
}

Incident.propTypes = {
  submitCommand: PropTypes.func,
  startTime: PropTypes.instanceOf(Date),
  stopTime: PropTypes.instanceOf(Date),
  status: PropTypes.string,
}

const mapStateToProps = ({ commandReceiver}) => {
  const { status, startTime, stopTime, open, message } = commandReceiver
  
  return {
    status,
    startTime,
    stopTime,
    open,
    message
  }
}

export default connect(mapStateToProps, { submitCommand, closeSnackbar })(Incident);
