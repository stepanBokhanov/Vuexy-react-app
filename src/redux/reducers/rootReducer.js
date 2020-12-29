import { combineReducers } from "redux"
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import calenderReducer from "./calendar/"
// import emailReducer from "./email/"
// import chatReducer from "./chat/"
// import todoReducer from "./todo/"
import customizer from "./customizer/"
import {reducer} from "./auth/loginReducer"
// import navbar from "./navbar/Index"
// import dataList from "./data-list/"

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'customizer']
};


const rootReducer = combineReducers({
  // calendar: calenderReducer,
  // emailApp: emailReducer,
  // todoApp: todoReducer,
  // chatApp: chatReducer,
  customizer: customizer,
  auth: reducer,
  // navbar: navbar,
  // dataList: dataList
})

export default persistReducer(persistConfig, rootReducer);

