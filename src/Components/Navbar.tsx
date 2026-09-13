import React from 'react';

const Navbar = () => {
    return (

        <div className="px-10 md:px-12 lg:px-16 pt-6 sticky top-0 z-50 bg-white">
            <nav className="flex justify-between items-center 
            border-b border-slate-200/50 px-6 pb-5">

                <img src="/src/assets/logo-text.png" alt="" />

                <ul className="flex gap-8">
                    <li className="text-[#db2777]"><a href="">Home</a></li>
                    <li><a href="">Technologies</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>

                <div className="flex gap-3">
                    <button className="text-[#334155] cursor-pointer">Sign In</button>
                    <button className="bg-[#d91b7e] text-[white] 
                    px-5 py-2 rounded-full hover:opacity-90 cursor-pointer ">Sign Up</button>
                </div>


            </nav>
        </div>
    );
};

export default Navbar;