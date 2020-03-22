import React, { Component } from 'react'
import styled from 'styled-components'
import ProfileMain from './ProfileMain'
import QuoteMain from './QuoteMain'
import SymbolContext from '../../SymbolContext'

export default class Card extends Component {
    static contextType = SymbolContext

    click = () => {
        this.context.setSym(this.props.sym)
    }

    render() {
        return (
            <Container className='card' onClick={this.click}>
                <Upper>
                  <ProfileMain name={this.props.name} />
                </Upper>
                <Inner>
                  <QuoteMain sym={this.props.sym} />
                </Inner>
            </Container>
        )
    }
}

const Inner = styled.div`
  height: 100%;
  width: 40%;
  ${({ theme }) => theme.center()};
`

const Upper = styled.div`
  height: 100%;
  width: 60%;
  ${({ theme }) => theme.center()};
`;

const Container = styled.div`
  height: 350px;
  width: 250px;
  margin: 2em;
  display: flex;
  background-color: ${({ theme }) => theme.secondTrans};
  padding: 1em;

  @media only screen and ( max-width: 464px ) and ( orientation: portrait ) {
    
    & {
      width: 40%;
      margin: 1em 0;
      height: 30%;
    }
  }

  @media only screen and ( max-width: 464px ) and ( min-height: 660px ) and ( orientation: portrait ) {

    & {
      height: 25%;
    }
  }

  @media only screen and ( min-width: 3000px ) {
    
    & {
      height: 700px;
      width: 500px;
    }
  }
`