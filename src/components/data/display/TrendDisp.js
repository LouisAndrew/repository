import React from 'react'
import { PieChart, Pie, ResponsiveContainer, Legend, Tooltip } from 'recharts'

export default function TrendDisp(props) {

    const hover = e => {
        console.log(e)
        console.log('hover')
        e.outerRadius += 10
    }
    
    const data = [
                    {
                        type: 'Buy',
                        val: props.buy + props.strongBuy,
                        fill: '#00BE08'
                    },
                    // {
                    //     type: 'Strong Buy',
                    //     val: props.strongBuy,
                    //     fill: '#038B08'
                    // },
                    {
                        type: 'Hold',
                        val: props.hold,
                        fill: '#929292'
                    },
                    {
                        type: 'Sell',
                        val: props.sell + props.strongSell,
                        fill: '#CC0000'
                    },
                    // {
                    //     type: 'Strong Sell',
                    //     val: props.strongSell,
                    //     fill: '#850000'
                    // }
                ]
    //for screen less than 1050px??
    const horizontalBig = window.matchMedia( '(min-width: 1050px)' )
    const horizontalSmall = window.matchMedia( '(max-width: 464px)' )
    const horizontal = horizontalBig.matches || horizontalSmall.matches

    const wrapping = horizontal ? { right: '1em' } : { bottom: '2em' }

    const wrapperStyle = { 
        color: '#fff',
        position: 'absolute',
        ...wrapping
    }

    return (
        <ResponsiveContainer width='100%' height='100%'>
            <PieChart>
                <Pie onMouseEnter={hover} stroke='#' innerRadius='50%' outerRadius='70%' data={data} dataKey='val' nameKey='type' />
                <Tooltip itemStyle={{color: '#fff'}} contentStyle={{backgroundColor: 'rgba(0, 0, 0, 0.4)', borderRadius: '15px', color: '#fff'}} />
                {horizontal ? <Legend wrapperStyle={wrapperStyle} align='right' verticalAlign='middle' layout='vertical' /> : <Legend wrapperStyle={wrapperStyle} align='center' verticalAlign='bottom' layout='vertical' />}
                {/* <Legend wrapperStyle={{color: '#fff'}} align='right' verticalAlign='middle' layout='vertical' /> */}
            </PieChart>
        </ResponsiveContainer>
    )
}
