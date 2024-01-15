const initialState = {
  isAuthenticated: false,
  isLoading: false,
  errors: null
}

const auth = (state= initialState, action) => {
  switch(action.type){
    default:
      return state
    case "LOGIN":
    case "REGISTER":
      return{
        ...state,
        isLoading: true
      }
    case "AUTH_SUCCESS":
      return{
        isAuthenticated: true,
        isLoading: false,
        error: null
      }
    case "AUTH_FAILED":
      return{
        isAuthenticated: false,
        isLoading: false,
        error: action.payload
      }
    case "AUTH_REMOVE_ERROR":
      return{
        isAuthenticated: false,
        isLoading: false,
        error: null
      }
  }
}

export default auth
