

export const CurrencylistItem = ({listItem, setCurCurrency}) => (
    <li style={{margin: '3px 2px', userSelect:'none', cursor: 'pointer'}} onClick={() => setCurCurrency(listItem)}><b>{listItem[0]}</b> : {listItem[1]}</li>
)
