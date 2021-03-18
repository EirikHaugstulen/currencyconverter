import {currencyTypes} from "../components/SplashScreen/SplashscreenConstants";
import {currencyConverterTypes} from "../components/CurrencyConverter/CurrencyConverterTypes"
import {currencylistTypes} from "../components/Currencylist/Currencylist.constants";

const initialState = {
    currencies: [],
    isLoading: false,
    currentCurrency: ['USD', 0.1176429905],
    calculatedValue: 0,
}

export default function (state = initialState, action) {
    switch (action.type){
        case (currencyTypes.BTN_CLICK):
            return {
                ...state,
                isLoading: !state.isLoading
            }
        case (currencyTypes.FETCH_CURRENCY):
            return {
                ...state,
                isLoading: true
            }
        case (currencyTypes.FETCH_CURRENCY_SUCCESS):
            return {
                ...state,
                currencies: action.payload,
                isLoading: false
            }
        case (currencyConverterTypes.CALCULATE_VALUE):
            return {
                ...state,
                calculatedValue: action.payload * state.currentCurrency[1]
            }
        case (currencylistTypes.SET_CURRENT_CURRENCY):
            return {
                ...state,
                currentCurrency: action.payload
            }
        default:
            return state;
    }
}
