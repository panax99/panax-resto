"use client";
import React from 'react'
import Button from './buttons/Button'
import { motion } from 'framer-motion'

const FrameFour = () => {
  return (
    <motion.div className='flex items-start flex-col md:flex-row justify-between p-16 overflow-hidden'>
        <div className="w-full md:w-4/12 flex items-center justify-between overflow-hidden" style={{height:"68vh"}}>
            <motion.div 
                initial={{x:"-50vw",}} 
                animate={{x:0,}} 
                transition={{duration:0.9}} 
                className="img-food2 bg-green-500 rounded-lg w-11/12" 
                style={{height:"68vh"}} 
            >       
            </motion.div>
            <motion.video 
                initial={{x:30,opacity:0}} 
                animate={{x:0,opacity:1}} 
                transition={{duration:0.4,delay:0.9}} 
                className="img-food absolute z-10 bg-slate-900 w-2/12 ms-64 rounded-md shadow-inner" 
                style={{height:"45vh"}}
            />
        </div>
        <div className="flex flex-col w-full md:w-6/12" style={{height:"68vh"}}>
            <motion.p className='font-bold text-red-500'>About Us</motion.p>
            <p className='text-5xl mt-2 font-semibold' style={{fontFamily: "Canela"}}>
                Our Journey to Sweet Success.<br/>
                A Tale of Flour and Sugar
            </p>
            <p className='mt-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quia natus laboriosam quis sed ut totam culpa quam mollitia consequuntur error sunt, perferendis vitae? In ad error dignissimos corrupti excepturi.
            </p>
            <div className="flex mt-5 justify-between items-center">
                <div className="flex items-start flex-col justify-between w-6/12">
                    <div className="flex items-center flex-row justify-between">
                        <div className="p-3 rounded-full border-red-500 border-2 bg-white">
                        </div>
                        <p className='ms-2 font-semibold'>
                            Cozy Ambiance and Savor
                        </p>
                    </div>
                    <div className="flex mt-3 items-center flex-row justify-between">
                        <div className="p-3 rounded-full border-red-500 border-2 bg-white">
                        </div>
                        <p className='ms-2 font-semibold'>
                            Tasty Culinary For Food Lovers
                        </p>
                    </div>
                </div>
                <div className="h-20 bg-red-500 opacity-80 w-6/12 justify-center items-center mx-14" style={{width:"2px",borderRadius:"100%"}}></div>
                <div className="flex w-2/5 justify-start">
                    <div className="img-pdg p-10 rounded-full bg-green-500"></div>
                    <div className="flex flex-col items-start ms-2 justify-center">
                        <p className='' style={{fontFamily:""}}>Daniel Maestro</p>
                        <p className='font-semibold'>Founder & CEO</p>
                    </div>
                </div>
            </div>
            <div className="flex items-start mt-9 justify-start">
                <Button className='border-2 hover:border-red-500 hover:bg-white hover:text-red-500 p-2' color='bg-red-500' textButton='Learn More' hover=''/>
            </div>
        </div>

    </motion.div>
  )
}

export default FrameFour