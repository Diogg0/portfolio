"use client"

import React from 'react';
import Image from 'next/image';
import Typewriter from '@/components/Typewriter';
import { useState, useEffect, useRef, RefObject } from 'react';

type IntroProps = {
    
};

export function useIsVisible(ref: RefObject<Element>): boolean {
    const [isIntersecting, setIntersecting] = useState<boolean>(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting);
      });
      
      if (ref.current) {
        observer.observe(ref.current);
      }
      
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
}

const Intro:React.FC<IntroProps> = () => {

    const ref1 = useRef<HTMLDivElement>(null);
    const isVisible1 = useIsVisible(ref1);
    
    return <>
            <div className="flex items-center justify-between">
            <div className="box bg-black w-2/5 h-screen pt-20 shadow-inner">
                <p ref={ref1} className={`text-white flex justify-left items-center font-bold text-4xl pt-44 pl-5 transition-transform-opacity ease-in duration-700 ${isVisible1 ? "opacity 100" : "opacity-0 -translate-x-20"}`}> Hi, I'm Ratnakirti Kamble,</p>
                <p ref={ref1} className={`text-white center justify-left items-center font-bold text-2xl pl-5 transition-transform-opacity ease-in duration-1000 ${isVisible1 ? "opacity 100" : "opacity-0 -translate-x-20"}`}> a Machine Learning & Deep Learning engineer</p>
                <button className="text-2xl px-6 py-3 bg-white rounded-3xl ml-5 mt-10 drop-shadow-xl text-indigo-500 group relative transition-transform duration-300 ease-in transform translate-y-0 hover:translate-y-[-5px] hover:bg-black hover:text-pink-500 font-normal"> Resume </button>
            </div>
            <div className="relative box bg-zinc-200 white h-screen w-3/5 pt-20 flex items-center justify-center"> 
                <div className="flex items-start justify-start">
                    <Image src="/terminal.png" alt="terminal" width={600} height={600} />
                    <span className="absolute pt-24 mt-8 ml-24 pl-24 transform -translate-x-1/2 -translate-y-1/2 text-white text-1xl font-sans"><Typewriter text="Welcome to my portfolio!" delay={50}/></span>
                </div>
            </div>
        </div>
    </>
}
export default Intro;