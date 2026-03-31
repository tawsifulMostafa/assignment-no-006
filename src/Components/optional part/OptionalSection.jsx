import React from 'react';

const OptionalSection = () => {
    return (

        <div className="w-full  mx-auto text-center rounded-xl 
                bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500 
                text-white px-6 py-16">

            <p className="text-xl opacity-70 mb-4">—</p>

            <h1 className="text-3xl md:text-4xl font-bold mb-5">
                Ready To Transform Your Workflow?
            </h1>

            <p className="text-sm md:text-base opacity-80 mb-8">
                Join thousands of professionals who are already using Digitools to work smarter.
                Start your free trial today.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                <button className="btn bg-white text-purple-600 px-6 py-2 rounded-full font-medium">
                    Explore Products
                </button>

                <button className=" btn border border-white px-6 py-2 rounded-full font-medium">
                    View Pricing
                </button>
            </div>

            <p className="text-xs opacity-70">
                14-day free trial • No credit card required • Cancel anytime
            </p>

            <p className="text-xl opacity-70 mt-4">—</p>

        </div>

    );
};

export default OptionalSection;