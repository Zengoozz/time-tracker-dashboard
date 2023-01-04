import React from 'react'

import Item from '../components/Item'
import data from '../data/data.json'

export default function ItemsList({keyword}) {


    return (
        <>
            {data.map(item=> {
                return (
                    <Item
                        key={item.title}
                        name={item.title}
                        timeframes={item.timeframes}
                        keyword={keyword} />
                )
            })}
        </>
    )
}
