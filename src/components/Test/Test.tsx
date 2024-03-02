"use client";
import React from 'react';
import Image from 'next/image';
import { useState, useEffect, RefObject, useRef } from 'react';

var count = 2;
var count3 = 0;
var count2 = 1;

// test

type ProjectsProps = {
    
};

export function UseIsVisible(ref: RefObject<Element>): boolean {
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
    const isVisible1 = UseIsVisible(ref1);

    /** Colour cycle */
    var colors = [' bg-violet-200', ' bg-pink-200', ' bg-indigo-200'];
    
    const [isActive, setIsActive] = useState(false);
    const [hidden1, setHidden1] = useState(' opacity-0 h-2 w-0');
    const [button1, setButton1] = useState('opacity-70 h-16 w-1/3' + colors[count]);
    const [button2, setButton2] = useState('opacity-100 h-20 w-1/2' + colors[count2]);
    const [button3, setButton3] = useState('opacity-70 h-16 w-1/3' + colors[count3]);
    const [hidden2, setHidden2] = useState('opacity-0 h-2 w-0');

    // Handles movement of project titles upwards
    const handleClickUp = () => {
      setIsActive(true);
      // Start of animation for hidden button

      // Start of animation for button 1
      setButton1('transition-all ease-in duration-500 opacity-0 h-2 w-0 -translate-y-20' + colors[count % 3]);

      setTimeout(() => {
          count += 2;
          setButton1('opacity-70 h-16 w-1/3' + colors[count % 3]);
        }, 700);

      // End of animation for button 1

      // Start of animation for button 2
      setButton2('transition-all ease-in duration-500 opacity-70 h-16 w-1/3 -translate-y-32' + colors[count2 % 3]);
      
      setTimeout(() => {
          count2 += 2;
          setButton2('opacity-100 h-20 w-1/2' + colors[count2 % 3]);
        }, 700);

      // End of animation for button 2

      // Start of animation for button 3
      setButton3('transition-all ease-in duration-500 opacity-100 h-20 w-1/2 -translate-y-34' + colors[count3 % 3]);
      count3 += 2;
      setTimeout(() => {
          
          setButton3('opacity-70 h-16 w-1/3' + colors[count3 % 3]);
        }, 700);

      // Start of animation for hidden button
      setHidden2('transition-all ease-in duration-500 opacity-70 h-16 w-1/3 -translate-y-24' + colors[count3 % 3]);

      setTimeout(() => {
        setHidden2('opacity-0 h-2 w-0' + colors[count3 % 3]);
      }, 700);
    
      setTimeout(() => {
        setIsActive(false);
      }, 1200);
    }
    
    // Handles movement of project titles downwards
    const handleClickDown = () => {
          setIsActive(true);
          // Start of animation for hidden button

          setHidden1('transition-all ease-in duration-500 opacity-70 h-16 w-1/3 translate-y-8' + colors[count3 % 3]);

          setTimeout(() => {
            setHidden1('opacity-0 h-2 w-0' + colors[count3 % 3]);
          }, 1200);

          // Start of animation for button 1
          setButton1('transition-all ease-in duration-500 opacity-100 h-20 w-1/2 translate-y-14' + colors[count % 3]);

          setTimeout(() => {
              
              setButton1('opacity-0' + colors[count % 3]);
            }, 700);

          setTimeout(() => {
              
              setButton1('opacity-70 h-16 w-1/3' + colors[++count % 3]);
            }, 1200);

            // End of animation for button 1

            // Start of animation for button 2
            setButton2('transition-all ease-in duration-500 opacity-70 h-16 w-1/3 translate-y-16' + colors[count2 % 3]);
            
            setTimeout(() => {
                setButton2('opacity-100 h-20 w-1/2' + colors[++count2 % 3]);
              }, 700);

            // End of animation for button 2

            // Start of animation for button 3
            setButton3('transition-all ease-in duration-500 opacity-0 h-2 w-0 translate-y-20' + colors[count3 % 3]);

            setTimeout(() => {
                setButton3('opacity-70 h-16 w-1/3' + colors[++count3 % 3]);
              }, 700);
            // End of animation for button 3

            
    
          setTimeout(() => {
            setIsActive(false);
          }, 1200);
    }

    

    
 


    return (<>
        

        <div className="flex items-center justify-between">
            {/** Left side of the screen */}
            <div className="box bg-gradient-to-t from-pink-500 via-purple-500 to-indigo-500 w-2/5 h-screen pt-20">
                <p ref={ref1} className={`text-white flex justify-left items-top font-bold text-4xl pt-20 pl-5 transition-transform-all ease-in duration-1000 ${isVisible1 ? "opacity 100" : "opacity-0 -translate-x-20"}`}>My Personal Projects</p>
            </div>
            
            {/** Right side of the screen */}
            <div className="relative place-items-center box bg-white h-screen w-3/5 pt-18 pl-10"> 
                <button disabled={isActive} className='absolute -mt-36 top-1/2 left-1/2 transform rotate-180 -translate-y-1/2 -translate-x-1/2 px-4 py-2 mb-10 opacity-70 z-50' onClick={handleClickUp}><Image src="/arrow.png" alt="arrow" width={30} height={30} /></button> {/** Arrow button up */}
                <div className={`absolute -mt-36 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 px-4 py-2 rounded drop-shadow-lg flex items-center justify-center text-slate-700 text-xl font-medium ${hidden1}` } > Project</div> {/** Hidden button */}
                <div className={`absolute -mt-20 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 px-4 py-2 rounded drop-shadow-lg flex items-center justify-center text-slate-700 text-xl font-medium ${button1}` } > Project</div> {/** First button */}
                <button disabled={isActive} className={`absolute mt-4 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 px-4 py-2 rounded drop-shadow-lg flex items-center justify-center text-slate-700 text-xl font-medium hover:text-white ${button2}`}> Project</button> {/** Second button */}
                <div className={`absolute mt-28 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 px-4 py-2 rounded drop-shadow-lg flex items-center justify-center text-slate-700 text-xl font-medium mb-7 ${button3}`}> Project</div> {/** Third button */}
                <div className={`absolute mt-44 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 px-4 py-2 rounded drop-shadow-lg flex items-center justify-center text-slate-700 text-xl font-medium ${hidden2}` } > Project</div> {/** Hidden button */}
                <button className='absolute mt-44 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 px-4 py-2 mb-10 opacity-70' onClick={handleClickDown} disabled={isActive}><Image src="/arrow.png" alt="arrow" width={30} height={30} /></button> {/** Arrow button down */}
            </div>
        </div>
    </>
    );
};


export default Projects;