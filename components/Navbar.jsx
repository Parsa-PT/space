import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className=' w-full absolute top-10 bg-[#0000001e] flex justify-between items-center pl-16 '>
            <div>
                <Image src='/homepic/hero/logo.png' alt='logo' width={40} height={40}/>
            </div>
            <div className=' w-[33rem]  xl:block md:hidden  relative z-20 -mr-32 h-[0.01rem] bg-[#ffffff85]'/>
            <div className=' w-[45rem] h-[5rem] backdrop-blur-md bg-[#FFFFFF]/10 flex justify-center px-16 items-center  '>
                <ul className=' text-white flex text-sm justify-between w-full  font-mono'>
                    <li>00 <span className=' ml-3'>HOME</span></li>
                    <li>01 <span className=' ml-3'>DESTINATION</span></li>
                    <li>02 <span className=' ml-3'>CREW</span></li>
                    <li>03 <span className=' ml-3'>TECHNOLOGY</span></li>

                </ul>
                
            </div>
    </div>
  )
}

export default Navbar
