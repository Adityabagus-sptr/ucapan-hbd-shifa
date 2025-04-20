import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { launchBalloons } from '../effects/balloonEffect';
import foto1 from '../assets/foto1.jpeg';
import foto2 from '../assets/foto2.jpeg';
import foto3 from '../assets/foto3.jpeg';
import foto4 from '../assets/foto6.jpeg';
import foto5 from '../assets/foto5.jpeg';
import fotoBunga from '../assets/bunga.png';
import boneka from '../assets/boneka.png';
import birthdaySong from '../assets/happy-birthday.mp3';

const Home = () => {
    const [showSlide, setShowSlide] = useState(false);
    const [showExtraMessage, setShowExtraMessage] = useState(false);
    const audioRef = useRef(null);

    const handleStartClick = () => {
        setShowSlide(true);
        launchBalloons();
        audioRef.current.play();
    };

    const handleImageClick = () => {
        setShowExtraMessage(true);
        launchBalloons();
        const homeSection = document.getElementById('home');
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="home" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-purple-200 px-4 relative overflow-hidden">
            <audio ref={audioRef} src={birthdaySong} preload="auto" />

            {showSlide && (
                <>
                    {/* Bunga Atas */}
                    <motion.img
                        src={fotoBunga}
                        alt="Bunga Kiri Atas"
                        className="absolute top-0 left-0 w-28 md:w-36 z-10 transform -rotate-12"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    />
                    <motion.img
                        src={fotoBunga}
                        alt="Bunga Kanan Atas"
                        className="absolute top-0 right-0 w-28 md:w-36 z-10 transform rotate-12"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                    />

                    {/* Boneka Bawah */}
                    <motion.img
                        src={boneka}
                        alt="Boneka Kiri Bawah"
                        className="absolute bottom-0 left-0 w-28 md:w-40 z-10 transform rotate-10"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    />
                    <motion.img
                        src={boneka}
                        alt="Boneka Kanan Bawah"
                        className="absolute bottom-0 right-0 w-28 md:w-40 z-10 transform -rotate-10"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                    />
                </>
            )}

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
            >
                <h1 className="text-4xl font-bold text-pink-700 mb-2">Happy birthday Shifa Afrila 🎊</h1>
                {!showSlide && <p className="text-gray-600 text-center">Tekan tombol di bawah untuk mulai!</p>}
            </motion.div>

            {!showSlide && (
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleStartClick}
                    className="bg-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition"
                >
                    Mulai 🎂
                </motion.button>
            )}

            {showSlide && (
                <>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            {
                                src: foto1,
                                title: 'Happy birthday! 🎈',
                                message: 'Semoga hari ini penuh kebahagiaan dan tawa.',
                                kata: 'Shifa Afrila, di hari spesialmu ini, semoga semua impian dan harapanmu menjadi kenyataan. \n Kamu pantas mendapat kebahagiaan tak terhingga! 💖'
                            },
                            {
                                src: foto2,
                                title: 'Happy birthday! 🎈',
                                message: 'Semoga semua harapanmu terkabul dengan indah.',
                                kata: 'Shifa, jangan pernah ragu untuk mengejar apa yang kamu inginkan. \n Usia 23 adalah awal dari segala sesuatu yang luar biasa. Selamat berjuang! 💪✨'
                            },
                            {
                                src: foto3,
                                title: 'Happy birthday! 🎈',
                                message: 'Nikmati setiap momen dan rayakan dengan suka cita!',
                                kata: 'Selamat ulang tahun, Shifa! \n Semoga tahun ini penuh dengan tawa, cinta, dan kenangan indah. \n Jangan lupa tetap jadi dirimu yang ceria dan positif! 🌸'
                            },
                            {
                                src: foto4,
                                title: 'Happy birthday! 🎈',
                                message: 'Semoga hari ini menjadi kenangan yang indah.',
                                kata: 'Shifa Afrila, di usiamu yang ke-23 ini, semoga kamu semakin bijaksana, sabar, dan terus menginspirasi orang-orang di sekitarmu. \n Happy birthday! 🎉🎂'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7, delay: index * 0.2 }}
                                className="bg-white rounded-2xl shadow-xl p-6 flex"
                            >
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    onClick={handleImageClick}
                                    className="w-1/2 h-48 rounded-xl object-cover mb-4 grayscale hover:grayscale-0 transition duration-500 cursor-pointer"
                                />
                                <div className="w-1/2 pl-4">
                                    <h2 className="text-2xl font-bold text-purple-700 mb-2">{item.title}</h2>
                                    <p className="text-gray-700">{item.message}</p>
                                    <p className="text-gray-700 italic whitespace-pre-line">{item.kata}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {showExtraMessage && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="mt-10 bg-white rounded-xl shadow-lg px-6 py-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6"
                        >
                            <img
                                src={foto5}
                                alt="Foto Shifa"
                                className="w-80 h-100 object-cover rounded-xl shadow-md"
                            />
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl font-bold text-pink-600 mb-4">Ucapan Selamat Ulang Tahun 🎊</h2>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    Selamat ulang tahun ke-23, Shifa Afrila! 🥳<br /><br />
                                    Di usia baru ini, semoga kamu makin kuat, makin sabar, dan makin bahagia. Jangan badmood terus, nanti cantiknya ketutup! 😜<br /><br />
                                    Jangan suka marah-marah juga, biar energi positifnya nggak bocor ke mana-mana. Ingat, senyum kamu itu nyebarin vibe baik loh! 😊<br /><br />
                                    Semoga semua cita-cita dan keinginanmu pelan-pelan tercapai, dan kamu selalu dikelilingi orang-orang yang sayang dan support kamu apa adanya.<br /><br />
                                    Tetap jadi versi terbaik dari dirimu yaa — yang ceria, kuat, dan penuh kasih seperti biasanya. Selamat bertumbuh, Shifa! 💖🎂
                                </p>
                            </div>
                        </motion.div>
                    )}
                </>
            )}
        </div>
    );
};

export default Home;
