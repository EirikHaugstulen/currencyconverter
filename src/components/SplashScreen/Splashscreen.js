import React, { useEffect } from "react";
import {connect} from "react-redux";
import {btnClick, fetchCurrency} from "./SplashscreenActions";
import Currencylist from "../Currencylist/Currencylist";
import CurrencyConverter from "../CurrencyConverter/CurrencyConverter";

const Splashscreen = ({btnClick, fetchCurrency, currencies, loading}) => {

    useEffect(() => {
        fetchCurrency()
    }, [fetchCurrency])

    return (
        <div>
            <h1>Currency converter</h1>
            <button onClick={() => btnClick()}>Change loading status</button>
            <div style={{display: 'flex'}}>
                <Currencylist />
                <CurrencyConverter />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currencies: state.currencies,
    loading: state.isLoading
})

const mapDispatchToProps = {
    btnClick,
    fetchCurrency
}

export default connect(mapStateToProps, mapDispatchToProps)(Splashscreen);
