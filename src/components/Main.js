import React, { Component } from 'react'
import styled from 'styled-components'
import SymbolContext from '../SymbolContext'
import Card from './main-cards/Card'

export default class Main extends Component { 

    state = {
      data: [
        {
          name: 'amazon',
          sym: 'AMZN'
        },
        {
          name: 'facebook',
          sym: 'FB'
        },
        {
          name: 'twitter',
          sym: 'TWTR'
        },
        {
          name: 'yahoo',
          sym: 'YHOO'
        },
        {
          name: 'apple',
          sym: 'AAPL'
        },
        {
          name: 'starbucks',
          sym: 'SBUX'
        },
        {
          name: "mcdonald's",
          sym: 'MCD'
        },
        {
          name: 'spotify',
          sym: 'SPOT'
        },
        {
          name: 'google',
          sym: 'GOOG'
        }
      ]
    }

    render() {
        const ret = this.state.data.map(x => <Card {...x} />)
        return (
            <Container>
                
                <Wrapper>

                    <Note>
                        <h3>Our Recommendations..</h3>
                    </Note>
                    <CardWr>
                      {ret}
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