import React from 'react';

const Navbar = () => {
    return (

        <div className="px-10 md:px-12 lg:px-16 pt-6 ">
            <nav className="flex justify-between items-center border-b border-slate-200/50 px-6 pb-5">

                <img src="/src/assets/logo-text.png" alt="" />

                <ul className="flex gap-8">
                    <li className="text-[#db2777]"><a href=""></a>Home</li>
                    <li><a href=""></a>Technologies</li>
                    <li><a href=""></a>Projects</li>
                    <li><a href=""></a>About</li>
                    <li><a href=""></a>Contact</li>
                </ul>

                <div className="flex gap-3">
                    <button className="text-[#334155]">Sign In</button>
                    <button className="bg-[#d91b7e] text-[white] px-5 py-2 rounded-full hover:opacity-90  ">Sign Up</button>
                </div>


            </nav>
        </div>
    );
};

export default Navbar;