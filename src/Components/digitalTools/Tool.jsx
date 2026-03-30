import React, { useState } from 'react';
import Tools from '../../../public/jsonData/Tools.json';

const labelColors = {
    "Best Seller": "bg-orange-100 text-orange-600",
    "Popular": "bg-green-100 text-green-600",
    "New": "bg-blue-100 text-blue-600",
};

const Tool = () => {
    const [selected, setSelected] = useState('products')

    return (
        <div>
            <div className='flex justify-center'>
                <button
                    onClick={() => setSelected("products")}
                    className={`btn mr-3 ${selected === "products" ? "btn-primary" : "btn-outline"
                        }`}
                >
                    Products
                </button>

                <button
                    onClick={() => setSelected("cart")}
                    className={`btn ${selected === "cart" ? "btn-primary" : "btn-outline"
                        }`}
                >
                    Cart
                </button>
            </div>

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
                            {tool.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="text-green-500">✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className="mt-auto block text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 rounded-full transition-colors">
                            Buy Now
                        </button>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tool;