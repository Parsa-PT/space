import React from 'react'
import Image from 'next/image'

const DestinationA = () => {
  return (
    <div className='herobgA  flex justify-center flex-col  relative overflow-hidden items-center w-screen h-screen'>
        <div className=' w-full  -mb-20 text-center  md:text-start  top-[1rem] md:ml-[5rem] pt-20'>
            <span className=' text-white/30'>01</span><span className=' text-white ml-10'>PICK YOUR DESTINATION</span>
        </div>
        <div className=' flex w-full flex-col   mt-28  items-center xl:flex-row justify-center  gap-10 xl:gap-20'> 
            <div className=' w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem] xl:w-[25rem] xl:h-[25rem]  rounded-full bg-red-200 relative'>
                <Image src='/homepic/hero/moon.png' alt='pic'  fill className=' rounded-full'/>
                <Image src='/homepic/hero/shadow.png' alt='pic'  fill className=' rounded-full'/>
            </div>
            <div className=' flex flex-col  items-center justify-center xl:items-start px-[15rem] xl:px-0 gap-2  xl:max-w-[25rem]'>
                <ul className=' flex gap-6 text-[12px] text-white'>
                    <li>MOON</li>
                    <li>MARS</li>
                    <li>EUROPA</li>
                    <li>TITAN</li>
                </ul>
                <p className=' text-white text-[50px] md:text-[80px]  font-serif'>MOON</p>
                <p className=' text-white/70  text-center xl:text-start  text-[11px] xl:text-[14px]'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                <div  className='h-[2px] w-full my-5 bg-white/30'/>
                <div className=' flex-col md:flex-row gap-2 items-center flex w-full justify-between xl:pr-20'>
                <div className='  font-serif flex flex-col gap-1'>
                    <span className=' text-white/50 text-center md:text-start text-[11px]'>AVG. DISTANCE</span>
                    <span className=' text-white text-[24px]'>384,400 km</span>
                </div>
                <div className='  font-serif flex flex-col gap-1'>
                    <span className=' text-white/50 text-[11px]'>Est. travel time</span>
                    <span className=' text-white text-[24px]'>3 days</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DestinationA
