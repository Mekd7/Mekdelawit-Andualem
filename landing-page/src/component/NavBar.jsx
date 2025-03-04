import '../style.css';
import React, { useState } from 'react'; 
import { MenuOutlined } from '@ant-design/icons'; 
import brand_pic from '../images/brand_pic.png';

export default function NavBar() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <>
            <ul className="NavBar-links flex justify-center items-center p-4 w-full">
                {/* Logo */}
                <img src={brand_pic} alt="brand picture" className="w-12 h-auto "/>

                {/* Desktop Menu - Hidden on small screens */}
                <div className="hidden sm:flex space-x-8 justify-center"> {/* Reduced space-x-10 to space-x-6 */}
                    <li className='ml-120'>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li className='mr-120'>Contact</li>
                    <button className="SignUp-btn bg-teal-950 text-white py-2 px-4 rounded-3xl">Sign Up</button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="sm:hidden flex justify-end ml-80 p-4">
                    <MenuOutlined className="text-3xl" onClick={toggleMenu} />
                </div>
            </ul>

            {/* Mobile Menu - Show when menuVisible is true */}
            {menuVisible && (
                <div className="sm:hidden fixed inset-0  bg-opacity-80 z-50 flex justify-end">
                    <div className="w-64 bg-white p-4 h-full">
                        <ul className="space-y-6 text-center">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><button className="SignUp-btn bg-teal-950 text-white py-2 px-4 rounded-3xl w-full">Sign Up</button></li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}