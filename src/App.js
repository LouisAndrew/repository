import React from 'react'
import { SymbolProvider } from './SymbolContext'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Layout from './Layout'
import { Helmet } from 'react-helmet'

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
        flexFlow: val => (`
            -webkit-flex-flow: ${val};
            -ms-flex-flow: ${val};
            flex-flow: ${val};
        `),
        justifyContent: val => {
            let toRet = `
            -webkit-justify-content: ${val};
            justify-content: ${val};
            `

            switch (val) {
                case 'flex-start':
                    toRet = `
                        ${toRet}
                        -webkit-box-pack: start;
                        -moz-box-pack: start;
                        -ms-flex-pack: start;
                    `
                    break
                case 'flex-end':
                    toRet = `
                        ${toRet}
                        -webkit-box-pack: end;
                        -moz-box-pack: end;
                        -ms-flex-pack: end;
                    `
                    break
                case 'space-between':
                    toRet = `
                        ${toRet}
                        -webkit-box-pack: justify;
                        -moz-box-pack: justify;
                        -ms-flex-pack: justify;
                    `
                    break
                case 'space-around':
                    toRet = `
                        ${toRet}
                        -ms-flex-pack: distribute;
                    `
                    break
                default:
                    toRet = `
                        ${toRet}
                        -webkit-box-pack: ${val};
                        -moz-box-pack: ${val};
                        -ms-flex-pack: ${val};
                    `
                    break
            }

            return toRet
        },
        alignItems: val => {
            let toRet = `
                -webkit-align-items: ${val};
                align-items: ${val};
            `

            switch (val) {
                case 'flex-start':
                    toRet = `
                        ${toRet}
                        -webkit-box-align: start;
                        -moz-box-align: start;
                        -ms-flex-align: start;
                    `
                    break
                case 'flex-end':
                    toRet = `
                        ${toRet}
                        -webkit-box-align: end;
                        -moz-box-align: end;
                        -ms-flex-align: end;
                    `
                    break
                default:
                    toRet = `
                        ${toRet}
                        -webkit-box-align: ${val};
                        -moz-box-align: ${val};
                        -ms-flex-align: ${val};
                    `
                    break
            }
            return toRet
        },
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

    // const fontResize = i => {
    //     let toRet = ''
    //     for (let j = 1; j <= i; j++) {
    //         let temp = `
    //             @media only screen and ( min-width: ${100 * j}px ) {
    //                 body {
    //                     font-size: ${0.2*j}em;
    //                 }
    //             }
    //         `
    //         toRet = `${toRet} ${temp}`
    //     }

    //     return toRet
    // }

    // const Global = createGlobalStyle`
    //   ${fontResize(20)}
    // `

    return (
        <SymbolProvider>
            <ThemeProvider theme={theme}>
                {/* <Global /> */}
                <Helmet>
                    <meta charSet='utf-8' />
                    <title>Roxstok App</title>
                </Helmet>
                <Layout />
            </ThemeProvider>
        </SymbolProvider>
    )
}
