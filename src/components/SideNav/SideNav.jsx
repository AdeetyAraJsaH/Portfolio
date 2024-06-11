import React from 'react'
import { AiFillHome, AiFillMail, AiFillProduct, AiFillProfile, AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineProfile, AiOutlineProject } from 'react-icons/ai'
import { BsPerson, BsPersonFill } from 'react-icons/bs';
import resume from '../../assets/ADITYA_RAJ_SAH.pdf'
import { FaTimes } from 'react-icons/fa';

export default function SideNav() {
    const [nav, setNav] = React.useState(false);
    const [color, setColor] = React.useState('white');
    const handleNav = () => {
        setNav(!nav);
        if (nav) {
            setColor('white');
        } else {
            setColor('black');
        }
    }
    return (
        <div>
            {!nav ? <AiOutlineMenu color={color} onClick={handleNav} className=' fixed top-4 right-4  z-[99] md:hidden' /> : <FaTimes color={color} onClick={handleNav} className=' fixed top-4 right-4  z-[99] md:hidden' />}
            {
                nav ?
                    (
                        <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 md:hidden'>
                            <a id='main' href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200' onClick={handleNav}>
                                <AiOutlineHome color='#708090' size={20} />
                                <span className='pl-4 text-slate-600'>Home</span>
                            </a>
                            <a id='about' href="#about" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200' onClick={handleNav}>
                                <BsPerson color='#708090' size={20} />
                                <span className='pl-4 text-slate-600'>About</span>
                            </a>
                            <a id='projects' href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200' onClick={handleNav}>
                                <AiOutlineProject color='#708090' size={20} />
                                <span className='pl-4 text-slate-600' >Projects</span>
                            </a>
                            <a href={resume} download={'ADITYA_RAJ_SAH'} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200' onClick={handleNav}>
                                <AiOutlineProfile color='#708090' size={20} />
                                <span className='pl-4 text-slate-600'>Resume</span>
                            </a>
                            <a id='contact' href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200' onClick={handleNav}>
                                <AiOutlineMail color='#708090' size={20} />
                                <span className='pl-4 text-slate-600'>Contact</span>
                            </a>

                        </div>
                    ) :
                    (
                        ''
                    )
            }
            <div className='md:block hidden fixed top-[25%] z-10'>
                <nav className='flex flex-col'>
                    <a href="#main" className='scale-up-animation rounded-full  bg-gray-50  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100 tooltip  tooltip-right' data-tip="Hero">
                        <AiFillHome color='#29264b' size={20} />
                    </a>
                    <a href="#about" className='scale-up-animation rounded-full  bg-gray-50  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100 tooltip  tooltip-right' data-tip="About">
                        <BsPersonFill color='#29264b' size={20} />
                    </a>
                    <a href="#projects" className='scale-up-animation rounded-full  bg-gray-50  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100 tooltip  tooltip-right' data-tip="Projects">
                        <AiFillProduct color='#29264b' size={20} />
                    </a>
                    <a href={resume} download='ADITYA_RAJ_SAH.pdf' className='scale-up-animation rounded-full  bg-gray-50  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100 tooltip tooltip-right' data-tip="Resume">
                        <AiFillProfile color='#29264b' size={20} />
                    </a>
                    <a href="#contact" className='scale-up-animation rounded-full  bg-gray-50  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100 tooltip tooltip-right' data-tip="Contact">
                        <AiFillMail color='#29264b' size={20} />
                    </a>
                </nav>
            </div>
        </div>
    )
}
// import React, { useState } from 'react';
// import { MdContactMail, MdWork, MdPerson } from 'react-icons/md'; // Import icons from react-icons

// const sections = [
//   { name: 'Contact', icon: <MdContactMail /> },
//   { name: 'Projects', icon: <MdWork /> },
//   { name: 'About', icon: <MdPerson /> },
// ];

// const NavButton = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedSection, setSelectedSection] = useState('');

//   const handleSelect = (section) => {
//     setSelectedSection(section);
//     setIsOpen(false); // Close the dropdown after selection
//   };

//   return (
//     <div className="fixed top-0 right-0 m-4">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="bg-blue-500 text-white p-2 rounded-full focus:outline-none"
//       >
//         {selectedSection ? sections.find(sec => sec.name === selectedSection).icon : 'Menu'}
//       </button>
//       {isOpen && (
//         <div className="mt-2 bg-white shadow-lg rounded-lg">
//           {sections.map((section) => (
//             <button
//               key={section.name}
//               onClick={() => handleSelect(section.name)}
//               className="flex items-center justify-end w-full px-4 py-2 text-right hover:bg-gray-100 rounded-full"
//             >
//               {section.icon}
//               <span className="ml-2">{section.name}</span>
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default NavButton;
