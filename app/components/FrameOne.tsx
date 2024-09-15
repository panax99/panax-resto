"use client";
import React from 'react'
import Navbar from './Navbar'
import Button from './buttons/Button'
import { motion } from 'framer-motion'

const FrameOne = () => {
  const platsVariants = {
    visible: {

    },
    hidden: {

    }
  }
  return (
    <>
      <div className='img-fond w-full bg-slate-900 flex flex-col justify-between items-center h-[100vh] overflow-x-hidden'>
          <Navbar/>
          <div className="text-white flex flex-col items-center justify-center" style={{fontFamily:"Canela "}}>
            <motion.p 
              initial={{y:50,opacity:0}} 
              animate={{y:0,opacity:1}}
              transition={{duration: 0.5,stiffness:500}} 
              className=' text-center mb-4'
            >
              {"Feeling Hungry? Let's"}
            </motion.p>
            <motion.p 
              initial={{y:50,opacity:0}} 
              animate={{y:0,opacity:1}}
              transition={{duration: 0.5,delay:0.2}} 
              className=' text-5xl text-center'
            >
              Discover  Divine
            </motion.p>
            <motion.p 
              initial={{y:50,opacity:0}} 
              animate={{y:0,opacity:1}}
              transition={{duration: 0.5,delay:0.3}} 
              className=' text-5xl text-center'
            >
              Taste  Of  Epicurean
            </motion.p>
            <motion.div 
              initial={{scale:0,opacity:0}} 
              animate={{scale:1,opacity:1}}
              transition={{delay:1.2,duration:0.4,stiffness:500}} 

              className="items-center justify-center mt-6" 
              style={{fontFamily:"Arial "}}
            >
              <Button className='' color='bg-red-600' textButton='BOOK TABLE' hover='bg-red-300'/>
            </motion.div>
          </div>
          <motion.div 
            initial={{opacity:0}} 
            animate={{opacity:1}}
            transition={{delay:0.7,stiffness:500}} 
            className="p-2 w-full space-x-4 flex justify-evenly top[100px] infinite overflow-x-hidden"
          >
            <div className="img-food p-16 bg-slate-500 rounded-full shadow-xl hover:cursor-pointer"></div>
            <div className="img-food1 p-16 bg-slate-500 rounded-full shadow-xl hover:cursor-pointer"></div>
            <div className="img-food p-16 bg-slate-500 rounded-full shadow-xl hover:cursor-pointer"></div>
            <div className="img-food1 p-16 bg-slate-500 rounded-full shadow-xl hover:cursor-pointer"></div>
            <div className="img-food p-16 bg-slate-500 rounded-full shadow-xl hover:cursor-pointer"></div>
            <div className="img-food1 p-16 bg-slate-500 rounded-full shadow-xl hover:cursor-pointer"></div>
            <div className="img-food p-16 bg-slate-500 rounded-full shadow-xl hover:cursor-pointer focus:border-solid border-gray-100 border-collapse"></div>
          </motion.div>
          <div className=" bg-white p-6 w-full" style={{borderRadius:"100% 100% 0 0"}}></div>
      </div>   
    </>
  )
}

export default FrameOne