import {connect} from "react-redux";
import {calculateValue} from "./CurrencyConverter.actions";

const CurrencyConverter = ({currentCurrency, calculatedValue, calculateValue}) => {

    return (
        <div style={{width: '40%'}}>
            <h3>Converter</h3>

            <p>NOK:</p>
            <input type={'number'} onChange={e => calculateValue(e.target.value)}/>

            <p>{currentCurrency}</p>
            <p>{calculatedValue.toFixed(2)} {currentCurrency}</p>
        </div>
    )
}
const mapStateToProps = state => ({
    currentCurrency: state.currentCurrency[0],
    calculatedValue: state.calculatedValue
})

const mapDispatchToProps = {
    calculateValue
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyConverter)
