import React from 'react'
import { SymbolProvider } from './SymbolContext'
import { ThemeProvider } from 'styled-components'
import Layout from './Layout'

export default function App() {

    const theme = {
        prim: '#464646',
        second: '#323232',
        font: '#CACACA',
        secondTrans: 'rgba(50, 50, 50, 0.5)',
        center: () => (`
            display: flex;
            justify-content: center;
            align-items: center;
        `),
        fitContainer: () => (`
            height: 100%;
            width: 100%;
        `)
    }

    return (
        <SymbolProvider>
            <ThemeProvider theme={theme}>
                <Layout />
            </ThemeProvider>
        </SymbolProvider>
    )
}
