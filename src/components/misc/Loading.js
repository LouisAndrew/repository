import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as Elips } from './elipsis.svg'

export default function Loading() {

    const [ time, setTime ] = useState(false)

    setTimeout(() => {
        setTime(true)
    }, 15000)

    return (
        <Container>
            <Elips id='elips' />
            {time && <h2>This Will Take a Few Moments..</h2>}
        </Container>    
    )
}

const Container = styled.div`
  ${({ theme }) => theme.fitContainer()};
  ${({ theme }) => theme.center()};
  flex-direction: column;
  background-color: ${({ theme }) => theme.prim};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  #elips {
      height: 10vh;
      width: 20vw;
  }

  h2 {
      position: absolute;
      top: 60%;
      color: ${({ theme }) => theme.font};
  }
`