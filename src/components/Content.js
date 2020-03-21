import React, { Component } from 'react'
import styled from 'styled-components'
import Chart from './data/Chart'
import Trends from './data/Trends'
import Profile from './data/Profile'
import Quote from './data/Quote'
import News from './data/News'
import SymbolContext from '../SymbolContext'
import Loading from './misc/Loading'
import Error from './misc/Error'
import { ReactComponent as Back } from './back.svg'

export default class Content extends Component {
    static contextType = SymbolContext

    state = {
        doneLoading: [ false, false, false ],
        dataAvailable: [ true, true, true ],
        sym: this.context.sym
    }

    click = sym => {
        this.context.setSym(sym)
    }

    clickBack = () => {
        this.context.setSym('')
    }

    fire = index => {
        console.log('firing')
        this.setState(prev => {
            let temp = prev
            temp.doneLoading[index] = true
            temp.dataAvailable[index] = true
            return temp
        })
    }

    reject = i => {
        this.setState(prev => {
            let temp = prev
            temp.doneLoading[i] = true
            temp.dataAvailable[i] = false
            return temp
        })
    }

    countLoad = () => {
        let count = 0

        this.state.doneLoading.forEach(x => {
            if (x) count++
        })

        return count
    }
    
    componentDidUpdate = () => {
        if (this.context.sym !== this.state.sym) {
            this.setState(prev => {
                let temp = prev
                temp.doneLoading = [ false, false, false ]
                temp.sym = this.context.sym
                return temp
            })
        }
    }

    render() {
        const isReady = this.countLoad() > 1 ? true : false
        const notAvailable = this.state.dataAvailable.some(x => !x)
        const noScroll = !isReady || notAvailable

        const screen = window.matchMedia('( max-width: 850px )')

        if (screen.matches) {
            document.body.style.overflowY = noScroll ? 'hidden' : 'scroll'
        } else {
            document.body.style.overflowY = 'hidden'
        }
        

        return (
            <Container noScroll={!isReady || notAvailable}>

                {!isReady && <Loading />}
                {notAvailable && <Error />}
                {isReady && !notAvailable ? <Back id='back' onClick={this.clickBack} /> : <></>}

                <Wrapper className='upper'>
                    <ProfileWr doneLoading={this.state.doneLoading[0]} className='profile'>
                        <Profile reject={this.reject} fire={this.fire} index={0} />
                        {this.state.doneLoading[0] && isReady ? <Quote /> : <></>}
                    </ProfileWr>
                    <ChartsWr reject={this.reject} fire={this.fire} index={1} className='charts'>
                        <Chart />
                    </ChartsWr>
                </Wrapper>

                <Wrapper>
                    <NewsWr className='news'>
                        {isReady && !notAvailable ? <News /> : <></>}
                    </NewsWr>
                    <TrendsWr className='trends'>
                        <Trends reject={this.reject} fire={this.fire} index={2} />
                    </TrendsWr>
                </Wrapper>

            </Container>
        )
    }
}


const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3em;
  background-color: ${({ theme }) => theme.prim};
  position: relative;

  #back {
      position: absolute;
      top: 3vh;
      left: 3vh;
      fill: #fff;
      transform: scale(1.5);
  }

  #back:hover {
      fill: ${({ theme }) => theme.font};
  }
  
  /* mobile */
  @media only screen and ( max-width: 440px ) and ( orientation: portrait ) {
      
      & {
          height: ${props => props.noScroll ? '100%' : '200%'};
          padding: 0;
      }

      & > div:first-child {
        margin-bottom: 3em;
      }
  }

  @media only screen and ( max-width: 850px ) and ( orientation: landscape ) {

      & {
        height: ${props => props.noScroll ? '100%' : '200%'};
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

  @media only screen and ( min-width: 3000px ) {

    #back {
        transform: scale(2.5);
        padding: 6em;
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
  background-color: ${({ theme }) => theme.secondTrans};
  display: flex;
  flex-direction: column;
  padding: 1em;
  justify-content: ${props => props.doneLoading ? 'space-between' : 'center'};
  align-items: ${props => !props.doneLoading && 'center'};
  

  @media only screen and ( min-width: 1920px ) {
    
    & {
      padding: 3em;
    }
  }

  /* tablet */
  @media only screen and ( max-width: 1050px ) and ( orientation: portrait ) {
      
      & {
          flex-direction: row;
      }
    }

  /* PHONE portrait */
  @media only screen and ( max-width: 440px ) and ( orientation: portrait ) {

      & {
          flex-direction: column;
      }
  }

  /* phone landscape */
  @media only screen and ( max-width: 440px ) and ( orientation: landscape ) {
      
    & {
        flex-direction: row;
    }
  }
`

const ChartsWr = styled.div`
  height: 100%;
  width: 60%;
  background-color: ${({ theme }) => theme.prim};
  ${({ theme }) => theme.center()};
`

const NewsWr = styled(ChartsWr)`
  background-color: ${({ theme }) => theme.secondTrans};
`

const TrendsWr = styled.div` 
  height: 100%;
  width: 35%;
  background-color: ${({ theme }) => theme.secondTrans};
  position: relative;
  ${({ theme }) => theme.center()};
`