import React, { Component } from 'react'
import TrendDisp from './display/TrendDisp'
import { ReactComponent as Rolling } from './rolling.svg'
import SymbolContext from '../../SymbolContext'

export default class Trends extends Component {
    static contextType = SymbolContext

    state = {
        isLoading: false,
        dataAvailable: false,
        sym: this.context.sym,
        data: { }
     }

    setSymbol = () => {
        this.setState(prev => {
            let temp = prev
            temp.sym = this.context.sym
            return temp
        }, () => {
            this.getAndConsumeData()
        })
    }
    
    //for retrieving data from the API => before data fully retrieved, set isloading to true
    getAndConsumeData = () => { 

        this.setState(prev => {
            let temp = prev
            temp.isLoading = true 
            return temp
        }, () => {
            fetch(`https://finnhub.io/api/v1/stock/recommendation?symbol=${this.state.sym}&token=bpiirp7rh5rbgl0lb84g`)
                .then(rsp => rsp.ok ? rsp.json() : false)
                .then(data => this.consumeData(data))
        })
     }

    //consume the data provided
    consumeData = data => {
        
        //no error 429
        if (data) { 

            if (data[0]) {
                this.setState(prev => {
                    let temp = prev
                    temp.dataAvailable = true
                    temp.isLoading = false

                    //reset all data to 0
                    temp.data.buy = 0
                    temp.data.sell = 0
                    temp.data.strongBuy = 0
                    temp.data.strongSell = 0
                    temp.data.hold = 0

                    for (let i = 0; i < 3; i++) {
                        temp.data.buy += data[i].buy
                        temp.data.sell += data[i].sell
                        temp.data.strongBuy += data[i].strongBuy
                        temp.data.strongSell += data[i].strongSell
                        temp.data.hold += data[i].hold
                    }
                    this.props.fire(this.props.index)
                    return temp
                })

            } else {
                //no data
                this.setState(prev => {
                    let temp = prev
                    temp.dataAvailable = false
                    temp.isLoading = false
                    this.props.reject(this.props.index)
                    return temp
                })
            }
        } else {
            //means error 429
            console.log('error 429')
            setTimeout(() => {
                this.getAndConsumeData()
            }, 30000)
        }
     }

    componentDidMount = () => {
        if (this.context.sym) {
            this.getAndConsumeData()
        }
     }

    componentDidUpdate = () => {
        if (this.context.sym && this.context.sym.localeCompare(this.state.sym) !== 0) {
            this.setSymbol()
        }
     }

    render() {
        return this.state.isLoading === false && this.state.dataAvailable ? <TrendDisp {...this.state.data} /> : <Rolling />
     }
}
