import {ofType} from "redux-observable";
import {currencyTypes} from "./SplashscreenConstants";

export const fetchCurrencyEpic = action$ => action$.pipe(
    ofType(currencyTypes.FETCH_CURRENCY)
)
