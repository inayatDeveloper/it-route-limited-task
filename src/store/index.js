import { createStore } from "redux";
import allreducers from "../reducers";

const store = createStore(allreducers);

export default store;
