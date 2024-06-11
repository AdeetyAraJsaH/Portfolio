import React from 'react'
import { BiSolidBookBookmark, BiSolidMovie, BiSolidPlanet } from 'react-icons/bi'
import { BsCode, BsMusicNote, BsSpotify } from 'react-icons/bs'

function About() {
    return (
        <section id='about' className=' fade-in-animation montserrat montserrat-light max-w-[1040px] m-auto w-full h-fit lg:h-screen md:pl-20 p-4 justify-center items-center'>
            <h1 className='montserrat tracking-wider font-bold py-4 text-4xl text-center text-white'>ABOUT</h1>
            <div className='flex w-full h-full justify-around flex-col md:flex-row'>
                <div className='w-full md:w-2/3 p-2'>
                    <p className='text-lg'>
                        Hey there <span className='text-4xl'>👋</span> , I'm <span className='text-2xl text-white font-bold'>Aditya</span>, a Software Developer based in New Delhi with a passion for creating seamless and delightful user experiences and softwares. I especially enjoy working on design operations and systems that help bring order to complexity.
                        <h1 className='py-2'>When I'm not designing, you can find me enjoying my <span className='text-green-400 underline'>spotify</span> playlist or playing games like Clash of Clans , Asphalt 9 and more.</h1>
                    </p>
                    <div className='flex flex-col my-4 gap-y-1 text-[#bebfc5]'>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-1" defaultChecked />
                            <div className="collapse-title text-white text-lg font-medium">
                                <h1 className='flex'>Education <BiSolidBookBookmark className='m-1' /></h1>
                            </div>
                            <div className="collapse-content overflow-y-scroll custom-scrollbar">
                                <ul>
                                    <li><span className=' font-bold'>Bachelor of Science in Computer Science:</span> Acharya Narendra Dev College, University of Delhi, Graduated with a CGPA of <span className='text-xl font-bold'>8.32</span>.  </li>
                                    <div className="divider m-0 p-0"></div>
                                    <li><span className=' font-bold'>Higher Secondary Education:</span> Jawahar Navodaya Vidyalaya (JNV), Vrindavan, West Champaran, Secured a total aggregate of <span className='text-xl font-bold'>93.8%</span> in the 12th grade.</li>
                                    <div className="divider m-0 p-0"></div>
                                    <li><span className=' font-bold'>Secondary Education:</span> Jawahar Navodaya Vidyalaya (JNV), Vrindavan, West Champaran, Achieved a total aggregate of <span className='text-xl font-bold'>92%</span> in the 10th grade.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-1" />
                            <div className="collapse-title text-white text-lg font-medium">
                                What I'm Learning
                            </div>
                            <div className="collapse-content">
                                <ul>
                                    <li>Next .JS</li>
                                    <div className="divider m-0 p-0"></div>
                                    <li>Kubernetes</li>
                                    <div className="divider m-0 p-0"></div>
                                    <li>Docker</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-full md:w-1/3 p-2 flex flex-col gap-1 justify-start items-center'>
                    <div className="collapse collapse-arrow bg-base-200 min-w-60">
                        <input type="checkbox" className="peer" defaultChecked />
                        <div className=" collapse-title bg-success text-success-content peer-checked:bg-accent peer-checked:text-accent-content">
                            <h2 className='text-sm lg:text-lg text-white inline-flex'>Checkout my<BsSpotify className='mt-1 mx-2' />playlist</h2>
                        </div>
                        <div className="collapse-content bg-success text-success-content peer-checked:bg-accent peer-checked:text-accent-content">
                            <iframe
                                className='rounded-xl'
                                title="Spotify Embed: Soul_Troll "
                                src={`https://open.spotify.com/embed/playlist/2rXihXj5OpORzyowoKwsts?utm_source=generator&theme=0`}
                                width="100%"
                                height="100%"
                                style={{ minHeight: '360px' }}
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-white text-md lg:text-lg font-medium">
                            My Interests
                        </div>
                        <div className="collapse-content overflow-y-scroll custom-scrollbar ">
                            <ul>
                                <li className='flex'>Coding <BsCode className='m-1' /></li>
                                <div className="divider m-0 p-0"></div>
                                <li className='flex'>Music <BsMusicNote className='m-1' /></li>
                                <div className="divider m-0 p-0"></div>
                                <li className='flex'>Cosmos <BiSolidPlanet className='m-1' /></li>
                                <div className="divider m-0 p-0"></div>
                                <li className='flex'>Movies <BiSolidMovie className='m-1' /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-white text-md lg:text-lg font-medium">
                            What I'm Learning
                        </div>
                        <div className="collapse-content">
                            <ul>
                                <li>Next .JS</li>
                                <div className="divider m-0 p-0"></div>
                                <li>Kubernetes</li>
                                <div className="divider m-0 p-0"></div>
                                <li>Docker</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About