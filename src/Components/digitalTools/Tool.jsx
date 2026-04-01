import React, { useState } from 'react';
import Tools from '../../../public/jsonData/Tools.json';
import EmptyCart from './EmptyCart';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const labelColors = {
    "Best Seller": "bg-orange-100 text-orange-600",
    "Popular": "bg-green-100 text-green-600",
    "New": "bg-blue-100 text-blue-600",
};

const Tool = ({ cartItems = [], setCartItems }) => {
    const [selected, setSelected] = useState('products');


    let total = 0;
    cartItems.forEach(item => {
        total = total + Number(item.price.replace('$', '').split('/')[0]);
    });

    return (
        <div className='mb-30'>
            <div className='flex justify-center'>
                <button
                    onClick={() => setSelected("products")}
                    className={`btn mr-3 ${selected === "products" ? "btn-primary" : "btn-outline"}`}
                >
                    Products
                </button>

                <button
                    onClick={() => setSelected("cart")}
                    className={`btn ${selected === "cart" ? "btn-primary" : "btn-outline"}`}
                >
                    Cart ({cartItems.length})
                </button>
            </div>

            {selected === 'products' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {Tools.map((tool) => (
                        <div key={tool.id} className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">

                            <div className="flex items-center justify-between">
                                <img src={tool.icon} alt={tool.title} className="w-10 h-10 object-contain" />
                                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${labelColors[tool.label] || "bg-gray-100 text-gray-600"}`}>
                                    {tool.label}
                                </span>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900 text-lg">{tool.title}</h3>
                                <p className="text-sm text-gray-500 mt-1">{tool.description}</p>
                            </div>

                            <p className="text-2xl font-bold text-gray-900">
                                {tool.price.split('/')[0]}
                                <span className="text-sm font-normal text-gray-400">/{tool.price.split('/')[1]}</span>
                            </p>

                            <ul className="flex flex-col gap-1">
                                {tool.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="text-green-500">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => { setCartItems([...cartItems, tool]); toast.success('Added to cart!'); }}
                                disabled={cartItems.some(item => item.id === tool.id)}
                                className="mt-auto block text-center btn btn-primary hover:bg-purple-700 text-white font-semibold py-2.5 disabled:opacity-50 disabled:cursor-not-allowed">
                                {cartItems.some(item => item.id === tool.id) ? 'Added' : 'Buy Now'}
                            </button>

                        </div>
                    ))}
                </div>
            )}

            {selected === 'cart' && (
                cartItems.length === 0
                    ? <EmptyCart />
                    : <div>
                        <h3 className='font-bold text-4xl pt-10'>Your Cart</h3>

                        {cartItems.map((item, i) => (
                            <div key={i} className='flex justify-between bg-gray-100 shadow-2xl lg:md:p-5 lg:md:mx-20 mt-5 rounded-3xl list-none'>
                                <div className='flex'>
                                    <img className='w-5 m-3 md:lg:w-10 md:lg:h-5' src={item.icon} alt="" />
                                    <div>
                                        <li className='font-bold lg:md:text-[20px] text-[18px]'>{item.title}</li>
                                        <li className='text-gray-500'>{item.price}</li>
                                    </div>
                                </div>
                                <button onClick={() => { setCartItems(cartItems.filter(card => card.id !== item.id)); toast.error('Removed from cart!'); }} className='text-red-500 btn hover:bg-red-400'>Remove</button>
                            </div>

                        ))}
                        <div>
                            <div className='flex justify-between mx-20 mt-6 px-5'>
                                <span className='text-gray-500'>Total</span><span className='font-bold text-xl'>{total}$ </span>
                            </div>
                            <div className='mx-20 mt-4'>
                                <button onClick={() => { setCartItems([]); toast.success('Checkout successful!'); }} className='btn btn-primary w-full py-3 text-white'>Proceed To Checkout</button>
                            </div>
                        </div>
                    </div>
            )}

        </div>
    );
};

export default Tool;
