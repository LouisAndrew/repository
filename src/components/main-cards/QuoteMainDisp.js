import React from 'react'
import styled from 'styled-components'

export default function QuoteDisp(props) {
  console.log(props)
    // const time = new Date(props.data.t * 1000)
    const up = props.data.pc < props.data.c ? true: false
    const prog = props.data.c / props.data.pc
    return (
      <Container>
        <Tick>
          <div><h5>High</h5></div>
          <div><h5>{props.data.h.toFixed(2)}</h5></div>
        </Tick>
        <Tick>
          <div><h5>Low</h5></div>
          <div><h5>{props.data.l.toFixed(2)}</h5></div>
        </Tick>
        <Prog isUp={up}>
          <h2>{prog.toFixed(2)}%</h2>
        </Prog>
      </Container>
    )
}

const Tick = styled.div`
  height: 15%;
  width: 80%;
  background-color: ${({ theme }) => theme.second};
  display: flex;
  flex-direction: column;

  div {
    ${({ theme }) => theme.fitContainer()};
    ${({ theme }) => theme.center()};
    color: #fff;
  }

  div:first-child {
    background-color: ${({ theme }) => theme.prim};
  }
`

const Prog = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${props => props.isUp ? 'green' : 'red'};

  .material-icons {
    transform: rotate(${props => props.isUp ? '0deg' : '180deg'});
  }
  h2 {
      font-size: 1.6em;
  }
`

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 3em 0;
  /* background-color: pink; */

  @media only screen and ( max-width: 440px ) and ( orientation: portrait ) {

    & {
      padding: 2vh 0;
    }

    & div:not(:last-child) {
      height: 25%;
    }

    div h5 { 
      font-size: 0.2em;
    }

    div h2 {
      font-size: 0.5em;
    }
  }
`