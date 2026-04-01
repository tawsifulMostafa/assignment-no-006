import React from 'react';
import packageImg from '../../assets/package.png'
import user from '../../assets/user.png'
import Play from '../../assets/play.png'

const GetStarted = () => {
    return (
        <div>
            <h1 className='text-5xl mb-2 text-center font-bold '>Get Started in 3 Steps</h1>
            <p className='text-center mb-5'>Start using premium digital tools in minutes, not hours.</p>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-around gap-5 mx-16'>


                <div className='h-70'>
                    <div className='shadow-2xl p-4 relative rounded-4xl h-70'>
                        <div className='absolute right-2.5'>
                            <p className=' text-white bg-purple-500 rounded-2xl w-5'>01</p>
                        </div>
                        <img className=' mb-2  mx-auto' src={user} alt="" />
                        <h1 className='font-bold text-2xl text-center'>Create Account</h1>
                        <p className='text-center'>Sign up for free in seconds.No credit card <br /> required to get started.</p>
                    </div>


                </div>
                <div>
                    <div className=' shadow-2xl p-4 relative rounded-4xl h-70'>
                        <div className='absolute right-2.5'>
                            <p className=' text-white bg-purple-500 rounded-2xl w-5'>02</p>
                        </div>
                        <img className=' mb-2  mx-auto' src={packageImg} alt="" />
                        <h1 className='font-bold text-2xl text-center'>Choose Products</h1>
                        <p className='text-center'>Browse our catalog and select the tools <br />that fit your needs.</p>
                    </div>


                </div>
                <div>
                    <div className='shadow-xl p-4 relative rounded-4xl h-70 md:mx-auto'>
                        <div className='absolute right-2.5'>
                            <p className=' text-white bg-purple-500 rounded-2xl w-5'>03</p>
                        </div>
                        <img className=' mb-2 h-10 mx-auto' src={Play} alt="" />
                        <h2 className='font-bold text-2xl text-center'>Start Creating</h2>
                        <p className='text-center'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GetStarted;