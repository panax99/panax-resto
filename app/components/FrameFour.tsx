"use client";
import React, { useRef } from 'react'
import Button from './buttons/Button'
import { motion, useInView } from 'framer-motion'
      
const FrameFour = () => {
    const imgVariants = {
        visible: {
            x: ["-50vh","0vh"],
            transition: {
                duration:0.9
            }
        },
        hidden: {
            x: "-50vh",
            transition: {
                duration:0.9
            }
        }
    }
    const img2Variants = {
        visible: {
            opacity: [0,1],
            x: [30,0],
            transition: {
                duration:0.4,delay:0.9
            }
        },
        hidden: {
            opacity:0,
            x: 30,
            transition: {
                duration:0.4,delay:0.9
            }
        }
    }
    const ref = useRef(null);
    const inView = useInView(ref, {once:false})
    const ref2 = useRef(null);
    const inView2 = useInView(ref2, {once:false})
    return (
    <motion.div className='flex items-start flex-col md:flex-row justify-between p-16 space-y-8'>
        <div className="w-full md:w-4/12 flex items-center justify-between overflow-hidden h-auto lg:h-[60vh]">
            <motion.div 
                variants={imgVariants}
                ref={ref} 
                animate={inView ? "visible" : "hidden"}  
                className="img-food2 bg-green-500 rounded-lg lg:rounded-lg w-11/12 md:w-11/12" 
                style={{height:"67vh"}} 
            >       
            </motion.div>
            <motion.video 
                variants={img2Variants}
                ref={ref2} 
                animate={inView2 ? "visible" : "hidden"}  
                className="img-food absolute z-10 bg-slate-900 w-4/12 md:w-2/12 end-10 lg:start-0 lg:ms-64 rounded-md shadow-inner" 
                style={{height:"45vh"}}
            />
        </div>
        <div className="flex flex-col w-full md:w-6/12 h-auto lg:h-[68vh]">
            <motion.p className='font-bold text-red-500'>About Us</motion.p>
            <p className='text-5xl mt-2 font-semibold' style={{fontFamily: "Canela"}}>
                Our Journey to Sweet Success.<br/>
                A Tale of Flour and Sugar
            </p>
            <p className='mt-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quia natus laboriosam quis sed ut totam culpa quam mollitia consequuntur error sunt, perferendis vitae? In ad error dignissimos corrupti excepturi.
            </p>
            <div className="flex flex-col lg:flex-row mt-5 justify-between space-y-6 lg:space-y-0 items-start lg:items-center">
                <div className="flex w-full lg:w-2/5 justify-start md:hidden">
                    <div className="img-pdg p-10 rounded-full bg-green-500"></div>
                    <div className="flex flex-col items-start ms-2 justify-center">
                        <p className='' style={{fontFamily:""}}>Daniel Maestro</p>
                        <p className='font-semibold'>Founder & CEO</p>
                    </div>
                </div>
                <div className="flex items-start flex-col justify-between w-2/3 lg:w-6/12">
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
                <div className="h-20 bg-red-500 opacity-80 w-1/3 hidden lg:flex lg:w-6/12 justify-center items-center mx-14" style={{width:"2px",borderRadius:"100%"}}></div>
                <div className="flex w-full lg:w-2/5 justify-start hidden lg:flex">
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