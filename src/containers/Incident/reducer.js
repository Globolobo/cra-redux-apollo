import { SUBMIT_COMMAND, CLOSE_SNACKBAR } from '../constants'

export const initialState = {
  startTime: null,
  stopTime: null,
  status: '',
  open: false
}

const commandReceiver = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_COMMAND: {
      const { commandString } = action

      switch(true) {
        case (commandString === '/start'): {

          return {
            ...state,
            status: 'In Progress',
            message: 'Succesfully started Incident',
            open: true,
            startTime: new Date(),
            stopTime: null
          }
        }
        case (commandString === '/stop' && state.startTime !== null):
          return {
            ...state,
            status: 'Ended',
            message: 'Incident has been terminated',
            open: true,
            stopTime: new Date()
          }
        default:
          return {
            ...state,
            message: 'Please enter the correct command',
            open: true
          }
      }
    }
    case CLOSE_SNACKBAR:
      return {
        ...state,
        open: false
      }
    default:
      return state
  }
}

export default commandReceiver
