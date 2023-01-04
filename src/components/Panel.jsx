import React from 'react'

import image from "../images/image-jeremy.png"

export default function Panel({switchKeyword}) {
    const timeline = ['daily', 'weekly', 'monthly'];

    const passState = (e) => {
        switchKeyword(e.target.id)
    }

    return (
        <div className='row-span-full bg-darkBlueCustom rounded-xl'>
            <div className='px-5 pt-7 pb-5 bg-blueCustom rounded-xl'>
                <img className='w-14 h-14 border-2 border-white rounded-full' src={image} alt="personal" />
                <p className='pt-5 text-xs font-light text-paleBlueCustom'>
                    Report for
                </p>
                <p className='pb-9 text-3xl break-words font-light'>
                    Jeremy Robson
                </p>
            </div>
            <div className='px-5 pt-5 flex-col text-sm text-paleBlueCustom'>
                <ul>
                    {
                        timeline.map(item => {
                            return (
                                <li
                                    onClick={passState}
                                    id={item}
                                    key={item}
                                    className='pt-2 pb-1 capitalize hover:text-white hover:cursor-pointer active:text-white'>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        </div>
    )
}
