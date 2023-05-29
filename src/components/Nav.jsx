import { Stack } from '@mui/material'
import React, { useRef, useState } from 'react'

const Nav = () => {
    const scrollRef = useRef(null);
    const [color, setColor] = useState(false)

    const scrollToSection = (sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    

    return (
        <div className={`fixed top-0 left-0 text-white w-[100%] h-[35px] flex flex-row items-center justify-around md:justify-start md:gap-10 text-[14px] md:text-[16px] bg-gradient-to-r from-[#468faf] to-[#014f86] border-b-solid border-b-[1px] border-b-[#014f86] z-20`}>
            <div onClick={() => scrollToSection('info')} className='flex items-center justify-center p-1 cursor-pointer'>
                <p><b>Personal Info</b></p>
            </div>
            <div onClick={() => scrollToSection('skills')} className='flex items-center justify-center p-1 cursor-pointer'>
                <p><b>Skills</b></p>
            </div>
            <div onClick={() => scrollToSection('projects')} className='flex items-center justify-center p-1 cursor-pointer'>
                <p><b>Projects</b></p>
            </div>
            <div onClick={() => scrollToSection('contact')} className='flex items-center justify-center p-1 cursor-pointer'>
                <p><b>Contact</b></p>
            </div>
        </div>
    )
}

export default Nav