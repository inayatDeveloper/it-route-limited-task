import { combineReducers } from "redux";
import Contacts from "./contacts";
const allreducers = combineReducers({
  Contacts: Contacts,
});

export default allreducers;
