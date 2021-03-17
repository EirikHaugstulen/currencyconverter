import currencyReducer from '../../reducers/currencyReducer'
import {combineEpics} from "redux-observable";
import {fetchCurrencyEpic} from "../../components/SplashScreen/SplashcreenEpic";

export const rootEpic = combineEpics(
    fetchCurrencyEpic
)

export const rootReducer = currencyReducer;
