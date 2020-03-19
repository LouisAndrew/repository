import React, { Component } from 'react'
import styled from 'styled-components'
import SymbolContext from '../../SymbolContext'
import { ReactComponent as Logo } from './roxstok2.svg'
import Search from './Search'

export default class Navbar extends Component {

    static contextType = SymbolContext

    submitSym = sym => {
        console.log(sym)
        this.context.setSym(sym)
    }

    render() {
        return (
            <Container>
                <Logo id='logo-top' />
                <Search submitSym={this.submitSym} />
            </Container>
        )
    }
}

const Container = styled.div`
  ${({ theme }) => theme.fitContainer()};
  padding: 0 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  #logo-top {
      transform: scale(1.4);
  }

  #logo-top path {
      fill: #fff;
  }
`
const Wr = styled.div`
  background-color: #fff;
  ${({ theme }) => theme.fitContainer()};
`