import React, { Component } from 'react'
import ProfileDisp from './disp-datas/ProfileDisp'
import { ReactComponent as Rolling } from './rolling.svg'

export default class Profile extends Component {

    state = {
        isLoading: false,
        dataAvailable: false,
        sym: '',
        data: { }
     }
    
    setSymbol = () => {
        this.setState(prev => {
            let temp = prev
            temp.sym = this.props.sym
            return temp
        }, () => this.getAndConsumeData())
     }
    
    //for retrieving data from the API => before data fully retrieved, set isloading to true
    getAndConsumeData = () => {

        this.setState(prev => {
            let temp = prev
            temp.isLoading = true
            return temp
        }, () => {

            fetch(`https://finnhub.io/api/v1/stock/profile?symbol=${this.props.sym}&token=bpiirp7rh5rbgl0lb84g`)
                .then(rsp => rsp.ok ? rsp.json() : false)
                .then(data => this.consumeData(data))
        })
     }

    //func to consume data provided by the api to the state
    consumeData = data => {

        if (data) {
            
            if (data.name) {
                //data is provided
                this.setState(prev => {
                    let temp = prev
                    temp.data = data
                    temp.isLoading = false
                    temp.dataAvailable = true
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
            //error 429 => past the limit
            console.log('error 429')
            setTimeout(() => {
                this.getAndConsumeData()
            }, 30000)
        }
     }

    componentDidMount = () => { 
        if (this.props.sym) {
            this.setSymbol()
        }
     }

    componentDidUpdate = () => {
        if (this.props.sym && this.props.sym.localeCompare(this.state.sym) !== 0) {
            this.setSymbol()
        }
     }

    render() {
        return this.state.isLoading === false && this.state.dataAvailable ? <ProfileDisp {...this.state.data} /> : <Rolling />
     }
}
