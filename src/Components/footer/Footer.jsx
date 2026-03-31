import React from 'react';
import fb from '../../../src/assets/facebook.png';
import ig from '../../../src/assets/insta.png';
import x from '../../../src/assets/twitter.png';

const Footer = () => {
    return (
        <footer className="bg-[#0f1117] text-gray-400">

            <div className="px-6 sm:px-10 lg:px-20 py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

                    {/* Brand */}
                    <div className="lg:col-span-2 space-y-4">
                        <h2 className="text-white text-2xl font-bold">DigiTools</h2>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Premium digital tools for creators, professionals, and businesses.
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    {/* Product */}
                    <div className="space-y-4">
                        <h3 className="text-white text-sm font-semibold uppercase tracking-widest">Product</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-white transition-colors">Features </li>
                            <li className="hover:text-white transition-colors">Pricing</li>
                            <li className="hover:text-white transition-colors"> Templates</li>
                            <li className="hover:text-white transition-colors">Integrations</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                        <h3 className="text-white text-sm font-semibold uppercase tracking-widest">Company</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-white transition-colors">About</li>
                            <li className="hover:text-white transition-colors">Blog</li>
                            <li className="hover:text-white transition-colors">Careers</li>
                            <li className="hover:text-white transition-colors">Press</li>
                        </ul>
                    </div>

                    {/* Resources + Social */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-white text-sm font-semibold uppercase tracking-widest">Resources</h3>
                            <ul className="space-y-3 text-sm">
                                <li><a href="" className="hover:text-white transition-colors">Documentation</a></li>
                                <li><a href="" className="hover:text-white transition-colors">Help Center</a></li>
                                <li><a href="" className="hover:text-white transition-colors">Community</a></li>
                                <li><a href="" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-white text-sm font-semibold uppercase tracking-widest">Social Links</h3>
                            <div className="flex items-center gap-3">
                                <li className="w-9 h-9 rounded-full bg-[#1e2130] flex items-center justify-center hover:bg-[#2a2f45] transition-colors">
                                    <img src={fb} alt="Facebook" className="w-4 h-4 object-contain" />
                                </li>
                                <li className="w-9 h-9 rounded-full bg-[#1e2130] flex items-center justify-center hover:bg-[#2a2f45] transition-colors">
                                    <img src={ig} alt="Instagram" className="w-4 h-4 object-contain" />
                                </li>
                                <li className="w-9 h-9 rounded-full bg-[#1e2130] flex items-center justify-center hover:bg-[#2a2f45] transition-colors">
                                    <img src={x} alt="Twitter" className="w-4 h-4 object-contain" />
                                </li>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="border-t border-white/10" />

            <div className="px-6 sm:px-10 lg:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-gray-500">© 2026 Digitools. All rights reserved.</p>
                <div className="flex items-center gap-5 text-xs text-gray-500">
                    <li className="hover:text-white transition-colors">Privacy Policy</li>
                    <li className="hover:text-white transition-colors">Terms of Service</li>
                    <li className="hover:text-white transition-colors">Cookies</li>
                </div>
            </div>

        </footer>
    );
};

export default Footer;