import React from 'react'
import styled from 'styled-components'

export default function ProfileMain(props) {

    return (
        <Container>
            <img src={`//logo.clearbit.com/${props.name}.com`} />
            <div>
                <h4>{props.name.toUpperCase()}</h4>
            </div>
        </Container>
    )
}

const Container = styled.div`
  ${({ theme }) => theme.fitContainer()};
  ${({ theme }) => theme.center()};
  display: flex;
  background-color: pink;

  img {
      height: 80px;
      width: 80px;
      border-radius: 10px;
  }

  div {
      ${({ theme }) => theme.fitContainer()};
      ${({ theme }) => theme.center()};
  }

  div h4 {
      padding-left: 0.5em;
      font-size: 1.3em;
      color: #fff;
  }

  @media only screen and ( max-width: 850px ) {
      
    & {
        flex-direction: column;
    }
  }

  @media only screen and ( max-width: 464px ) and ( orientation: portrait ) {

    img {
        height: 40px;
        width: 40px;
    }

    div h4 {
        font-size: 0.8em;
        padding-left: 0;
    }
  }
`