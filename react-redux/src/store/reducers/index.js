import { combineReducers } from "redux"
import listReducer from "./lists"

const rootReducer = combineReducers({
  lists: listReducer,
  // product: productReducer => ini example misal ada >1 reducer
})

export default rootReducer