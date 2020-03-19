import React from 'react'
import styled from 'styled-components'

export default function QuoteDisp(props) {
    const time = new Date(props.data.t * 1000)
    const up = props.data.pc < props.data.c ? true: false
    const prog = props.data.c / props.data.pc
    return (
        <Container isUp={up}>
            <h4>Last Updated: {`${time.getDate()}.${time.getMonth()}.${time.getFullYear()}, ${time.getHours()}:${time.getMinutes()}`}</h4>
            <Wrapper>
              <h2><i className="material-icons">arrow_upward</i>{prog.toFixed(2)}%</h2>
              <Det>
                  <h5>close: {props.data.c}</h5>
                  <h5>open: {props.data.o}</h5>
                  <h5>high: {props.data.h}</h5>
                  <h5>low: {props.data.l}</h5>
              </Det>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
  ${({ theme }) => theme.fitContainer()};
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 1em;
  position: relative;

  h2 {
    margin-top: 1em;
    text-align: right;
    color: ${props => props.isUp ? 'green' : 'red'};
  }

  .material-icons {
      transform: ${props => props.isUp ? '' : 'rotate(180deg)'};
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and ( max-width: 450px ) {

    & {
      flex-direction: row;
    }
  }
`

const Det = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1em;

  h5 { 
      line-height: 2em;
  }

  @media only screen and ( max-width: 450px ) {
    
    & {
      flex-direction: row;
      flex-wrap: wrap;
      width: 50%;
    }

    h5 {
      margin-left: 1em;
      font-size: 0.8em;
    }
  }
`