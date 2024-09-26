import React from 'react'
import Image from 'next/image'

const HeroSec = () => {
  return (
    <div className='herobg herobgr flex justify-center -z-10  relative overflow-hidden items-center w-screen h-screen'>
     
        <div className=' flex w-full flex-col xl:flex-row justify-center  pt-20  items-center xl:justify-between h-[40rem] xl:h-[35rem] xl:items-end   xl:max-w-[60rem]'>
            <div className=' max-w-[25rem]  text-center xl:text-start'>
                <p className=' text-white/60 font-serif'>SO, YOU WANT TO TRAVEL TO</p>
                <h1 className=' text-white text-[6rem] font-serif'>SPACE</h1>
                <p className=' text-white/60 text-[12px] lg:text-base lg:mx-0 mx-6 font-serif'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className=' w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem] mt-10  flex justify-center items-center bg-white rounded-full' >
                    <p className=' text-xl lg:text-2xl'>EXPLORE</p>
            </div>
        </div>
    </div>
  )
}

export default HeroSec
