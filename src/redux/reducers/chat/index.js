import { combineReducers } from "redux"
import chats from "./chats"

const chatReducer = combineReducers({
  chats
})

export default chatReducer
