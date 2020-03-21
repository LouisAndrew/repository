import React from 'react'
import styled from 'styled-components'

export default function NewsDisp(props) {

  let ret = [ ]
  for (let i in props) {
    const temp = <Item id={`item-${i}`} key={i}>
                  <Inner onClick={() => click(i)}>
                    <Img img={props[i].image}></Img>
                      <Headline>
                        <h5>{props[i].headline}</h5>
                      </Headline>
                    </Inner>
                    <Summary id={`summary-${i}`}>
                      <p>{props[i].summary}<br /><br /><a target='_blank' href={props[i].url}>learn more</a></p>
                  </Summary>
                </Item>
    ret = [...ret, temp]
  }

  const click = i => {
    document.getElementById(`summary-${i}`).classList.toggle('active')
    document.getElementById(`item-${i}`).classList.toggle('active')
  }

  return (
    <Container>

      <CompanyNews>
        <h3>Company News...</h3>
      </CompanyNews>

      <NewsWrapper>
        {ret}
      </NewsWrapper>

    </Container>
  )
}

const CompanyNews = styled.div`
  height: 20%;
  width: 100%;
  background-color: ${({ theme }) => theme.second};
  display: flex;
  align-items: center;
  padding-left: 4vh;
  color: #fff;
`

const NewsWrapper = styled.div`
  height: min-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.prim};

`

const Item = styled.div`
  width: 100%;
  /* should be font */
  background-color: pink;
  display: flex;
  flex-direction: column;
  margin: 2vh 0;
  transition: 0.3s;
  opacity: 0.5;

  &.active {
    background-color: rgba(21, 21, 21, 0.9);
  }

  &.active div h5 {
    color: #fff;
  }

  &:hover {
    opacity: 1;
  }

  @media only screen and ( min-width: 3000px ) {
    
    & {
      margin: 0.5vh;
    }

    div h5 {
      font-size: 1em;
    }

    div p {
      font-size: 0.9em;
    }
  }

  @media only screen and ( max-width: 850px ) {

    & {
      margin: 3em 0;
      opacity: 1;
      background-color: rgba(21, 21, 21, 0.9);
    }

    & div h5 {
      color: #fff;
    }
  }
`

const Inner = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  padding: 0 1em;
  z-index: 2;

  @media only screen and ( min-width: 3000px ) {

    & {
      height: 100px;
    }

    & > div {
      height: 100px;
    }

    & div:first-child {
      width: 100px;
    }
  }

  &:hover {
    cursor: pointer;
  }
`

const Img = styled.div`
  height: 50px;
  width: 50px;
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
`

const Headline = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5em 0 0.5em 2em;
  color: #000;
  transition: 0.3s;

  & h5 {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`

const Summary = styled.div`
  width: 100%;
  padding: 0;
  height: 0;
  color: #fff;
  background-color: rgba(21, 21, 21, 0.9);
  transition: 0.5s;
  z-index: -1;

  p {
    font-size: 0.8em;
    opacity: 0;
    transition: 0.3s;
  }

  &.active {
    height: min-content;
    padding: 1em;
    z-index: 1;
  }

  &.active p {
    opacity: 1;
  }

  a {
    margin-top: 1em;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
  }

  a:hover {
    cursor: pointer;
  }

  a:visited, a:active {
    color: #fff;
    text-decoration: none;
  }

  @media only screen and ( max-width: 850px ) {

    & {
      position: relative;
      top: 50px;
    }

    &.active {
      z-index: 2;
    }
  }
`

const Container = styled.div`
  ${({ theme }) => theme.fitContainer()};
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`