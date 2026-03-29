import { ShoppingCart } from 'lucide-react';
import React from 'react';


const Navbar = () => {
    return (
        <div className='flex justify-between m-4 p-4'>
            <p className='text-[#2614ac]  font-extrabold text-5xl'>DigiTools</p>
            <div>
                <ul className='flex gap-4  '>
                    <li>products</li>
                    <li>features</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className='flex gap-4 content-center justify-center'>
                 <ShoppingCart className='m-2'></ShoppingCart>
                 <button className='btn rounded-2'>login</button>

                 <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]   rounded-2xl btn'>Get Started</button>
              
            </div>
            
                    

        </div>
    );
};

export default Navbar;