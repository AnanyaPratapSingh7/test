import Image from 'next/image';
import React from 'react'

const header = () => {
    return (
        <div className="bg-white p-4 flex justify-between items-center pt-7 w-[70vw] mx-auto ">
            <div className='flex flex-row'>
                <Image className='mr-5' src={'/digestion.png'} width={60} height={20}/>
                <div>
                    <div className="flex items-center space-x-2">
                        <h1 className="text-2xl font-extrabold font-inter text-gray-900">Dr. Sandeep Verma</h1>
                        <span className="bg-red-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">GI Surgery</span>
                        <span className="bg-rose-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">Gastrosciences</span>
                    </div>
                    <p className="text-sm font-roboto text-gray-600 mt-1">
                        FACS, FIAGES, FMAS, MCh Surgical Gastroenterology, M.S. (General Surgery), MBBS
                    </p>
                </div>
            </div>
            <nav className="flex space-x-6 text-lg font-medium text-gray-800 pt-2">
                <a href="#" className="hover:text-red-600 transition">About Us</a>
                <a href="#" className="hover:text-red-600 transition">Experience</a>
                <a href="#" className="hover:text-red-600 transition">Expertise</a>
                <a href="#" className="hover:text-red-600 transition">Contact</a>
            </nav>
        </div>
    );
}

export default header