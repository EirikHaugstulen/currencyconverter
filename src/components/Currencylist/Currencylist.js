import React, { useState, useEffect } from "react";
import {CurrencylistItem} from "../CurrencylistItem/CurrencylistItem";

export const Currencylist = ({list, loading}) => {
    const [ currencyList, setCurrencyList ] = useState([])

    useEffect(() => {
        const arr = Object.entries(list)
        console.log(arr)
        setCurrencyList(arr)
    }, [list])

    return (
        <div style={{textAlign: 'left', padding: '2px 6px', width: '40%'}}>
            <h3>Fetched currencies:</h3>

            <ul style={{listStyle: 'none'}}>
                {!loading ? currencyList.map((listItem, index) => {
                    return <CurrencylistItem key={index} listItem={listItem} />
                }) : null}
            </ul>
        </div>
    )
}
