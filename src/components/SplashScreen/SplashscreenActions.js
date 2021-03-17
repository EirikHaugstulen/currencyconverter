import {currencyTypes} from "./SplashscreenConstants";

export const fetchCurrency = () => ({type: currencyTypes.FETCH_CURRENCY})

export const btnClick = () => ({type: currencyTypes.BTN_CLICK})

export const fetchCurrencySuccess = (payload) => ({type: currencyTypes.FETCH_CURRENCY_SUCCESS, payload: payload})
