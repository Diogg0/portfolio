import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Intro from '@/components/Intro/Intro';
import Projects from '@/components/Projects/Projects';
import Head from 'next/head';
import Test from '@/components/Test/Test';


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
            <Intro />
            <Projects/>
            <Test/>
            
  
        
        
    </>
}
export default index;


//<Image src="/terminal.png" alt="terminal" width={600} height={600} />
// <span className="animate-blink absolute top-20 pt-16 text-white text-1xl font-sans">|</span>