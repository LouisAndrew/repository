import React, { Component } from 'react'
import styled from 'styled-components'
import SymbolContext from '../SymbolContext'
import Card from './main-cards/Card'

export default class Main extends Component { 


    render() {
        return (
            <Container>
                
                <Wrapper>

                    <Note>
                        <h3>Trending Stocks Right Now...</h3>
                    </Note>
                    <CardWr>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </CardWr>

                </Wrapper>
            </Container>
        )
    }
}

const Wrapper = styled.div`
  ${({ theme }) => theme.fitContainer()}
  display: flex;
  flex-direction: column;
`

const Note = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  color: #fff;
`

const CardWr = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none
  }
  background-color: #fff;
`

const Container = styled.div`
  ${({ theme }) => theme.fitContainer()}
  background-color: ${({ theme }) => theme.prim};
  padding: 3em;

  @media only screen and ( max-screen: 850px ) {
    
    & {
      padding: 0;
    }
  }
`