import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Image from 'next/image';
import Typewriter from '@/components/Typewriter';

type indexProps = {
    
};

const index:React.FC<indexProps> = () => {
    
    return <>
        
        <Navbar />
        <div className="flex items-center justify-between">
            <div className="box bg-gradient-to-t from-indigo-500 to-pink-500 w-2/5 h-screen pt-20">
                <p className="text-white flex justify-left items-top font-bold text-4xl pt-20 pl-5"> Hi, I'm Ratnakirti Kamble,</p>
                <p className="text-white flex justify-left items-top font-bold text-2xl pl-5"> a Machine Learning & Deep Learning engineer</p>
                <button className="text-2xl px-4 py-1 bg-white rounded ml-5 mt-10 font-normal drop-shadow-xl text-indigo-500 group relative transition-transform duration-300 ease-in transform translate-y-0 hover:translate-y-[-5px] font-sans"> Resume </button>
            </div>
            <div className="relative box bg-white w-3/5 pt-20 flex items-center justify-center"> 
                <Image src="/terminal.png" alt="terminal" width={600} height={600} />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-1xl font-sans"><Typewriter text="Welcome to my portfolio!" delay={50}/></span>
                
            </div>
        </div>
    </>
}
export default index;

// <span className="animate-blink absolute top-20 pt-16 text-white text-1xl font-sans">|</span>