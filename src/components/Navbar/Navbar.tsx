import React from 'react';

type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    
    return <>
        <nav className="bg-indigo-700 h-20 w-full flex items-center justify-between px-8 ">
            <div className="text-lime-400 font-bold text-3xl">Ratnakirti</div>
            <div className="flex items-center space-x-8 text-lime-400">
                <div className= "hover:bg-lime-400 hover:text-indigo-700">Home</div>
                <div className= "hover:bg-lime-400 hover:text-indigo-700">About</div>
                <div className= "hover:bg-lime-400 hover:text-indigo-700">Contact</div>
            </div>
        </nav>
    </>
}
export default Navbar;