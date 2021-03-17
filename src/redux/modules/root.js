import currencyReducer from '../../reducers/currencyReducer'
import {combineEpics} from "redux-observable";

export const rootEpic = combineEpics(

)

export const rootReducer = currencyReducer;
