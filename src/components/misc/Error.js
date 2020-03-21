import React, { useContext } from 'react'
import styled from 'styled-components'
import { ReactComponent as Back } from '../back.svg'
import SymbolContext from '../../SymbolContext'

export default function Error() {

    const cntxt = useContext(SymbolContext)
    const back = () => { cntxt.setSym('') }

    return (
        <Container>
            <Back onClick={back} id='back' />
            <h1>You're Lost Bro..</h1>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  height: 88vh;
  ${({ theme }) => theme.center()};
  color: ${({ theme }) => theme.font};
  background-color: ${({ theme }) => theme.prim};
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;

  #back {
      fill: #fff;
      transform: scale(1.5);
      position: absolute;
      top: 3vh;
      left: 3vh;
  }

  #back:hover {
      fill: ${({ theme }) => theme.font};
  }

  @media only screen and ( max-width: 440px ) and ( orientation: portrait ) {
      
    #back {
          transform: scale(1);
      }
  }
`