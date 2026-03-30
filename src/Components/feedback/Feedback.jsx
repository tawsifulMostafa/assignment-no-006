import React from 'react';

const Feedback = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] h-56 text-white flex justify-around items-center text-center pt-10 mb-32'>
             
                <div>
                    <h1 className='text-5xl mb-3'>50K+</h1>
                    <p>Active Users</p>
                </div>
                <div>
                    <h1 className='text-5xl mb-3 '>200+</h1>
                    <p>Premium Tools</p>
                </div>
                <div>
                    <h1 className='text-5xl mb-3'>4.9</h1>
                    <p>Rating</p>
                </div>

            
        </div>
    );
};

export default Feedback;