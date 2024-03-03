"use client";
import React from 'react';
import {useState, useEffect, useRef, RefObject} from 'react';

type AboutProps = {
    id:string;
    
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



const About:React.FC<AboutProps> = ({id}) => {

    const ref1 = useRef<HTMLDivElement>(null);
    const isVisible1 = UseIsVisible(ref1);

    return (<>
        <div id={id} className="flex items-center justify-between">
            {/** Left side of the screen */}
            <div className="box box bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 w-2/5 h-screen pt-20">
                <p ref={ref1} className={`text-white flex justify-left items-top font-bold text-4xl pt-20 pl-5 transition-transform-all ease-in duration-1000 ${isVisible1 ? "opacity 100" : "opacity-0 -translate-x-20"}`}>About me</p>
            </div>
            
            {/** Right side of the screen */}
            <div className="relative place-items-center box bg-white h-screen w-3/5 pt-18 pl-10"> 
                
            </div>
        </div>
    </>
    
    )

}
export default About;