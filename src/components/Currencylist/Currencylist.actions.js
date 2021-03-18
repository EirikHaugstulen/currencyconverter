import {currencylistTypes} from "./Currencylist.constants";

export const setCurrentCurrency = payload => ({type: currencylistTypes.SET_CURRENT_CURRENCY, payload: payload})
