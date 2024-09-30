import React from 'react'
import Image from 'next/image'

const Crew = () => {
  return (
    <div className='herobgb flex justify-center flex-col  relative overflow-hidden items-center w-screen h-screen'>
        <div className=' w-full  -mb-10 text-center  md:text-start  top-[1rem] md:ml-[5rem] pt-28'>
            <span className=' text-white/30'>02</span><span className=' text-white ml-10'>MEET YOUR CREW</span>
        </div>
        <div className='  w-full flex flex-col-reverse lg:flex-row-reverse mt-20 lg:mt-0 justify-center items-center'>
        <div className=' w-[22rem] h-[27rem] lg:w-[30rem] lg:h-[45rem] mt-10 relative'>
            <Image src='/homepic/hero/person1.png' alt='pic'  fill className=' '/>
        </div>
        <div className=' flex flex-col text-center lg:text-start gap-2  px-10 lg:px-0 lg:max-w-[35rem] '>
            <p className=' text-white/40'>Commander </p>
            <h2 className=' text-white text-[40px] md:text-[60px] font-serif'>Douglas Hurley</h2>
            <p className=' text-white/60 text-sm md:text-base'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
        </div>
        </div>
    </div>
  )
}

export default Crew
