import React from 'react'
import author from '../assets/Author.jpg'
import { TypeAnimation } from 'react-type-animation'
import { BiSolidLocationPlus } from 'react-icons/bi'

export default function Main() {
    return (
        <section id='main'>
            <img className='w-full h-screen object-cover object-center' src={author} alt="author" />
            <div className='absolute top-0 left-0 w-full h-screen bg-black/70'>
                <div className=' max-w-[80%] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h4 className=' montserrat montserrat-light lg:text-4xl md:text-2xl sm:text-xl text-lg font-bold text-gray-200 mb-8'>Hello!</h4>
                    <h1 className=' montserrat montserrat-light lg:text-8xl md:text-6xl sm:text-5xl text-4xl font-bold text-gray-200 mb-8'>I'm <span className='montserrat underline decoration-slate-400'>Aditya</span>,
                    </h1>
                    <h2 className='pt-2 montserrat montserrat-light lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-slate-400 text-center m-2'>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'CODER',
                                2500,
                                'FULLSTACK DEVELOPER',
                                2500,
                                'TECH ENTHUSIAST',
                                2500,
                            ]}
                            wrapper="span"
                            speed={40}
                            repeat={Infinity}
                        />
                    </h2>
                    <h3 className='flex pt-4 montserrat montserrat-light lg:text-4xl md:text-2xl sm:text-xl text-lg font-bold text-gray-200 mb-8'>based in <span className='ml-4 montserrat underline decoration-slate-400'>New Delhi</span>. <BiSolidLocationPlus/></h3>
                </div>
            </div>
        </section >
    )
}
