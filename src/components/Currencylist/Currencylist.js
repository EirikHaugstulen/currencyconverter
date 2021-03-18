import React, { useState, useEffect } from "react";
import {CurrencylistItem} from "../CurrencylistItem/CurrencylistItem";
import {connect} from "react-redux";
import {calculateValue} from "../CurrencyConverter/CurrencyConverter.actions";
import {setCurrentCurrency} from "./Currencylist.actions";

const Currencylist = ({list, loading, setCurrentCurrency}) => {
    const [ currencyList, setCurrencyList ] = useState([])
    const [ curCurrency, setCurCurrency ] = useState(['USD', 0.235987])

    useEffect(() => {
        const arr = Object.entries(list)
        console.log(arr)
        setCurrencyList(arr)
    }, [list])

    useEffect(() => {
        setCurrentCurrency(curCurrency)
    }, [curCurrency])

    return (
        <div style={{textAlign: 'left', padding: '2px 6px', width: '40%'}}>
            <h3>Fetched currencies:</h3>

            {curCurrency === null || curCurrency === undefined ? 'Please select a currency' :
                <ul style={{listStyle: 'none'}}>
                    {!loading ? currencyList.map((listItem, index) => {
                        return <CurrencylistItem key={index} listItem={listItem} setCurCurrency={setCurCurrency}/>
                    }) : 'Fetching data'}
                </ul>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    list: state.currencies,
    loading: state.isLoading
})

const mapDispatchToProps = {
    calculateValue,
    setCurrentCurrency
}

export default connect(mapStateToProps, mapDispatchToProps)(Currencylist);
