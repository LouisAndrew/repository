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
                    <h5>{props.address}</h5>
                    <h5>{props.exchange}</h5>
                    <h5>{props.gsector}</h5>
            </DetCont>
        </Container>
    )
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  /* @media ( max-width: 1050px ) {
      flex-direction: column;
      align-items: center;
  } */
`

const DetCont = styled.div`
  height: 150px;
  width: 60%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1em;


  h2 {
      margin-bottom: 1em;
      font-size: 1.5em;
  }

  h5 {
      color: ${({ theme }) => theme.font};
      line-height: 1.5em;
      font-size: 1em;
  }
/* 
  @media ( max-width: 1050px ) {

    div {
      margin-top: 2em;
      margin-left: 0;
    }

    h2 {
        margin-bottom: 0.25em;
    }
  } */

  @media only screen and ( max-width: 650px ) {
    
    h2 {
      font-size: 1.2em;
    }

    h5 {
      font-size: 0.8em;
    }
  }

  @media only screen and ( max-width: 400px ) {

    & {
      height: 100px;
    }

    h5 { 
      font-size: 0.5em;
    }
  }
`

const ImgCont = styled.div`
  width: 150px;
  height: 150px;

  #logo-img {
      height: 100%;
      width: 100%;
      border-radius: 15px;
  }

  @media only screen and ( max-width: 400px ) {
    
    & {
      height: 100px;
      width: 100px;
    }
  }
`