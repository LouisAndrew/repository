import React from 'react'
import Main from './Main'

export default function Show() {
    const data = [
        {
            name: 'amazon',
            sym: 'AMZN'
          },
          {
            name: 'facebook',
            sym: 'FB'
          },
          {
            name: 'twitter',
            sym: 'TWTR'
          },
          {
            name: 'tesla',
            sym: 'TSLA'
          },
          {
            name: 'apple',
            sym: 'AAPL'
          },
          {
            name: 'starbucks',
            sym: 'SBUX'
          },
          {
            name: "microsoft",
            sym: 'MSFT'
          },
          {
            name: 'spotify',
            sym: 'SPOT'
          },
          {
            name: 'nike',
            sym: 'NKE'
          },
          {
            name: 'paypal',
            sym: 'PYPL'
          },
          {
            name: 'visa',
            sym: 'V'
          }
    ]
    const hero = 'Our Recommendations:'
    return <Main data={data} hero={hero} />
}
