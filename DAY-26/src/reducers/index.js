import {nameReducers,emailReducers} from "./user";

import { combineReducers } from "redux";



const rootReducer=combineReducers({
    name:nameReducers,
    email:emailReducers
})
export default rootReducer