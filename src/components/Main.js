import React, { Component } from 'react'
import styled from 'styled-components'
import SymbolContext from '../SymbolContext'

export default class Main extends Component { 


    render() {
        return (
            <Container>
                
            </Container>
        )
    }
}

const Container = styled.div`
  ${({ theme }) => theme.fitContainer()};
  background-color: pink;
`