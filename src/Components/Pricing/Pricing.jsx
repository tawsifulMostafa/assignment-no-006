import React from "react";

const Pricing = () => {
    return (
        <div className="py-16">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-3">
                    Simple, Transparent Pricing
                </h2>
                <p className="text-gray-500">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>

            {/* Cards */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">

                {/* Starter */}
                <div className="w-80 p-6 rounded-xl shadow-lg bg-white text-center">
                    <h3 className="font-bold text-lg">Starter</h3>
                    <p className="text-gray-500 text-sm mb-3">
                        Perfect for getting started
                    </p>

                    <h2 className="text-3xl font-bold mb-4">$0<span className="text-sm">/Month</span></h2>

                    <div className="text-left space-y-2 mb-6">
                        <p><span className="text-green-500 mr-2">✓</span>Access to 10 free tools</p>
                        <p><span className="text-green-500 mr-2">✓</span>Basic templates</p>
                        <p><span className="text-green-500 mr-2">✓</span>Community support</p>
                        <p><span className="text-green-500 mr-2">✓</span>1 project per month</p>
                    </div>

                    <button className="btn w-full bg-linear-to-r from-indigo-500 to-purple-500 text-white border-none">
                        Get Started Free
                    </button>
                </div>


                <div className="w-80 p-6 rounded-xl shadow-xl text-white bg-linear-to-r from-indigo-600 to-purple-600 text-center relative">


                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-400 text-white text-xs px-3 py-1 rounded-full">
                        Most Popular
                    </span>

                    <h3 className="font-bold text-lg">Pro</h3>
                    <p className="text-sm mb-3">Best for professionals</p>

                    <h2 className="text-3xl font-bold mb-4">$29<span className="text-sm">/Month</span></h2>

                    <div className="text-left space-y-2 mb-6">
                        <p>✓ Access to all premium tools</p>
                        <p>✓ Unlimited templates</p>
                        <p>✓ Priority support</p>
                        <p>✓ Unlimited projects</p>
                        <p>✓ Cloud sync</p>
                        <p>✓ Advanced analytics</p>
                    </div>

                    <button className="btn w-full bg-white text-purple-600 py-2 rounded-lg font-semibold">
                        Start Pro Trial
                    </button>
                </div>


                <div className="w-80 p-6 rounded-xl shadow-lg bg-white text-center">
                    <h3 className="font-bold text-lg">Enterprise</h3>
                    <p className="text-gray-500 text-sm mb-3">
                        For teams and businesses
                    </p>

                    <h2 className="text-3xl font-bold mb-4">$99<span className="text-sm">/Month</span></h2>

                    <div className="text-left space-y-2 mb-6">
                        <p><span className="text-green-500 mr-2">✓</span>Everything in Pro</p>
                        <p><span className="text-green-500 mr-2">✓</span>Team collaboration</p>
                        <p><span className="text-green-500 mr-2">✓</span>Custom integrations</p>
                        <p><span className="text-green-500 mr-2">✓</span>Dedicated support</p>
                        <p><span className="text-green-500 mr-2">✓</span>SLA guarantee</p>
                        <p><span className="text-green-500 mr-2">✓</span>Custom branding</p>
                    </div>

                    <button className="btn w-full bg-linear-to-r from-indigo-500 to-purple-500 text-white border-none">
                        Contact Sales
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Pricing;