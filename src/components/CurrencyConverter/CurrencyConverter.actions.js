import {currencyConverterTypes} from "./CurrencyConverterTypes";

export const calculateValue = payload => ({type: currencyConverterTypes.CALCULATE_VALUE, payload: payload})
