import React from 'react'

const SymbolContext = React.createContext('')

export const SymbolProvider = SymbolContext.Provider
export const SymbolConsumer = SymbolContext.Consumer

export default SymbolContext