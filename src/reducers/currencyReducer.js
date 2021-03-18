import {currencyTypes} from "../components/SplashScreen/SplashscreenConstants";

const initialState = {
    currencies: [],
    isLoading: false
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
        default:
            return state;
    }
}
