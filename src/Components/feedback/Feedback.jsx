import React from 'react';

const Feedback = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white mb-32'>
            <div className='max-w-5xl mx-auto px-6 py-14 flex flex-col sm:flex-row justify-around items-center gap-10 sm:gap-0 text-center'>
                
                <div className='flex-1'>
                    <h1 className='text-5xl font-bold mb-2 tracking-tight'>50K+</h1>
                    <p className='text-white/80 text-sm font-medium uppercase tracking-widest'>Active Users</p>
                </div>

                <div className='hidden sm:block w-px h-14 bg-white/25 self-center' />

                <div className='flex-1'>
                    <h1 className='text-5xl font-bold mb-2 tracking-tight'>200+</h1>
                    <p className='text-white/80 text-sm font-medium uppercase tracking-widest'>Premium Tools</p>
                </div>

                <div className='hidden sm:block w-px h-14 bg-white/25 self-center' />

                <div className='flex-1'>
                    <h1 className='text-5xl font-bold mb-2 tracking-tight'>4.9</h1>
                    <p className='text-white/80 text-sm font-medium uppercase tracking-widest'>Rating</p>
                </div>

            </div>
        </div>
    );
};

export default Feedback;