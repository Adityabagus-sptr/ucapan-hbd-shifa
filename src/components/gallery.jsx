import React, { useRef, useState } from 'react';
import foto1 from '../assets/foto1.jpeg';
import foto2 from '../assets/foto2.jpeg';
import foto3 from '../assets/foto3.jpeg';
import foto4 from '../assets/foto4.jpeg';
import foto5 from '../assets/foto5.jpeg';
import foto6 from '../assets/foto6.jpeg';
import foto7 from '../assets/foto7.jpeg';
import foto8 from '../assets/foto8.jpeg';
import foto9 from '../assets/foto9.jpeg';
import foto10 from '../assets/foto10.jpeg';
import foto11 from '../assets/foto11.jpeg';
import foto12 from '../assets/foto12.jpeg';
import foto13 from '../assets/foto13.jpeg';
import foto14 from '../assets/foto14.jpeg';
import foto15 from '../assets/foto15.jpeg';
import foto16 from '../assets/foto16.jpeg';
import foto17 from '../assets/foto17.jpeg';
import foto18 from '../assets/foto18.jpeg';
import foto19 from '../assets/foto19.jpeg';
import foto20 from '../assets/foto20.jpeg';
import foto21 from '../assets/foto21.jpeg';
import foto22 from '../assets/foto22.jpeg';
import foto23 from '../assets/foto23.jpeg';
import foto24 from '../assets/foto24.jpeg';
import foto25 from '../assets/foto25.jpeg';
import foto26 from '../assets/foto26.jpeg';
import foto27 from '../assets/foto27.jpeg';
import foto28 from '../assets/foto28.jpeg';
import foto29 from '../assets/foto29.jpeg';
import foto30 from '../assets/foto30.jpeg';
import foto31 from '../assets/foto31.jpeg';
import foto32 from '../assets/foto32.jpeg';
import foto33 from '../assets/foto33.jpeg';
import music from '../assets/musik.mp3';

const Gallery = () => {
    const [showGallery, setShowGallery] = useState(false);
    const audioRef = useRef(null);
  
    const images = [
      foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11,
      foto12, foto13, foto14, foto15, foto16, foto17, foto18, foto19, foto20,
      foto21, foto22, foto23, foto24, foto25, foto26, foto27, foto28, foto29,
      foto30, foto31, foto32, foto33,
    ];
  
    const handleStart = () => {
      setShowGallery(true);
      audioRef.current.play(); // mulai lagu saat klik
    };
  
    return (
      <div
        id="gallery"
        className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-100 py-16 px-4 flex flex-col items-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-8 text-center drop-shadow-xl">
          Galeri Foto 🎉
        </h1>
  
        {/* Audio Player (hidden) */}
        <audio ref={audioRef} src={music} loop hidden />
  
        {!showGallery ? (
          <button
            onClick={handleStart}
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300"
          >
            Mulai Galeri
          </button>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full max-w-7xl mt-8 animate-fade-in">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-xl group transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-white"
              >
                <img
                  src={src}
                  alt={`Foto ${index + 1}`}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110 grayscale hover:grayscale-0"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent px-4 py-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                  Foto Shifa Afrila {index + 1}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default Gallery;