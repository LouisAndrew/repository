import React, { Component } from 'react'
import styled from 'styled-components'
import ProfileMain from './ProfileMain'
import QuoteMain from './QuoteMain'

export default class Card extends Component {

    render() {
        return (
            <Container>
                <Inner>
                  <ProfileMain name='apple' />
                </Inner>
                <Inner>
                  <QuoteMain sym='AAPL' />
                </Inner>
            </Container>
        )
    }
}

const Inner = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  ${({ theme }) => theme.center()};
`

const Container = styled.div`
  height: 40%;
  width: 20%;
  margin: 2em;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.secondTrans};
  padding: 1em;

  @media only screen and ( max-width: 464px ) and ( orientation: portrait ) {
    
    & {
      width: 40%;
      margin: 1em 0;
      height: 30%;
    }
  }
`