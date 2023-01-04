import React,{useState} from 'react'

import ItemsList from './ItemsList'
import Panel from './Panel'


export default function App() {

    const [keyword, setKeyword] = useState('daily');

    const switchKeyword = (key) => {
        setKeyword(key)
    }


    return (
        <div className='flex justify-center place-items-center min-h-screen bg-veryDarkBlueCustom box-border'>
            <div className='overflow-hidden grid grid-rows-layout grid-cols-layout gap-5 content-between text-white text-lg'>
                <Panel switchKeyword={switchKeyword}/>
                <ItemsList keyword={keyword}/>
            </div>

        </div >
    )
}
