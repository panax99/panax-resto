"use client";
import React from 'react'
import Slide from './FrameThree/Slide'
import { motion } from 'framer-motion'


const FrameThree = () => {
  return (
    <div className='mt-16 p-16 bg-rose-50 pe-0'>
        <div className="flex flex-col md:flex-row justify-between items-start space-y-7">

            <div className="flex flex-col md:w-5/12 w-auto">
                <motion.p initial={{y:100,opacity:0}} 
                    animate={{y:0,opacity:1}} 
                    className='font-bold text-red-500'
                >
                    New Recipes
                </motion.p>
                <motion.p initial={{y:100,opacity:0}} 
                    animate={{y:0,opacity:1}} 
                    className='text-5xl mt-2 font-semibold' style={{fontFamily: "Canela"}}
                >
                    Taste Our New Recipe
                </motion.p>
                <motion.p initial={{y:100,opacity:0}} 
                    animate={{y:0,opacity:1}} 
                    className='mt-5'
                >
                    There are many variations of passages of Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ullam, quisquam error rem similique illo!
                </motion.p>
                <div className="flex items-center justify-between w-1/5 mt-5">
                    <div className="custom-next-button p-6 rounded-full border-2 border-red-500 border-5 bg-white"></div>
                    <div className="custom-preview-button p-6 rounded-full border-2 border-red-500 border-5 bg-white"></div>
                </div>
            </div>
            <motion.div initial={{x:100,opacity:0}} 
                animate={{x:0,opacity:1}} 
                transition={{duration:0.4,delay:0.6}} 
                className="flex justify-between p-0 md:p-5 pe-0 bg-rose-50 w-5/6 md:w-6/12 overflow-hidden" 
                style={{height:"60vh"}}
            >
                <Slide/>
            </motion.div>
        </div>
    </div>
  )
}

export default FrameThree