import React from 'react'
import Image from 'next/image'

const Technology = () => {
  return (
    <div  className='herobgT flex justify-center flex-col  relative overflow-hidden items-center w-screen h-screen'>
      <div className=' w-full  -mb-10 text-center  md:text-start  top-[1rem] md:ml-[5rem] pt-28'>
            <span className=' text-white/30'>03</span><span className=' text-white ml-10'>SPACE LAUNCH 101</span>
        </div>

        <div className='  w-full flex flex-col lg:flex-row-reverse mt-20 lg:mt-0 justify-center items-center'>
            <div className=' w-[22rem] h-[27rem] lg:w-[30rem] lg:h-[30rem] mt-10 relative'>
                <Image src='/homepic/hero/bit1.png' alt='pic'  fill className=' '/>
            </div>
            <div className=' flex flex-col text-center lg:text-start gap-3  px-10 lg:px-0 lg:max-w-[35rem] '>
                <p className=' text-white/40'>THE TERMINOLOGY…</p>
                <p className=' text-white text-[60px]'>LAUNCH VEHICLE</p>
                <p className=' text-white/60'>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
            </div>
            <div  className=' flex flex-col gap-5 mr-20'>
                <div className=' w-[4rem] h-[4rem] rounded-full border  flex justify-center items-center  border-white'>
                    <p className=' text-white font-serif text-3xl'>1</p>
                </div>
                <div className=' w-[4rem] h-[4rem] rounded-full border  flex justify-center items-center  border-white'>
                    <p className=' text-white font-serif text-3xl'>2</p>
                </div>
                <div className=' w-[4rem] h-[4rem] rounded-full border  flex justify-center items-center  border-white'>
                    <p className=' text-white font-serif text-3xl'>3</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Technology
