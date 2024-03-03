"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

type NavbarProps = {
    
};



const Navbar:React.FC<NavbarProps> = () => {
    
    const handleHome = () =>{
        const element = document.getElementById('intro');
        if (element) {
        // Scroll to the element smoothly
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const handleProject = () =>{
        const element = document.getElementById('project');
        if (element) {
        // Scroll to the element smoothly
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const handleAbout = () =>{
        const element = document.getElementById('about');
        if (element) {
        // Scroll to the element smoothly
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    return <>
        <meta name="viewport" content="width=device-width, initial-scale=1 height=device-height" />

        <nav className="bg-white h-20 w-full flex items-center justify-between px-8 fixed drop-shadow-2xl z-50">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold text-3xl">Ratnakirti Kamble</div>
            <div className="flex items-center space-x-8">
                <button onClick={handleHome} className= "text-indigo-500 group relative py-2 px-4 transition-transform duration-300 ease-in transform translate-y-0 hover:translate-y-[-5px]">Home</button>
                <button onClick={handleProject} className= "text-purple-500 group relative py-2 px-4 transition-transform duration-300 ease-in transform translate-y-0 hover:translate-y-[-5px]">Projects</button>
                <button onClick={handleAbout} className= "text-pink-500 group relative py-2 px-4 transition-transform duration-300 ease-in transform translate-y-0 hover:translate-y-[-5px]">About</button>
            </div>
        </nav>
    </>
}
export default Navbar;