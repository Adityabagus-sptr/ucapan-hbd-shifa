import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift } from 'lucide-react';

const Kado = () => {
    const [openedGifts, setOpenedGifts] = useState([false, false]);

    const handleOpenGift = (index) => {
        setOpenedGifts((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
        });
    };

    const gifts = [
        {
            message: "🎉 Surprise 1! 🎉",
            url: "https://www.youtube.com/watch?v=FZsrRQocrIU"
        },
        {
            message: "🎊 Kejutan Kedua! 🎊",
            url: "https://www.youtube.com/watch?v=2bG_t6n-Fog"
        }
    ];

    return (
        <div
            id="kado-section"
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-200 via-pink-200 to-red-200 p-6"
        >
            <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-3xl w-full text-center">
                <h1 className="text-3xl font-bold text-pink-600 mb-4">🎁 Kado Spesial untuk Kamu</h1>
                <p className="text-gray-700 mb-8">
                    Terima kasih sudah mengirim pesan, sekarang waktunya buka kado kamu!
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    {gifts.map((gift, index) => (
                        <motion.div
                            key={index}
                            className="gift-box cursor-pointer inline-block"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleOpenGift(index)}
                        >
                            {!openedGifts[index] ? (
                                <motion.div
                                    className="bg-pink-400 w-32 h-32 rounded-xl flex items-center justify-center shadow-lg"
                                    initial={{ y: -20 }}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                >
                                    <Gift size={48} color="#fff" />
                                </motion.div>
                            ) : (
                                <AnimatePresence>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="bg-yellow-200 w-64 p-4 rounded-xl shadow-lg"
                                    >
                                        <p className="text-lg text-gray-800 mb-4 font-semibold">{gift.message}</p>
                                        <a
                                            href={gift.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-pink-600 transition-all duration-300"
                                        >
                                            Buka Kado
                                        </a>
                                    </motion.div>
                                </AnimatePresence>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Kado;
