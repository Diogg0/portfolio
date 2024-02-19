import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Intro from '@/components/Intro/Intro';
import Projects from '@/components/Projects/Projects';


type indexProps = {
    
};

function HomePage() {

    return null;
}


const index:React.FC<indexProps> = () => {


    
    return <>
        
        <Navbar />
        <Intro />
        <Projects/>
        <div className="box bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 w-2/5 h-screen pt-20"></div>
        
    </>
}
export default index;


//<Image src="/terminal.png" alt="terminal" width={600} height={600} />
// <span className="animate-blink absolute top-20 pt-16 text-white text-1xl font-sans">|</span>