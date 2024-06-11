import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsGithub, BsInstagram, BsLinkedin, BsPerson } from 'react-icons/bs'

function Contact() {
    return (
        <section id='contact' className='fade-in-animation flex flex-col justify-center items-center max-w-[1040px] m-auto w-full h-screen py-4'>
            <h1 className='montserrat tracking-wider font-bold py-4 text-4xl text-center text-white'>CONTACT</h1>
            <div className='flex w-full justify-center items-center'>
                <form action="https://getform.io/f/pbygoywb" method="post" className='min-w-[250px] w-3/4'>
                    <div className='flex flex-col justify-center items-center '>
                        <label className="input input-bordered flex items-center gap-2 my-2 border-slate-300 w-full">
                            <BsPerson />
                            <input name='name' type="text" className="grow" placeholder='John Doe' />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 w-full my-2 border-slate-300 sm:w-7/10">
                            <AiOutlineMail />
                            <input name='email' type="text" className="grow" placeholder="johndoe@example.com" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 w-full my-2 border-slate-300 sm:w-7/10">
                            <input name='subject' type="text" className="grow" placeholder="Subject" />
                        </label>
                        <textarea name='message' rows={7} className="textarea textarea-bordered w-full my-2 border-slate-300 sm:w-7/10" placeholder="Type your message here..."></textarea>
                        <button type='submit' className="montserrat font-light tracking-wide btn btn-outline border-2 border-slate-700 text-bold text-lg hover:bg-slate-700 hover:text-white py-1">Submit</button>
                    </div>
                </form>
            </div>
            {/* previous color='#708090' for icons */}
            <div className='flex m-4'>
                <a href="https://github.com/AdeetyAraJsaH" className='cursor-pointer m-4'>
                    <BsGithub color='white'  size={25} className='hover:fill-slate-700' />
                </a>
                <a href="https://instagram.com" className='cursor-pointer m-4'>
                    <BsInstagram color='white' size={25} className='hover:fill-[#c13584]' />
                </a>
                <a href="https://www.linkedin.com/in/aditya-raj-sah-a3795624a/" className='cursor-pointer m-4'>
                    <BsLinkedin color='white' size={25} className='hover:fill-[#0077B5]' />
                </a>
                <a href="https://leetcode.com/u/Aditya480/" className='cursor-pointer m-4'>
                    <svg className='hover:fill-[#FFA500]' height="25" fill ='white' viewBox="0 0 32 32" width="25" xmlns="http://www.w3.org/2000/svg"><path d="m21.469 23.907-3.595 3.473c-.624.625-1.484.885-2.432.885s-1.807-.26-2.432-.885l-5.776-5.812c-.62-.625-.937-1.537-.937-2.485 0-.952.317-1.812.937-2.432l5.76-5.844c.62-.619 1.5-.859 2.448-.859s1.808.26 2.432.885l3.595 3.473c.687.688 1.823.663 2.536-.052.708-.713.735-1.848.047-2.536l-3.473-3.511c-.901-.891-2.032-1.505-3.261-1.787l3.287-3.333c.688-.687.667-1.823-.047-2.536s-1.849-.735-2.536-.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-.683 5.109-1.989l3.479-3.521c.688-.683.661-1.817-.052-2.531s-1.849-.74-2.531-.052zm6.28-6.558h-13.531c-.932 0-1.692.801-1.692 1.791 0 .991.76 1.797 1.692 1.797h13.531c.933 0 1.693-.807 1.693-1.797 0-.989-.76-1.791-1.693-1.791z"/></svg>
                </a>
            </div>
        </section>
    )
}

export default Contact