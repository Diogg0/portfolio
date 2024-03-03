import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Intro from '@/components/Intro/Intro';
import Head from 'next/head';
import Projects from '@/components/Projects/Projects';
import About from '@/components/About/About';

type indexProps = {
    
};

function HomePage() {

    return null;
}


const index:React.FC<indexProps> = () => {

    
    return <>
        <Head>
            <link rel="icon" href="/logo.png" />
        </Head>
       
            <Navbar />
            <Intro id="intro"/>
            <Projects id="project"/>
            <About id="about"/>
            
  
        
        
    </>
}
export default index;


//<Image src="/terminal.png" alt="terminal" width={600} height={600} />
// <span className="animate-blink absolute top-20 pt-16 text-white text-1xl font-sans">|</span>