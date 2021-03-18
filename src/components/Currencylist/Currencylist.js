import React, { useState, useEffect } from "react";
import {CurrencylistItem} from "../CurrencylistItem/CurrencylistItem";
import {connect} from "react-redux";
import {calculateValue} from "../CurrencyConverter/CurrencyConverter.actions";
import {setCurrentCurrency} from "./Currencylist.actions";

const Currencylist = ({list, loading, setCurrentCurrency, currentCurrency}) => {
    const [ currencyList, setCurrencyList ] = useState([])

    useEffect(() => {
        const arr = Object.entries(list)
        console.log(arr)
        setCurrencyList(arr)
    }, [list])

    const clickHandler = (input) => {
        setCurrentCurrency(input)
    }


    return (
        <div style={{textAlign: 'left', padding: '2px 6px', width: '40%'}}>
            <h3>Fetched currencies:</h3>

            <ul style={{listStyle: 'none'}}>
                {!loading ? currencyList.map((listItem, index) => {
                    return <CurrencylistItem key={index} listItem={listItem} setCurCurrency={clickHandler}/>
                }) : 'Fetching data'}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    list: state.currencies,
    loading: state.isLoading,
    currentCurrency: state.currentCurrency
})

const mapDispatchToProps = {
    calculateValue,
    setCurrentCurrency
}

export default connect(mapStateToProps, mapDispatchToProps)(Currencylist);
