import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-4 px-8 bg-white ">
            <div className="text-customRed font-bold text-3xl">witt.</div>

            <div className="flex-1 flex justify-center">
                <ul className="flex space-x-8 font-semibold">
                    <li><a href="#home" >Home</a></li>
                    <li><a href="#pricing" >Pricing</a></li>
                    <li><a href="#blog" >Blog</a></li>
                    <li><a href="#faqs" >FAQs</a></li>
                    <li><a href="#about-us" >About Us</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
