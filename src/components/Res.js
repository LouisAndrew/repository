import React from 'react'
import Main from './Main'

export default function Res(props) {

    let data = props.data.map(x => ({ name: x.description, sym: x.symbol }))
    console.log(props.data)

    const hero = 'Showing Results'
    console.log(data)

    const backClick = () => {
        props.backDefault()
    }

    return <Main backClick={backClick} back={true} data={data} hero={hero} />
}
