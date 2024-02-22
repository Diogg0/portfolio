import React from 'react';
import Image from 'next/image';
import Typewriter from '@/components/Typewriter';

type IntroProps = {
    
};

const Intro:React.FC<IntroProps> = () => {
    
    return <>
            <div className="flex items-center justify-between">
            <div className="box bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 w-2/5 h-screen pt-20 shadow-inner">
                <p className="text-white flex justify-left items-center font-bold text-4xl pt-44 pl-5"> Hi, I'm Ratnakirti Kamble,</p>
                <p className="text-white center justify-left items-center font-bold text-2xl pl-5"> a Machine Learning & Deep Learning engineer</p>
                <button className="text-2xl px-6 py-3 bg-white rounded ml-5 mt-10 drop-shadow-xl text-indigo-500 group relative transition-transform duration-300 ease-in transform translate-y-0 hover:translate-y-[-5px] font-normal"> Resume </button>
            </div>
            <div className="relative box bg-white h-screen w-3/5 pt-20 flex items-center justify-center"> 
                <div className="flex items-start justify-start">
                    <Image src="/terminal.png" alt="terminal" width={600} height={600} />
                    <span className="absolute pt-24 mt-8 ml-24 pl-24 transform -translate-x-1/2 -translate-y-1/2 text-white text-1xl font-sans"><Typewriter text="Welcome to my portfolio!" delay={50}/></span>
                </div>
            </div>
        </div>
    </>
}
export default Intro;