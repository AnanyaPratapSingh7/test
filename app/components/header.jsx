'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
        <header className="bg-white px-4 py-3 flex items-center justify-between w-full max-w-6xl mx-auto md:pt-7">
            {/* Logo and Title */}
            <div className="flex items-center gap-3">
                <Image className="mr-2 w-12 h-12 object-contain hidden sm:block" src={'/digestion.png'} width={48} height={48} alt="Logo" />
                <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                        <h1 className="text-lg sm:text-2xl font-extrabold font-inter text-gray-900 whitespace-nowrap">Dr. Sandeep Verma</h1>
                        <div className="flex gap-1 mt-1 sm:mt-0">
                            <span className="bg-red-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">GI Surgery</span>
                            <span className="bg-rose-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">Gastrosciences</span>
                        </div>
                    </div>
                    <p className="text-xs sm:text-sm font-roboto text-gray-600 mt-1 max-w-xs sm:max-w-none">
                        FACS, FIAGES, FMAS, MCh Surgical Gastroenterology, M.S. (General Surgery), MBBS
                    </p>
                </div>
            </div>
            {/* Hamburger for mobile */}
            <button
                className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    {menuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>
            {/* Navigation */}
            <nav className="hidden md:flex space-x-6 text-base font-medium text-gray-800 pt-2">
                <a href="#" className="hover:text-red-600 transition">About Us</a>
                <a href="#" className="hover:text-red-600 transition">Experience</a>
                <a href="#" className="hover:text-red-600 transition">Expertise</a>
                <a href="#" className="hover:text-red-600 transition">Contact</a>
            </nav>
        </header>
        {/* Mobile dropdown menu that pushes content down */}
        {menuOpen && (
            <nav className="flex flex-col items-center md:hidden bg-white shadow z-40 w-full animate-fade-in">
                <a href="#" className="block w-full text-center py-3 border-b border-gray-100 hover:bg-red-50 hover:text-red-600 transition">About Us</a>
                <a href="#" className="block w-full text-center py-3 border-b border-gray-100 hover:bg-red-50 hover:text-red-600 transition">Experience</a>
                <a href="#" className="block w-full text-center py-3 border-b border-gray-100 hover:bg-red-50 hover:text-red-600 transition">Expertise</a>
                <a href="#" className="block w-full text-center py-3 hover:bg-red-50 hover:text-red-600 transition">Contact</a>
            </nav>
        )}
        </>
    );
}

export default Header;