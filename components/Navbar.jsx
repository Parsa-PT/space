'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import {motion} from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [shownav , setShow] = useState(false)

  return (
    <>
     <div className=' w-full absolute top-7 md:top-0 xl:top-10 bg-[#0000001e] flex justify-between items-center md:pl-16 '>
            <div className=' flex justify-between items-center w-full px-10  md:px-0 md:w-10 '>
                <Image src='/homepic/hero/logo.png' alt='logo' width={40} height={40}/>
             
                {shownav ? (
                  <motion.div  className=' relative z-50' >
                    <Image src='/homepic/hero/close.png' onClick={()=> setShow(!shownav)} className=' md:hidden  cursor-pointer' alt='logo' width={29} height={25}/>
                  </motion.div>
                  ) : 
                (<motion.div  transition={{duration:0.2}}>
                    <Image src='/homepic/hero/menu.png' onClick={()=> setShow(!shownav)} className=' md:hidden re  cursor-pointer' alt='logo' width={29} height={25}/>
                </motion.div>
               )}
               
                

            </div>
            <div className=' w-[33rem] hidden  xl:block md:hidden  relative z-20 -mr-32 h-[0.01rem] bg-[#ffffff85]'/>
            <div className=' w-[45rem] h-[5rem] backdrop-blur-md bg-[#FFFFFF]/10 hidden md:flex justify-center px-16 items-center  '>
                <ul className=' text-white flex text-sm justify-between w-full  font-mono'>
                    <li>00 <span className=' ml-3'>HOME</span></li>
                    <li>01 <span className=' ml-3'>DESTINATION</span></li>
                    <li>02 <span className=' ml-3'>CREW</span></li>
                    <li>03 <span className=' ml-3'>TECHNOLOGY</span></li>

                </ul>
                
            </div>

            
    </div>

    <AnimatePresence>
    {shownav ? (
      <motion.div animate={{x:160}} exit={{x:500}} transition={{duration:0.5}} initial={{x:500}} className={` md:hidden backdrop-blur-[40px] bg-[#0B0D17]/30 absolute  h-screen  w-[70%]   `}>
        <ul className=' text-white flex flex-col text-sm justify-between mt-[10rem] mx-5 sm:mx-10 font-mono'>
            <li className=' mb-10 text-lg sm:text-xl'>00 <span className='  ml-3 '>HOME</span></li>
            <li className=' mb-10 text-lg sm:text-xl'>01 <span className=' ml-3'>DESTINATION</span></li>
            <li className=' mb-10 text-lg sm:text-xl'>02 <span className=' ml-3'>CREW</span></li>
            <li className=' mb-10 text-lg sm:text-xl'>03 <span className=' ml-3'>TECHNOLOGY</span></li>

        </ul>
        
        </motion.div>
    ) : null}
    </AnimatePresence>
    </>
   


  )
}

export default Navbar
