import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    return (
        <nav className="bg-gradient-to-br from-pink-100 to-purple-200 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-pink-700 text-2xl font-extrabold transition-transform transform hover:scale-105">Happy birthday!</h1>
                <button 
                    className="md:hidden text-white transition-transform transform hover:scale-110"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <ul className="hidden md:flex space-x-6">
                    <li><a href="#home" className="text-pink-700 hover:underline hover:text-white transition">Beranda</a></li>
                    <li><a href="#about" className="text-pink-700 hover:underline hover:text-white transition">Tentang</a></li>
                    <li><a href="#gallery" className="text-pink-700 hover:underline hover:text-white transition">Galeri</a></li>
                    <li><a href="#contact" className="text-pink-700 hover:underline hover:text-white transition">Kontak</a></li>
                </ul>
            </div>
            {mobileMenuOpen && (
                <div className="md:hidden mt-4 bg-purple-200 rounded-lg p-4">
                    <ul className="flex flex-col space-y-2">
                        <li><a href="#home" className="text-white hover:underline block transition hover:text-yellow-300">Beranda</a></li>
                        <li><a href="#about" className="text-white hover:underline block transition hover:text-yellow-300">Tentang</a></li>
                        <li><a href="#gallery" className="text-white hover:underline block transition hover:text-yellow-300">Galeri</a></li>
                        <li><a href="#conta" className="text-white hover:underline block transition hover:text-yellow-300">Kontak</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;