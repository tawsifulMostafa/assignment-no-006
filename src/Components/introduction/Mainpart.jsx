import { CircleStop, Play } from 'lucide-react';
import React from 'react';
import banner from  '../../assets/banner.png'


const Mainpart = () => {
    return (
        <div className='lg:md:flex p-4 my-28 justify-between'>
            <div className='ml-16'>
                <p className='bg-[#E1E7FF] text-purple-800 p-1   rounded-4xl flex gap-2 '><CircleStop></CircleStop> New: AI-Powered Tools Available</p>
            <h1 className='font-semibold text-[40px] my-5'>Supercharge Your <br /> Digital Workflow</h1>
            <p>Access premium AI tools, design assets, templates, and productivity <br />
                software—all in one place. Start creating faster today. <br />
                Explore Products</p>
            <div className='flex gap-4 mt-5'>

                <button className="btn btn-primary">Explore Products</button>

                <button className='flex btn'><Play></Play> Watch demo</button>
            </div>
            </div>
            <img className='mr-16 mt-5' src={banner} alt="" />
        </div>
    );
};

export default Mainpart;