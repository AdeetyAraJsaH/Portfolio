import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'

function ProjectItem({ src, title,url, git, children }) {
    return (
        <div className='relative flex items-center justify-center h-auto w-full rounded-xl group hover:bg-gradient-to-r from-gray-600 to-slate-800'>
            <img src={src} alt="/" className='rounded-xl group-hover:opacity-10' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] space-y-4'>
                <h3 className='text-center text-2xl text-slate-50 font-bold tracking-wider'>{title}</h3>
                <div className="flex justify-center space-x-4">
                    {children}
                </div>
                <div className='flex justify-center items-center gap-x-4'>
                    <a className=' block w-fit p-2 bg-slate-300 hover:bg-slate-50 text-gray-800 text-center rounded-full' href={url} target="_blank"><AiOutlineArrowRight size={25}/></a>
                    <a className=' block w-fit p-2 bg-slate-300 hover:bg-slate-50 text-gray-800 text-center rounded-full' href={git} target="_blank"><BsGithub size={25}/></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem