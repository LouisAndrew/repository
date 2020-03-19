import React, { Component } from 'react'
import NewsDisp from './disp-datas/NewsDisp'
import { ReactComponent as Rolling } from './rolling.svg'

export default class News extends Component {

    state = {
        sym: '',
        data: [ ], 
        loaded: false
     }

    getAndConsume = ( ) => {

        fetch(`https://finnhub.io/api/v1/news/${this.props.sym}?token=bpiirp7rh5rbgl0lb84g`)
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
        console.log(this.state.loaded)
        return this.state.loaded ? <NewsDisp {...this.state.data} /> : <Rolling />
    }
}
