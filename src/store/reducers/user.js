const TOGGLE_LOGIN = 'TOGGLE_LOGIN'

export const toggleLogin = () => {
  return {
    type: TOGGLE_LOGIN
  }
}

const initialState = {
  isFetching: false,
  isFailed: false,
  isLoggedIn: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOGIN:
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn
      }
    default:
      return state
  }
}
