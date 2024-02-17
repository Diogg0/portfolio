import React from 'react';

type NavbarProps = {
    
};



const Navbar:React.FC<NavbarProps> = () => {
    
    return <>
        <meta name="viewport" content="width=device-width, initial-scale=1 height=device-height" />

        <nav className="bg-white h-20 w-full flex items-center justify-between px-8 fixed drop-shadow-2xl border border-slate-200">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold text-3xl">Ratnakirti Kamble</div>
            <div className="flex items-center space-x-8">
                <button className= "text-indigo-500 group relative py-2 px-4 transition-transform duration-300 ease-in transform translate-y-0 hover:translate-y-[-5px]">Home</button>
                <button className= "text-purple-500 group relative py-2 px-4 transition-transform duration-300 ease-in transform translate-y-0 hover:translate-y-[-5px]">About</button>
                <button className= "text-pink-500 group relative py-2 px-4 transition-transform duration-300 ease-in transform translate-y-0 hover:translate-y-[-5px]">Contact</button>
            </div>
        </nav>
    </>
}
export default Navbar;