import React from 'react'

export const ChosenItemContextDefaults = {
    value: null,
    setValue: () => { }
}

export const ChosenItemContext = React.createContext(ChosenItemContextDefaults);