"use client"
import React, { useState } from 'react'
import ButtonFirst from '../components/buttons/ButtonFirst';
import Link from 'next/link';
import Image from 'next/image';

const SignIn = () => {
    const [withEmail,setWithEmail] = useState(false);

    return (
        <div className="flex flex-col justify-center items-center mt-[2%] space-y-8">
            <div className='w-[95%] lg:w-[35%] p-10 px-20 shadow-lg flex flex-col space-y-8 justify-center items-center bg-white'>
                <div className=" font-bold text-5xl text-[#3F529E] ">
                    <Image src={"/logo coua violet 1.svg"} width={160} height={50} alt='' className='me-3'/>
                </div>

                <div className=" ring-1 ring-gray-200 rounded-lg py-2 w-full flex items-center justify-center">
                    <Image src={"/google.svg"} width={20} height={20} alt='' className='me-3'/>
                    Continuer avec Google
                </div>

                <div className="flex justify-between items-center w-full">
                    <div className='py-[1px] bg-gray-200 w-20'></div>
                    <div className="px-5">ou</div>
                    <div className='py-[1px] bg-gray-200 w-20'></div>
                </div>

                <div className=" ring-1 ring-gray-200 rounded-lg py-2 w-full flex items-center justify-between px-3">
                    <span className=' text-gray-500'>Continuer avec un email</span>
                    <i className={`fas ${withEmail ? "fa-chevron-down" : "fa-chevron-up"} fa-lg`} onClick={() => setWithEmail(prev => !prev)}></i>
                </div>

                <div className="flex items-start">
                    <span className=''>
                        <input type="checkbox" name="" id="" className=' me-2' />
                        J'adore recevoir des astuces, bon plans et offres spéciales surtout si ça booste mon business.
                    </span>
                </div>

                <div className="w-full">
                    <ButtonFirst
                        className='w-full'
                        textButton='Continuer'
                        color='bg-[#3F529E]'
                    />
                </div>

                <div className="inline text-center">
                    <span>Déjà membre ?</span>
                    <span className=' text-[#3F529E] decoration-solid'> <Link href={"/login"}>Connectez-vous</Link></span>
                </div>
            </div>

            <div className=" inline text-center pb-8">
                En créant votre compte, vous acceptez nos 
                <Link className=' text-[#3F529E] decoration-solid' href={''}> Conditions d'utilisations </Link> et 
                <Link className='ms-1 text-[#3F529E] decoration-solid' href={''}>Politique de confidentialité</Link>
            </div>

        </div>
    )
}

export default SignIn