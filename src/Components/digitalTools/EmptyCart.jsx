import { SquareX } from 'lucide-react';
import React from 'react';

const EmptyCart = () => {
    return (
        <div className='shadow-2xl h-70'>
            <h3 className='font-bold text-4xl pt-10'>Your Cart</h3>
            <div>
                <SquareX className='h-20 w-20 mx-auto'></SquareX>

                <p className='8 text-center pb-8'>Your Cart is Empty </p>
            </div>
        </div>

    );
};

export default EmptyCart;