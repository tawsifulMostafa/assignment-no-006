import { ShoppingCart, Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='flex justify-between items-center m-4 p-4'>
            <p className='text-[#2614ac] font-extrabold text-5xl my-3'>DigiTools</p>

            {/* Desktop Menu */}
            <div className='hidden lg:block'>
                <ul className='flex gap-4'>
                    <li>products</li>
                    <li>features</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>FAQ</li>
                </ul>
            </div>

            <div className='hidden lg:flex gap-4 mt-4 items-center'>
                <ShoppingCart className='m-2' />
                <button className='btn rounded-2'>login</button>
                <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl btn'>Get Started</button>
            </div>

            {/* Mobile Hamburger */}
            <button className='lg:hidden' onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className='absolute top-24 left-0 w-full bg-white shadow-lg z-50 p-6 flex flex-col gap-4 lg:hidden'>
                    <ul className='flex flex-col gap-4'>
                        <li>products</li>
                        <li>features</li>
                        <li>Pricing</li>
                        <li>Testimonials</li>
                        <li>FAQ</li>
                    </ul>
                    <div className='flex gap-4 items-center'>
                        <ShoppingCart className='m-2' />
                        <button className='btn rounded-2'>login</button>
                        <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl btn'>Get Started</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;