import React from 'react'
import styled from 'styled-components'

export default function Content() {
    return (
        <Container>

            <Wrapper className='upper'>
                <ProfileWr className='profile'>

                </ProfileWr>
                <ChartsWr className='charts'>

                </ChartsWr>
            </Wrapper>

            <Wrapper>
                <NewsWr className='news'></NewsWr>
                <TrendsWr className='trends'></TrendsWr>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3em;
  background-color: ${({ theme }) => theme.prim};
  
  /* mobile */
  @media only screen and ( max-width: 440px ) and ( orientation: portrait ) {
      
      & {
          height: 200%;
      }

      & > div:first-child {
        margin-bottom: 3em;
      }
  }

  @media only screen and ( max-width: 850px ) and ( orientation: landscape ) {

      & {
          height: 200%;
      }
  }

  /* tablet */
  @media only screen and ( max-width: 1050px ) {
      
  }

  @media only screen and ( min-width: 1920px ) {
      
      & {
          padding: 8vh 14vh;
      }
  }
`

const Wrapper = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.prim};
  padding: 2em;

  &.upper {
      height: 45%;
  }

  div {
      background-color: ${({ theme }) => theme.font};
  }

  @media only screen and ( max-width: 440px ) and ( orientation: portrait ) {
      
      & {
        flex-direction: column-reverse;
      }

      &.upper {
          flex-direction: column;
      }

      .profile {
          height: 35%;
          width: 100%;
      }

      .charts {
          height: 60%;
          width: 100%;
      }

      .trends {
          height: 40%;
          width: 100%;
      }

      .news {
          height: 55%;
          width: 100%;
      }
  }

  /* tablet */
  @media only screen and ( max-width: 1050px ) {
      
  }
`
//WRAPPER BUAT SEMUA ELEMENTS BELOW!!

const ProfileWr = styled.div`
  height: 100%;
  width: 35%;
`

const ChartsWr = styled.div`
  height: 100%;
  width: 60%;
`

const NewsWr = styled(ChartsWr)`
`

const TrendsWr = styled(ProfileWr)` 
`