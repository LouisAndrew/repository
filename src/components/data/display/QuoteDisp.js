import React from 'react'
import styled from 'styled-components'

export default function QuoteDisp(props) {
    // const time = new Date(props.data.t * 1000)
    console.log(props)
    const up = props.data.pc < props.data.c ? true: false
    const prog = props.data.c / props.data.pc
    return (
      <Container>
        <Tick>
          <div><h5>High</h5></div>
          <div><h5>{props.data.h}</h5></div>
        </Tick>
        <Tick>
          <div><h5>Low</h5></div>
          <div><h5>{props.data.l}</h5></div>
        </Tick>
        <Prog isUp={up}>
          <h2><span class="material-icons">arrow_upward</span>{prog.toFixed(2)}%</h2>
        </Prog>
      </Container>
    )
}

const Tick = styled.div`
  height: 100%;
  width: 25%;
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
  height: 100%;
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${props => props.isUp ? 'green' : 'red'};

  .material-icons {
    transform: rotate(${props => props.isUp ? '0deg' : '180deg'});
  }
`

const Container = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and ( max-width: 1050px ) and ( min-width: 464px ) and ( orientation: portrait ) {

    & {
      flex-direction: column;
      justify-content: center;
      width: 20%;
      height: 100%;
    }

    div {
      height: 10%;
      width: 100%;
      font-size: 0.8em;
      margin-bottom: 1em;
    }

    div:last-child {
      height: 50%;
      font-size: 0.6em;
    }
  }

  @media only screen and ( max-width: 464px ) {

    div h5 {
      font-size: 0.6em;
    }

    div h2, .material-icons {
      font-size: 0.7em;
    }
  }

  @media only screen and ( max-width: 850px ) and ( orientation: landscape ) {
    
    div h5 {
      font-size: 0.6em;
    }

    div h2, .material-icons {
      font-size: 0.7em;
    }
  }
`