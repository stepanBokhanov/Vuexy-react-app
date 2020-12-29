export const register = (state = {}, action) => {
  switch (action.type) {
    case "SIGNUP_WITH_EMAIL": {
      return { ...state, values: action.payload }
    }
    case "SIGNUP_WITH_JWT":
      return {
        ...state,
        values: action.payload
      }
    default: {
      return state
    }
  }
}
