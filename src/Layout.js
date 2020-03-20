import React from 'react'
import styled from 'styled-components'
import Content from './components/Content'
import Navbar from './components/Nav/Navbar'

export default function Layout() {
    return (
        <>
            <NavWr>
                <Navbar />
            </NavWr>
            <Container>
                <Content />
            </Container>
        </>
    )
}

const Container = styled.div`
    height: 92vh;
    width: 100%;
`

const NavWr = styled.nav`
  height: 8vh;
  width: 100%;
  background-color: ${({ theme }) => theme.second};
`