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
        flex: () => (`
            display: -webkit-box;
            display: -moz-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
        `),
        flexFlow: val => {(`
            -webkit-flex-flow: ${val};
            -ms-flex-flow: ${val};
            flex-flow: ${val};
        `)},
            //should be flexdirection..
            // let flexDirection = `
            //     -webkit-flex-direction: ${dir};
            //     -ms-flex-direction: ${dir};
            //     flex-direction: ${dir};
            // `
            // switch (dir) {
            //     case 'row': 
            //         flexDirection = `
            //             ${flexDirection}
            //             -webkit-box-direction: normal;
            //             -webkit-box-orient: horizontal;
            //             -moz-box-direction: normal;
            //             -moz-box-orient: horizontal;
            //         `
            //         break
            //     case 'row-reverse':
            //         flexDirection = `
            //             ${flexDirection}
            //             -webkit-box-direction: reverse;
            //             -webkit-box-orient: horizontal;
            //             -moz-box-direction: reverse;
            //             -moz-box-orient: horizontal;
            //         `
            //         break
            //     case 'column':
            //         flexDirection = `
            //             ${flexDirection}
            //             -webkit-box-direction: normal;
            //             -webkit-box-orient: vertical;
            //             -moz-box-direction: normal;
            //             -moz-box-orient: vertical;
            //         `
            //         break
            //     case 'column-reverse':
            //         flexDirection = `
            //             ${flexDirection}
            //             -webkit-box-direction: reverse;
            //             -webkit-box-orient: vertical;
            //             -moz-box-direction: reverse;
            //             -moz-box-orient: vertical;
            //         `
            //         break
            // }

            // let flexWrap = wrap === ''
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
