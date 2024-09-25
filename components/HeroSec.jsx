import React from 'react'
import Image from 'next/image'

const HeroSec = () => {
  return (
    <div className='herobg  flex justify-center  items-center w-screen h-screen'>
        <div className=' flex w-full  justify-between h-[35rem] items-end   max-w-[60rem]'>
            <div className=' max-w-[25rem]'>
                <p className=' text-white/60 font-serif'>SO, YOU WANT TO TRAVEL TO</p>
                <h1 className=' text-white text-[6rem] font-serif'>SPACE</h1>
                <p className=' text-white/60 font-serif'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className=' w-[15rem] h-[15rem] flex justify-center items-center bg-white rounded-full' >
                    <p className=' text-2xl'>EXPLORE</p>
            </div>
        </div>
    </div>
  )
}

export default HeroSec
