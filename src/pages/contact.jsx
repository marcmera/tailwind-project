import React from 'react';
import { useState } from 'react';


export function Contact() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Enviar el formulario por correo electrónico o a una API
    };

    return (
        <div className="container mx-auto mt-24 border border-gray-200 rounded-lg shadow-lg w-[30%] h-[600px] flex flex-col justify-center items-center">
            <h1 className="text-5xl text-center font-bold">Contact</h1>

            <form onSubmit={handleSubmit} className="p-4 mt-5 flex flex-col w-[500px]">
                <label htmlFor="username" className="text-2xl font-bold"> Username</label>
                <input
                    type="text"
                    className="form-control my-2 w-56"
                    id="username"
                    placeholder=" Username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="name" className="text-2xl font-bold"> Name</label>
                <input
                    type="text"
                    className="form-control my-2 w-56"
                    id="name"
                    placeholder=" Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email" className="text-2xl font-bold"> Electronic Adress</label>
                <input
                    type="email"
                    className="form-control my-2 w-56"
                    id="email"
                    placeholder=" example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="message" className="text-2xl font-bold"> Message</label>
                <textarea
                    className="form-control my-2"
                    id="message"
                    placeholder=" Write your message"
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 mt-4 font-bold rounded-md"
                >
                    Send message
                </button>
            </form>
        </div>
    );
};