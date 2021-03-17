import {ofType} from "redux-observable";
import {currencyTypes} from "./SplashscreenConstants";
import {mergeMap} from "rxjs/operators";
import {ajax} from "rxjs/ajax";
import {fetchCurrencySuccess} from "./SplashscreenActions";

export const fetchCurrencyEpic = action$ => action$.pipe(
    ofType(currencyTypes.FETCH_CURRENCY),
    mergeMap(() => ajax.getJSON('https://api.exchangeratesapi.io/latest?base=NOK'))
        .map(data => fetchCurrencySuccess(data))
)
