"use client";
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import  Head from 'next/head';

var counter = 0;

type ProjectsProps = {
    
};

const Projects:React.FC<ProjectsProps> = () => {

    var colors = [' bg-violet-200', ' bg-pink-200', ' bg-indigo-200'];
   
    const [isClicked3, setIsClicked3] = useState(false);
    const [opacity3, setOpacity3] = useState(70);
    const [position3, setPosition3] = useState(' translate-y-0');
    const [color3, setColor3] = useState(colors[counter]);

    const handleClick3 = () => {
        setIsClicked3(true);
        setOpacity3(0);
        setPosition3(' translate-y-5');
        setTimeout(() => {
            setPosition3(' -translate-y-5');
        }, 500);
        setTimeout(() => {
            if (counter === 2) counter = 0;
            else counter++;
            setColor3(colors[counter]);
            setOpacity3(70);
            setPosition3(' translate-y-0');
        }, 1000);
    };


    return (<>
        <Head>
            <link rel="icon" href="/logo.png" />
        </Head>
        <div className="flex items-center justify-between">
            <div className="box bg-gradient-to-t from-pink-500 via-purple-500 to-indigo-500 w-2/5 h-screen pt-20">
                <p className='text-white flex justify-left items-top font-bold text-4xl pt-20 pl-5'>My Personal Projects</p>
            </div>
            <div className="relative box bg-white w-3/5 pt-18 pl-10 flex flex-col items-center justify-center"> 
                <button className="mb-4 opacity-70" style={{ transform: 'rotate(180deg)' }}>
                    <Image src="/arrow.png" alt="arrow" width={30} height={30} />
                </button>
                <div className="bg-indigo-200 rounded drop-shadow-lg h-16 w-1/3 flex items-center justify-center text-slate-700 text-xl font-medium mb-4 opacity-80"> Project</div>
                    <button className="bg-pink-200 rounded drop-shadow-lg h-20 w-1/2 flex items-center justify-center text-slate-700 text-xl font-medium mb-5 hover:text-white"> Project</button>
                    <div className={`rounded drop-shadow-lg flex items-center justify-center h-16 w-1/3 text-slate-700 text-xl font-medium mb-7 opacity-80 transition-all translate-y ease-in duration-500 ${isClicked3 ? 'opacity-' + opacity3 + position3 + color3 : ' opacity-' + opacity3 + ' translate-y-0 bg-violet-200'}`}> Project</div>            
                    <button className='opacity-70' onClick={handleClick3}><Image src="/arrow.png" alt="arrow" width={30} height={30} /></button>
                </div>
            </div>
        </>
    );
}


export default Projects;