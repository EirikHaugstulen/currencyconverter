import React, { useEffect } from "react";
import {connect} from "react-redux";
import {btnClick, fetchCurrency} from "./SplashscreenActions";

const Splashscreen = ({btnClick, fetchCurrency}) => {

    useEffect(() => {
        fetchCurrency()
    }, [])

    return (
        <div>
            <h1>Currency converter</h1>
            <button onClick={() => btnClick()}>Change loading status</button>
        </div>
    )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
    btnClick,
    fetchCurrency
}

export default connect(mapStateToProps, mapDispatchToProps)(Splashscreen);
