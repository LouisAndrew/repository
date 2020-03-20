import React from 'react'
import { ReactComponent as Icon } from './search.svg'
import styled from 'styled-components'

export default function Search(props) {

    const searchClick = () => {
        document.getElementById('form').classList.toggle('active')
    }

    const inpt = React.createRef()

    const submit = e => {
        e.preventDefault()
        props.submitSym(inpt.current.value.toUpperCase())
        inpt.current.value = ''
        searchClick()
    }

    return (
        <Form onSubmit={submit} id='form'>
            <Icon id='search-icon' onClick={searchClick} />
            <Input ref={inpt} placeholder='Search Here..' type='text' />
        </Form>
    )
}

const Form = styled.form`
  height: 50%;
  width: 25%;
  padding: 0 2em;
  position: relative;
  transition: 0.5s;
  ${({ theme }) => theme.center()};
  border-radius: 5px;

  #search-icon {
      fill: ${({ theme }) => theme.font};
      height: 3vh;
      width: 3vh;
      position: absolute;
      right: 0;
      transition: 0.5s;
  }

  & #search-icon:hover + input {
    opacity: 1;
  }

  & #search-icon:hover {
      opacity: 0.6;
  }

  &.active {
      background-color: ${({ theme }) => theme.prim};
  }
  
  &.active #search-icon {
      opacity: 1;
      fill: ${({ theme }) => theme.font};
  }

  &.active input {
      background-color: ${({ theme }) => theme.prim};
      opacity: 1;
  }
  @media only screen and ( max-width: 650px ) {
      
    & {
        width: 50%;
        padding: 0 1.5em;
    }

    input {
        font-size: 0.9em;
    }
  }
`

const Input = styled.input`
  ${({ theme }) => theme.fitContainer()};
  background-color: ${({ theme }) => theme.second};
  outline: none;
  border: none;
  color: #fff;
  font-size: 1.2em;
  padding: 0 1em;
  opacity: 0;
  transition: 0.2s;
  /* border-top-right-radius: 25px;
  border-bottom-left-radius: 25px; */
`