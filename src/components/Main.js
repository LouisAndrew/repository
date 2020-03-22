import React, { Component } from 'react'
import styled from 'styled-components'
import SymbolContext from '../SymbolContext'
import Card from './main-cards/Card'
import { ReactComponent as Back } from './back.svg'
import anime from 'animejs/lib/anime.es.js'

export default class Main extends Component { 

    backClick = () => {
      this.props.backClick()
    }

    componentDidMount = () => {
      anime({
        targets: '.card',
        opacity: [0, 1],
        translateY: [-100, 0],
        duration: 2000,
        delay: anime.stagger(100)
      })
    }

    render() {
        const ret = this.props.data.map(x => <Card {...x} />)
        return (
            <Container>
                
                <Wrapper>
                    {this.props.back && <Back onClick={this.backClick} id='back' />}
                    <Note>
                        <h3>{this.props.hero}</h3>
                    </Note>
                    <CardWr>
                      {ret}
                    </CardWr>

                </Wrapper>
            </Container>
        )
    }
}

const Wrapper = styled.div`
  ${({ theme }) => theme.fitContainer()}
  display: flex;
  flex-direction: column;
`

const Note = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  color: #fff;
`

const CardWr = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none
  }
`

const Container = styled.div`
  ${({ theme }) => theme.fitContainer()}
  background-color: ${({ theme }) => theme.prim};
  padding: 3em;
  position: relative;

  @media only screen and ( max-screen: 850px ) {
    
    & {
      padding: 0;
    }
  }

  #back {
    fill: #fff;
    transform: scale(1.5);
    position: absolute;
    transition: 0.2s;
    top: 2em;
    left: 2em;
  }

  #back:hover {
    fill: ${({ theme }) => theme.font};
  }
`