import { SUBMIT_COMMAND, CLOSE_SNACKBAR } from '../constants'

export const submitCommand = commandString => {
  return {
    type: SUBMIT_COMMAND,
    commandString,
  }
}

export const closeSnackbar = () => ({
  type: CLOSE_SNACKBAR
})
