import React from 'react';
import Navbar from '@/components/Navbar/Navbar';

type indexProps = {
    
};

const index:React.FC<indexProps> = () => {
    
    return <>
        
        <Navbar />
        <div className="flex items-center justify-between">
            <div className="box bg-lime-400 w-2/5 h-screen flex justify-center items-top ">
                <p className="text-top pt-20"> Testing </p>
            </div>
            <div className="box bg-white w-3/5 h-screen"> Where</div>
        </div>
    </>
}
export default index;