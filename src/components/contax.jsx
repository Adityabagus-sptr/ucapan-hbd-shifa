import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            const newUserMessage = { text: input, sender: 'user' };
            setMessages([...messages, newUserMessage]);
            setInput('');
            sendEmail(input);
        }
    };

    const sendEmail = (message) => {
        const templateParams = {
            title: "Pesan dari Sifa Chat",     // Untuk {{title}} di template EmailJS
            name: "User Chat",                 // Untuk {{name}} di template EmailJS
            time: new Date().toLocaleString(), // Untuk {{time}} di template EmailJS
            message: message                   // Untuk {{message}} di template EmailJS
        };

        emailjs.send(
            'service_rexbi79',         // ✅ Ganti dengan SERVICE ID kamu
            'template_7z7c8sg',        // ✅ Ganti dengan TEMPLATE ID kamu
            templateParams,
            '5QgdOnsKQFyTmhTTA'        // ✅ Ganti dengan PUBLIC KEY (User ID) kamu
        ).then(
            (res) => {
                console.log('✅ Email sent:', res.text);
            },
            (err) => {
                console.error('❌ Email failed:', err);
            }
        );
    };

    return (
        <div className="chatbot-container p-4 border rounded-lg shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 max-w-lg mx-auto my-6">
            <h2 className="text-white text-xl font-semibold mb-4 text-center">Silakan tinggalkan pesan</h2>

            <div className="messages mb-4 h-72 overflow-y-auto p-4 space-y-4 bg-white rounded-lg shadow-lg">
                {messages.map((msg, index) => (
                    <div key={index} className={`message-container ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                        <p className={`p-3 text-sm rounded-lg inline-block max-w-xs shadow-md ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                            {msg.text}
                        </p>
                    </div>
                ))}
            </div>

            <div className="input-group flex mt-4 bg-white p-3 rounded-lg shadow-md">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 border rounded-l-lg p-3 focus:outline-none"
                    placeholder="Ketik pesan...."
                />
                <button onClick={handleSend} className="bg-blue-500 text-white rounded-r-lg px-6 py-3 hover:bg-blue-600 transition-all duration-300">
                    Kirim
                </button>
            </div>
        </div>
    );
};

export default ChatBot;
