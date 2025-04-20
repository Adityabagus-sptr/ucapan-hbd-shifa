import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import fotoShifa from '../assets/foto4.jpeg';
import fotoBunga from '../assets/bunga.png';
import boneka from '../assets/boneka.png';

const About = () => {
    return (
        <div id="about" className="min-h-screen px-6 py-12 flex flex-col items-center bg-pink-50">
            <h1 className="text-4xl font-bold text-pink-700 mb-4">Tentang Shifa Afrila 🎉</h1>
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center">
                <img 
                    src={fotoShifa} 
                    alt="Shifa Afrila" 
                    className="w-1/2 h-auto rounded-xl shadow-md mb-4 md:mb-0 md:mr-4 grayscale hover:grayscale-0 transition duration-500"
                />
                <div className="flex-1">
                    <p className="text-lg text-gray-800 leading-relaxed mb-4">
                        Shifa Afrila lahir pada tahun 2002. Saat ini, ia adalah seorang mahasiswa yang sedang menapaki perjalanan hidup dan pendidikan dengan penuh semangat (dan sedikit drama).
                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed mb-4">
                        Dikenal sebagai pribadi yang cerdas dan ceria, tapi juga punya sisi unik yang bikin orang-orang di sekitarnya makin sayang: gampang badmood dan emosian! 😆 Tapi justru itulah yang bikin Shifa jadi beda dari yang lain.
                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed mb-4">
                        Meskipun sering berubah mood kayak cuaca, Shifa tetap punya hati yang tulus dan perhatian. Di balik ekspresi jutek atau marahnya, ada sosok yang hangat dan peduli. ❤️
                    </p>
                </div>
            </div>
            <div className="flex justify-between mt-6 w-full max-w-4xl">
                <motion.img 
                    src={fotoBunga} 
                    alt="Bunga" 
                    className="w-20 h-auto" 
                    animate={{ y: [0, -10, 0] }} 
                    transition={{ repeat: Infinity, duration: 2 }} 
                />
                <motion.img 
                    src={boneka} 
                    alt="Boneka" 
                    className="w-20 h-auto" 
                    animate={{ y: [0, 10, 0] }} 
                    transition={{ repeat: Infinity, duration: 2 }} 
                />
                <motion.img 
                    src={boneka} 
                    alt="Boneka" 
                    className="w-20 h-auto" 
                    animate={{ y: [0, 10, 0] }} 
                    transition={{ repeat: Infinity, duration: 2 }} 
                />
                <motion.img 
                    src={fotoBunga} 
                    alt="Bunga" 
                    className="w-20 h-auto" 
                    animate={{ y: [0, -10, 0] }} 
                    transition={{ repeat: Infinity, duration: 2 }} 
                />
            </div>
        </div>
    );
};

export default About;
