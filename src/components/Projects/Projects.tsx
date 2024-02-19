"use client";
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

type ProjectsProps = {
    
};

const Projects:React.FC<ProjectsProps> = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [position, setPosition] = useState(0);

    const handleClick = () => {
        setIsClicked(true);
        setPosition(2);
        setTimeout(() => {
            setIsClicked(false);
            setPosition(-2);
        }, 500);
        setTimeout(() => {
            setPosition(0);
        }, 500);
    };


    return (
        <div className="flex items-center justify-between">
            <div className="box bg-gradient-to-t from-pink-500 via-purple-500 to-indigo-500 w-2/5 h-screen pt-20">
                <p className='text-white flex justify-left items-top font-bold text-4xl pt-20 pl-5'>My Personal Projects</p>
            </div>
            <div className="relative box bg-white w-3/5 pt-18 pl-10 flex flex-col items-center justify-center"> 
                <button className="mb-4" style={{ transform: 'rotate(180deg)' }}>
                    <Image src="/arrow.png" alt="arrow" width={30} height={30} />
                </button>
                <div className="bg-indigo-200 rounded drop-shadow-lg h-16 w-1/3 flex items-center justify-center text-slate-700 text-xl font-medium mb-4 opacity-80"> Project</div>
                <button className="bg-pink-200 rounded drop-shadow-lg h-20 w-1/2 flex items-center justify-center text-slate-700 text-xl font-medium mb-5 hover:text-white"> Project</button>
                <div className={`bg-violet-200 rounded drop-shadow-lg h-16 w-1/3 flex items-center justify-center text-slate-700 text-xl font-medium mb-7 transition-opacity-transform translate-y ease-in duration-500 ${isClicked ? 'opacity-0 translate-y-5' : 'opacity-70 translate-y-0'}`}> Project</div> 
                
                <button onClick={handleClick}><Image src="/arrow.png" alt="arrow" width={30} height={30} /></button>

            </div>
        </div>
    );
}


export default Projects;