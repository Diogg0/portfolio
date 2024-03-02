"use client";
import React from 'react';
import Image from 'next/image';
import { useState, useEffect, RefObject, useRef } from 'react';
import  Head from 'next/head';

var count = 2;
var count3 = 0;
var count2 = 1;

type ProjectsProps = {
    
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

const Projects:React.FC<ProjectsProps> = () => {

    const ref1 = useRef<HTMLDivElement>(null);
    const isVisible1 = useIsVisible(ref1);

    /** Colour cycle */
    var colors = [' bg-violet-200', ' bg-pink-200', ' bg-indigo-200'];

    const [isActive, setIsActive] = useState(false);

    // First button properties
    const [isClicked, setIsClicked] = useState(false);  
    const [opacity, setOpacity] = useState('opacity-70');
    const [position, setPosition] = useState(' translate-y-0');
    const [color, setColor] = useState(colors[count]);
    const [size, setSize] = useState(' h-16 w-1/3' ); // [height, width
    
    // Second button properties
    const [isClicked2, setIsClicked2] = useState(false);
    const [opacity2, setOpacity2] = useState('opacity-100 ');
    const [position2, setPosition2] = useState(' translate-y-14');
    const [color2, setColor2] = useState(colors[count3 + 1]);
    const [size2, setSize2] = useState(' h-20 w-1/2');
   
    // Third button properties
    const [isClicked3, setIsClicked3] = useState(false);
    const [opacity3, setOpacity3] = useState('opacity-70');
    const [position3, setPosition3] = useState(' translate-y-0');
    const [color3, setColor3] = useState(colors[count3]);
    const [size3, setSize3] = useState(' h-16 w-1/3');

    // Hidden button properties (replaces button 1 temporarily)
    const[isClicked4, setIsClicked4] = useState(false);
    const[opacity4, setOpacity4] = useState('opacity-0');
    const[position4, setPosition4] = useState(' translate-y-0');
    const[color4, setColor4] = useState(colors[count3]);
    const[size4, setSize4] = useState(' h-16 w-1/3');

    // Handles movement of project titles
    const handleClick3 = () => {

        if(isActive == false){
            setIsActive(true);
            setIsClicked(true);
            setIsClicked2(true);
            setIsClicked3(true);
            setIsClicked4(true);
            
            // Start of animation for hidden button

            setPosition4(' translate-y-8');
            setOpacity4('opacity-70 ');
            setSize4(' h-16 w-1/3');
            setColor4(colors[(count + 1) % 3]);

            setTimeout(() => {
                setOpacity4('opacity-0');
            }, 2500);

            // Start of animation for first button
            setPosition(' translate-y-14');
            setSize(' h-20 w-1/2');
            setOpacity('opacity-100 ');

            setTimeout(() => {
                setOpacity('opacity-0');
            }, 1700);

            setTimeout(() => {
                setSize(' h-16 w-1/3');
                setPosition(' -translate-y-8');
                setOpacity('opacity-0 ');
                setColor(colors[(count + 1) % 3]);
                count++;
            }, 2100);
            
            setTimeout(() => {
                setOpacity('opacity-70');
            }, 2500);
            
            // End of animation for first button

            // Start of animation for second button 

            setPosition2(' translate-y-16');
            setSize2(' h-16 w-1/3');
            setOpacity2('opacity-0 ');
            setColor2(colors[(count3 + 1) % 3]);
            
            setTimeout(() => {
                setTimeout(() => {
                    setOpacity2('opacity-0');
                }, 300);

                setTimeout(() => {
                    setPosition2(' -translate-y-10');
                    setSize2(' h-20 w-1/2');
                    setColor2(colors[(count2 + 1) % 3]);
                    count2++;
                }, 800);

                setTimeout(() => {
                    setOpacity2('opacity-0 '); // Make this 100 later
                    
                }, 1270);
            },500);

            // End of animation for second button

            // Start of animation for third button

            setPosition3(' translate-y-16');
            setOpacity3('opacity-0 ');
            setSize3(' h-2 w-0')

            setTimeout(() => {
                setSize3(' h-16 w-1/3');
                setColor3(colors[(count3 + 1) % 3]);
                count3++;
                setPosition3(' translate-y-0');

                setTimeout(() => {
                    setOpacity3('opacity-0'); // Make this 70 later
                }, 400);

            }, 500);
        }

        setTimeout(() => {
            setIsActive(false);
        }, 3000);
    };


    return (<>
        

        <div className="flex items-center justify-between">
            {/** Left side of the screen */}
            <div className="box bg-gradient-to-t from-pink-500 via-purple-500 to-indigo-500 w-2/5 h-screen pt-20">
                <p ref={ref1} className={`text-white flex justify-left items-top font-bold text-4xl pt-20 pl-5 transition-transform-all ease-in duration-1000 ${isVisible1 ? "opacity 100" : "opacity-0 -translate-x-20"}`}>My Personal Projects</p>
            </div>
            
            {/** Right side of the screen */}
            <div className="relative place-items-center box bg-white h-screen w-3/5 pt-18 pl-10"> 
                <button className='absolute -mt-36 top-1/2 left-1/2 transform rotate-180 -translate-y-1/2 -translate-x-1/2 px-4 py-2 mb-10 opacity-70 z-50' onClick={handleClick3}><Image src="/arrow.png" alt="arrow" width={30} height={30} /></button> {/** Arrow button up */}
                <div className={`absolute -mt-36 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 px-4 py-2 rounded drop-shadow-lg flex items-center justify-center text-slate-700 text-xl font-medium transition-all translate-y ease-in duration-500 ${isClicked4 ? opacity4 + color4 + position4 + size4 : 'opacity-0 bg-indigo-200 h-2 w-0' }` } > Project</div> {/** Hidden button */}
                <div className={`absolute -mt-20 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 px-4 py-2 rounded drop-shadow-lg flex items-center justify-center text-slate-700 text-xl font-medium transition-all translate-y ease-in duration-500 ${isClicked ? opacity + color + position  + size : 'opacity-70 bg-indigo-200 h-16 w-1/3' }` } > Project</div> {/** First button */}
                <button className={`absolute mt-4 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 px-4 py-2 rounded drop-shadow-lg flex items-center justify-center text-slate-700 text-xl font-medium hover:text-white transition-transform-opacity translate-y ease-in duration-500 ${isClicked2 ? opacity2 + position2 + color2 + size2 : 'opacity-100 bg-pink-200 h-20 w-1/2'}`}> Project</button> {/** Second button */}
                <div className={`absolute mt-20 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 px-4 py-2 rounded drop-shadow-lg flex items-center justify-center text-slate-700 text-xl font-medium mb-7 transition-transform-opacity translate-y ease-in-out duration-500 z-40 ${isClicked3 ? opacity3 + position3 + color3 + size3 : opacity3 + ' translate-y-0 bg-violet-200 h-16 w-1/3'}`}> Project</div> {/** Third button */}           
                <button className='absolute mt-44 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 px-4 py-2 mb-10 opacity-70' onClick={handleClick3}><Image src="/arrow.png" alt="arrow" width={30} height={30} /></button> {/** Arrow button down */}
            </div>
        </div>
    </>
    );
}


export default Projects;