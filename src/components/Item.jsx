import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

import workImg from "../images/icon-work.svg"
import playImg from "../images/icon-play.svg"
import studyImg from "../images/icon-study.svg"
import exerciseImg from "../images/icon-exercise.svg"
import socialImg from "../images/icon-social.svg"
import selfCareImg from "../images/icon-self-care.svg"

export default function Item(props) {
    const { name, timeframes, keyword } = props;


    const icons = name === 'work' ? [workImg, "bg-lightRedWorkCustom"] :
        name === 'play' ? [playImg, "bg-softBluePlayCustom"] :
            name === 'study' ? [studyImg, "bg-lightRedStudyCustom"] :
                name === 'exercise' ? [exerciseImg, "bg-limeGreenExerCustom"] :
                    name === 'social' ? [socialImg, "bg-violetSocialCustom"] :
                        [selfCareImg, "bg-softOrangeSCCustom"]

    const containerStyle = `rounded-t-xl rounded-b-2xl ${icons[1]} hover:cursor-pointer`
    const headerStyle = `flex justify-end rounded-t-xl h-10 ${icons[1]}`

    const selectedTimeFrames = keyword === 'daily' ? timeframes.daily : keyword === 'weekly' ? timeframes.weekly : timeframes.monthly;
    const selectedWord = keyword === 'daily' ?
        'yesterday' : keyword === 'weekly' ?
            'last week' : 'last month';

    const hoverOn = () => {
        const element = document.getElementById(name)
        element.classList.remove("bg-darkBlueCustom")
        element.classList.add("bg-desaturatedBlueCustom")
    }

    const hoverOut = () => {
        const element = document.getElementById(name)
        element.classList.remove("bg-desaturatedBlueCustom")
        element.classList.add("bg-darkBlueCustom")
    }

    return (
        <>
            <div onMouseOver={hoverOn} onMouseOut={hoverOut} className={containerStyle}>
                <span className={headerStyle}>
                    <img className='mr-3 bg-no-repeat w-20 h-10 object-cover object-center' src={icons[0]} alt={name} />
                </span>
                <div id={name} className='px-5 pt-5 pb-5 rounded-xl bg-darkBlueCustom'>
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
