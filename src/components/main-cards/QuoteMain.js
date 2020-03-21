import React, { Component } from 'react'
import QuoteMainDisp from './QuoteMainDisp'

export default class QuoteMain extends Component {

    state = {
        data: { }
    }

    fetchData = () => {
        fetch(`https://finnhub.io/api/v1/quote?symbol=${this.props.sym}&token=bpiirp7rh5rbgl0lb84g`)
            .then(rsp => rsp.ok ? rsp.json() : false)
            .then(data => this.consume(data))
    }

    consume = data => {
        
        if (data && data.c > 0) {
            this.setState(prev => {
                let temp = prev
                temp.data = data
                return temp
            })
        } else {
            setTimeout(() => {
                this.fetchData()
            }, 15000)
        }
    }

    componentDidMount = () => {
        this.fetchData()
    }

    render() {
        return this.state.data.c ? <QuoteMainDisp {...this.state} /> : <></>
    }
}
