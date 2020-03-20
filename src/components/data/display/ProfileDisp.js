import React from 'react'
import styled from 'styled-components'

export default function ProfileDisp(props) {

    const imgUrl = props.weburl ? props.weburl.split('www.')[1]: `${props.name.split(' ')[0]}.com`

    return (
        <Container>
            <ImgCont>
                <img id='logo-img' src={`//logo.clearbit.com/${imgUrl && imgUrl.slice(0, imgUrl.length-1)}`} alt={props.name} />
            </ImgCont>
            <DetCont>
                    <h2>{props.name}</h2>
                    <div>
                      <h5>{props.address}</h5>
                      <h5>{props.exchange}</h5>
                      <h5>{props.gsector}</h5>
                    </div>
            </DetCont>
        </Container>
    )
}

const DetCont = styled.div`
  height: 150px;
  width: 60%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 1em;


  div {
  }

  h2 {
      margin-bottom: 1em;
      font-size: 1.6em;
  }

  div h5 {
      color: ${({ theme }) => theme.font};
      line-height: 1.5em;
      font-size: 0.8em;
  }
`

const ImgCont = styled.div`
  width: 150px;
  height: 150px;
  ${({ theme }) => theme.center()};

  #logo-img {
      height: 100%;
      width: 100%;
      border-radius: 20px;
  }

  @media only screen and ( max-width: 400px ) {
    
    & {
      height: 100px;
      width: 100px;
    }
  }
`

const Container = styled.div`
  height: 65%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  /* @media ( max-width: 1050px ) {
      flex-direction: column;
      align-items: center;
  } */

  @media only screen and ( max-width: 1050px ) and ( min-width: 464px ) and ( orientation: portrait ) {
      
      & {
          flex-direction: column;
          /* background-color: blue; */
          height: 100%;
          width: 70%;
          justify-content: center;
      }

      div:first-child {
        height: 110px;
        width: 110px;
      }

      div:nth-child(2) {
        height: 50%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* background-color: pink; */
      }

      h2 {
        margin-bottom: 1em;
      }

      h5 {
        line-height: 0.5em;
      }
  }

  /* tablet */
  @media only screen and ( max-width: 1050px ) and ( min-width: 464px ) and ( min-height: 1200px ) and ( orientation: portrait ) {

    div:first-child {
        height: 150px;
        width: 150px;
      }

    & {
      justify-content: center;
    }

    div h5 {
      font-size: 1em;
    }
  }

  @media only screen and ( max-width: 464px ) and ( orientation: portrait ) {

    div:first-child {
      height: 90px;
      width: 90px;
    }

    div:nth-child(2) {
      height: 90px;
    }

    h2 {
      font-size: 1em;
    }

    div h5 {
      font-size: 0.6em;
    }
  }

  @media only screen and ( max-width: 464px ) and ( orientation: portrait ) and ( max-height: 700px ) {
    
    div:first-child {
      height: 70px;
      width: 70px;
    }

    h2 {
      font-size: 1em;
    }

    div h5 {
      font-size: 0.6em;
    }
  }

  @media only screen and ( max-width: 850px ) and ( orientation: landscape ) {

    div:first-child {
      height: 50px;
      width: 50px;
    }

    div:nth-child(2) {
      height: 100px;
    }

    h2 {
      margin-bottom: 0;
      font-size: 0.8em;
    }

    div h5 {
      font-size: 0.5em;
    }
  }
`