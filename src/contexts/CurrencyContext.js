import React from 'react'

export const CurrencyContextDefaults = {
    value: {
        name: 'USD',
        rate: 1,
        symbol: '$'
    },
    setValue: () => { }
}

export const CurrencyContext = React.createContext(CurrencyContextDefaults);