import styled from 'styled-components'
import Content from './components/Content'
import Navbar from './components/Nav/Navbar'
import Loading from './components/misc/Loading'
import SymbolContext from './SymbolContext'

import React, { Component } from 'react'
import Show from './components/Show'
import Res from './components/Res'

export default class Layout extends Component {
    static contextType = SymbolContext

    state = {
        isLoaded: true,
        showResult: false,
        results: [ ],
        sym: ''
    }

    load = bool => {
        console.log('kiading')
        this.setState(prev => {
            let temp = prev
            temp.isLoaded = bool
            console.log(temp.isLoaded, 'temp is loaded....')
            return temp
        })
    }

    backDefault = () => {
        this.setState(prev => {
            let temp = prev
            temp.isLoaded = true
            temp.showResult = false
            temp.results = [ ]
            temp.sym = ' '
            return temp
        })
    }

    setShowResult = res => {
        console.log('more than one result!')
        this.setState(prev => {
            let temp = prev
            temp.showResult = true
            temp.results = res
            return temp
        })
    }

    componentDidUpdate = () => {
        if (this.context.sym && this.context.sym !== this.state.sym) {
            this.setState(prev => {
                let temp = prev
                temp.isLoaded = true
                temp.showResult = false
                temp.results = [ ]
                temp.sym = this.context.sym
                return temp
            })
        }
    }

    render() {
        console.log(!this.state.isLoaded && !this.context.sym)
        return (
            <>
                <NavWr>
                    <Navbar setShowResult={this.setShowResult} load={this.load} />
                </NavWr>
                <Container>
                    {this.state.isLoaded && this.context.sym ? <Content /> : <></>}
                    {!this.context.sym && !this.state.showResult ? <Show /> : <></>}
                    {!this.context.sym && this.state.showResult ? <Res backDefault={this.backDefault} data={this.state.results} /> : <></>}
                    {/* <Loading /> */}
                    {!this.state.isLoaded && !this.context.sym ? <Loading /> : <></>}
                </Container>
            </>
        )
    }
}


const Container = styled.div`
    height: 92vh;
    width: 100%;
    background-color: pink;
`

const NavWr = styled.nav`
  height: 8vh;
  width: 100%;
  background-color: ${({ theme }) => theme.second};
`