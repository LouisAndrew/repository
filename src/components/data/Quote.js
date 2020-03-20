import React, { Component } from 'react'
import QuoteDisp from './display/QuoteDisp'
import styled from 'styled-components'
import SymbolContext from '../../SymbolContext'

export default class Quote extends Component {
    static contextType = SymbolContext

    state = {
        dataProvided: false,
        data: {}
    }

    getData = () => {

        fetch(`https://finnhub.io/api/v1/quote?symbol=${this.context.sym}&token=bpiirp7rh5rbgl0lb84g`)
            .then(rsp => rsp.ok ? rsp.json() : false)
            .then(data => this.consumeData(data))
     }

    consumeData = data => {

        if (data) { 
            
            if (data.c > 0) {
                //data is well provided
                this.setState(prev => {
                    let temp = prev
                    temp.dataProvided = true
                    temp.data = data
                    return temp
                })
            } else {
                //data isn't provided
                this.setState(prev => {
                    let temp = prev
                    temp.dataProvided = false
                    return temp
                })
            }

        } else {
            //error 429 means no data 
            setTimeout(() => {
                
                this.getData()
            }, 15000)
        }
     }

    componentDidMount = () => {
        this.getData()
     }

    render() {
        return this.state.dataProvided ? <QuoteDisp {...this.state} /> : <NoData>Sorry, no data is provided</NoData>
    }
}

const NoData = styled.h3`
  color: ${({ theme }) => theme.font};
  text-align: center;
`