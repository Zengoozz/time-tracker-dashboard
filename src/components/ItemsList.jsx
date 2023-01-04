import React from 'react'

import Item from '../components/Item'
import data from '../data/data.json'

export default function ItemsList({keyword}) {
    const items = [
        {
            "icon": 'workImg',
            "color": "bg-lightRedWorkCustom"
        }, {
            "icon": 'playImg',
            "color": "bg-softBluePlayCustom"
        },
        {
            "icon": 'studyImg',
            "color": "bg-lightRedStudyCustom"
        },
        {
            "icon": 'exerciseImg',
            "color": "bg-limeGreenExerCustom"
        },
        {
            "icon": 'socialImg',
            "color": "bg-violetSocialCustom"
        },
        {
            "icon": 'selfCareImg',
            "color": "bg-softOrangeSCCustom"
        },
    ]
    const itemData = data.map(item => item)


    return (
        <>
            {items.map((item,index) => {
                return (
                    <Item
                        key={itemData[index].title}
                        name={itemData[index].title}
                        timeframes={itemData[index].timeframes}
                        keyword={keyword}
                        icon={item.icon}
                        color={item.color} />
                )
            })}
        </>
    )
}
