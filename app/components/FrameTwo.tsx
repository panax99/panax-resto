import React from 'react'

const FrameTwo = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center p-4 md:p-6 bg-white w-full mt-10 h-auto md:h-[40vh]' >
        <div className="flex flex-col space-y-12 md:space-y-0 md:flex-row justify-between items-center w-2/3 bg-white">
            <div className="text-center">
                <p className='flex flex-row justify-center items-center text-5xl font-semibold' style={{fontFamily:"Canela Text Trial"}}>15<span className=' text-2xl ms-1 font-bold'>+</span></p>
                <p className='text-start'>Years Experience</p>    
            </div>
            <div className="p-px w-1 h-24 bg-red-600 hidden md:flex opacity-80" style={{borderRadius: "90%"}}></div>       
            
            <div className="text-center">
                <p className='flex flex-row justify-center items-center text-5xl font-semibold' style={{fontFamily:"Canela Text Trial"}}>
                    5<span className=' text-2xl ms-1 font-bold'>+</span>
                </p>
                <p className='text-start'>Master Chefs</p>
            </div>
            <div className=" p- p-px h-24 w-1 bg-red-600 hidden md:flex opacity-80" style={{borderRadius: "90%"}}></div>  

            <div className="text-center">
                <p className='flex flex-row justify-center items-center text-5xl font-semibold' style={{fontFamily:"Canela Text Trial"}}>
                    200<span className=' text-2xl ms-1 font-bold'>+</span>
                </p>
                <p className=' text-start'>Daily Visitors</p>
            </div>
            <div className="p-px h-24 w-1 bg-red-600 hidden md:flex opacity-80" style={{borderRadius: "90%"}}></div>  

            <div className="text-center">
                <p className='flex flex-row justify-center items-center text-5xl font-semibold' style={{fontFamily:"Canela Text Trial"}}>
                    35<span className=' text-2xl ms-1 font-bold'>+</span>
                </p>
                <p className='text-start'>Achievements</p>
            </div>
        </div>
    </div>
  )
}

export default FrameTwo