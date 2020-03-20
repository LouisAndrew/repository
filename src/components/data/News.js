import React, { Component } from 'react'
import NewsDisp from './display/NewsDisp'
import { ReactComponent as Rolling } from './rolling.svg'
import SymbolContext from '../../SymbolContext'

export default class News extends Component {
    static contextType = SymbolContext

    state = {
        sym: this.context.sym,
        data: [ ], 
        loaded: false
     }

    getAndConsume = ( ) => {

        fetch(`https://finnhub.io/api/v1/news/${this.state.sym}?token=bpiirp7rh5rbgl0lb84g`)
            .then(rsp => rsp.ok ? rsp.json() : false)
            .then(data => this.consumeData(data))
     }

    consumeData = data => {

        if (data) {
            this.setState(prev => {
                let temp = prev
                temp.data = data
                temp.loaded = true
                return temp
             })
        } else {
            setTimeout(() => {
                this.getAndConsume()
            }, 30000)
        }
     }

    componentDidMount = ( ) => {
        this.getAndConsume()
     }

    render() {
        return this.state.loaded ? <NewsDisp {...this.state.data} /> : <Rolling />
    }
}
