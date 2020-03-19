import React from 'react'
import styled from 'styled-components'
import Content from './components/Content'

export default function Layout() {
    return (
        <>
            <NavWr></NavWr>
            <Container>
                <Content />
            </Container>
        </>
    )
}

const Container = styled.div`
    height: 88vh;
    width: 100%;
`

const NavWr = styled.nav`
  height: 12vh;
  width: 100%;
  background-color: ${({ theme }) => theme.second};
`