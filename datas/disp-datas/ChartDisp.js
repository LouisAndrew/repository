import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'
// import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'

export default function ChartDisp(props) {

    let data = []
    const hiColor = '#BE60DF'
    const loColor = '#5C62E4'
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']
    //change the data format to objects..
    if (props.time.length === props.high.length) {
        for (let i = 0; i < props.time.length; i++) {
            const num = ( props.low[i] + props.high[i] ) / 2
            const temp = {
                val: num.toFixed(2),
                // high: props.high[i],
                // low: props.low[i],
                time: `${props.time[i].getDate()} ${months[props.time[i].getMonth()]} ${props.time[i].getFullYear()}`
            }
            data[i] = temp
        }
    }  

    //return 1 grafik aja ato dua??
    //area ato line aja nih?
    return (
        <ResponsiveContainer height='100%' width='100%'>
        {/* <AreaChart data={data}>
                <defs>
                    <linearGradient id="colorH" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="10%" stopColor={hiColor} stopOpacity={0.5}/>
                    <stop offset="45%" stopColor={loColor} stopOpacity={0.5}/>
                    <stop offset="95%" stopColor="#3D3C3C" stopOpacity={0.2}/>
                    </linearGradient>
                    <linearGradient id="colorL" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#006BE8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#000" stopOpacity={0.2}/>
                    </linearGradient>
                </defs>
                <Legend wrapperStyle={{color: '#fff', paddingTop: '10px'}}/>
                <XAxis hide={true} stroke={'#fff'} dataKey='time' />
                <YAxis tickLine={false} strokeWidth={2} stroke='#fff' domain={['dataMin - 25', 'dataMax + 25']}  />
                <Tooltip formatter={( v, n, pr ) => [ v, 'Avg Price' ]} itemStyle={{ color: 'fff', fontWeight: 'bold' }} contentStyle={{backgroundColor: 'rgba(0, 0, 0, 0.4)', borderRadius: '15px', color: '#fff', border: 'none'}} />
                <Area name='Avg Stock Price for The Last 100 Days' dot={false} type='monotone' dataKey='data' fillOpacity={1} strokeWidth={2} fill='url(#colorH)' stroke={hiColor} />
                {/* <Area hide={false} name='Low' dot={false} type='monotone' dataKey='low' />
                <Area hide={false} name='High' dot={false} type='monotone' dataKey='high' /> */}
            {/* </AreaChart> */}
            <LineChart data={data}>
                <Legend wrapperStyle={{color: '#fff', paddingTop: '10px'}}/>
                <XAxis hide={true} stroke={'#fff'} dataKey='time' />
                <YAxis tickLine={false} strokeWidth={2} stroke='#fff' domain={['dataMin - 25', 'dataMax + 25']}  />
                <Tooltip formatter={( v, n, pr ) => [ v, 'Avg Price' ]} itemStyle={{ color: 'fff', fontWeight: 'bold' }} contentStyle={{backgroundColor: 'rgba(0, 0, 0, 0.4)', borderRadius: '15px', color: '#fff', border: 'none'}} />
                <Line name='Avg Stock Price for The Last 100 Days' type='monotone' dataKey='val' stroke={hiColor} dot={false} strokeWidth={3} />
            </LineChart>
        </ResponsiveContainer>
    )
}
