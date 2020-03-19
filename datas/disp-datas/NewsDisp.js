import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import styled from 'styled-components'

export default function NewsDisp(props) {
    console.log(props)
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 2, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
          slidesToSlide: 4, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      }

    let content = [ ]
    for (let x in props) {
        const temp = <Div>
                        <Inner>
                            <Img img={props[x].image}></Img>
                        </Inner>
                        <Inner>
                            <h5><a href={props[x].url} target='_blank'>{props[x].headline}</a></h5>
                        </Inner>
                    </Div>

        content = [...content, temp]
     }

    return (
        <Container>
            <Carousel containerClass='carousel' itemClass='item' responsive={responsive} infinite centerMode>
                {content}
            </Carousel>
        </Container>
    )
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  ${({ theme }) => theme.center()};

  .carousel {
      height: 100%;
      width: 35vw;
  }

  .item {
      padding: 0 6em;
  }

  @media only screen and ( max-width: 1050 ) {
      
    .carousel {
        height: 100%;
        width: 100%;
        background-color: blue;
    }
  }
`

const Div = styled.div`
  height: 200px;
  width: 150px;
  background-color: ${({ theme }) => theme.primary};;
  border-radius: 10px;
  transition: 0.5s;
  opacity: 0.5;
  display: flex;
  flex-direction: column;

  &:hover { 
      transform: scale(1.2);
      opacity: 1;
  }
`

const Inner = styled.div`
  height: 50%;
  width: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  h5 {
      padding: 1em;
  }

  a {
      color: #fff;
      text-decoration: none;
  }

  a:visited, a:active {
      color: #fff;
      text-decoration: none;
  }
`

const Img = styled.div`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  ${({ theme }) => theme.fitContainer()};
  background-color: ${({ theme }) => theme.primTrans};
  background-image: url(${props => props.img};);
  background-size: cover;
  background-position: center;
`