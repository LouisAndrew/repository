import styled from 'styled-components'
import Content from './components/Content'
import Navbar from './components/Nav/Navbar'
import Loading from './components/misc/Loading'
import SymbolContext from './SymbolContext'
import Main from './components/Main'

import React, { Component } from 'react'

export default class Layout extends Component {
    static contextType = SymbolContext

    state = {
        isLoaded: true
    }

    load = bool => {
        console.log('kiading')
        this.setState(prev => {
            let temp = prev
            temp.isLoaded = bool
            return temp
        })
    }

    render() {
        return (
            <>
                <NavWr>
                    <Navbar load={this.load} />
                </NavWr>
                <Container>
                    {this.state.isLoaded && this.context.sym ? <Content /> : <></>}
                    {!this.context.sym && <Main />}
                    {!this.state.isLoaded && this.context.sym ? <Loading /> : <></>}
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