import React, { useEffect } from "react";
import {connect} from "react-redux";
import {btnClick, fetchCurrency} from "./SplashscreenActions";
import {Currencylist} from "../Currencylist/Currencylist";

const Splashscreen = ({btnClick, fetchCurrency, currencies}) => {

    useEffect(() => {
        fetchCurrency()
    }, [])

    return (
        <div>
            <h1>Currency converter</h1>
            <button onClick={() => btnClick()}>Change loading status</button>
            <Currencylist list={currencies} />
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
