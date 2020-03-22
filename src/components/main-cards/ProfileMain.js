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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3em 0;

  img {
      height: 120px;
      width: 120px;
      border-radius: 10px;
  }

  div {
      ${({ theme }) => theme.fitContainer()};
      ${({ theme }) => theme.flex()};
      ${({ theme }) => theme.justifyContent('flex-start')};
      ${({ theme }) => theme.alignItems('flex-end')};
      width: 150%;
      align-self: flex-start;
  }

  div h4 {
      font-size: 2em;
      color: #fff;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      white-space: nowrap;
  }

  @media only screen and ( max-width: 440px ) and ( orientation: portrait )  {

      & {
          padding: 2vh 0;
      }
      
      img {
          height: 40px;
          width: 40px;
      }

      div h4 {
          font-size: 0.6em;
      }
  }

  @media only screen and ( max-width: 440px ) and ( min-height: 660px ) and ( orientation: portrait ) {

      div h4 {
          align-self: center;
      }
  }
`