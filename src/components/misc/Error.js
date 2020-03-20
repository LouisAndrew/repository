import React from 'react'
import styled from 'styled-components'

export default function Error() {
    return (
        <Container>
            <h1>You're Lost Bro..</h1>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  height: 90vh;
  ${({ theme }) => theme.center()};
  color: ${({ theme }) => theme.font};
  background-color: ${({ theme }) => theme.prim};
  position: absolute;
  top: 8vh;
  left: 0;
  z-index: 2;
`