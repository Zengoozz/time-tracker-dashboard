import React from 'react'

import { BsThreeDots } from 'react-icons/bs'

export default function Item(props) {
    const { name, icon, color, timeframes, keyword } = props;
    const containerStyle = `col-span-1 row-span-1 relative h-4/5 rounded-t-xl rounded-b-2xl hover:cursor-pointer ${color}`
    const iconStyle = `mr-3 bg-${icon} bg-no-repeat bg-contain bg-right-top w-full h-10`
    console.log(iconStyle)
    const selectedTimeFrames = keyword === 'daily' ? timeframes.daily : keyword === 'weekly' ? timeframes.weekly : timeframes.monthly;
    const selectedWord = keyword === 'daily' ? 'yesterday' : keyword === 'weekly' ? 'last week' : 'last month';
    return (
        <>
            <div className={containerStyle}>
                <span className='flex justify-end rounded-t-xl'>
                    <span className={iconStyle}></span>
                </span>
                <div className=' px-5 pt-5 pb-5 w-full absolute bg-darkBlueCustom top-8 rounded-xl hover:bg-blueCustom box-border'>
                    <span className='flex justify-between'>
                        <p className='text-base font-medium capitalize'>
                            {name}
                        </p>
                        <BsThreeDots className='text-paleBlueCustom hover:cursor-pointer hover:text-white' />
                    </span>
                    <p className='mt-7 mb-4 text-5xl leading-5 font-light'>
                        {selectedTimeFrames.current}hrs
                    </p>
                    <p className='text-xs font-normal text-paleBlueCustom capitalize'>
                        {selectedWord} - {selectedTimeFrames.previous}hrs
                    </p>
                </div>
            </div>

        </>
    )
}
