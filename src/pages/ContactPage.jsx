import React, { useState } from 'react'
import BackToHome from '../buttons/BackToHome';
import Alert from '@mui/material/Alert';

export default function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [alert, setAlert] = useState(false);
    const [formResult, setFormResult] = useState('');

    //TODO: Check validation of the input field(required) -
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setAlert(true);
            return;
        }

        //TODO: Form submission logic here (e.g., send data to a server) -
        //access key - 5fecc6e9-0eda-423f-ba7a-2ae89e021c61
        setFormResult('Sending...');
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);
        formData.append('access_key', '5fecc6e9-0eda-423f-ba7a-2ae89e021c61');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            if (result.success) {
                setFormResult(
                    <Alert variant="filled" severity="info" className="mt-4">
                        Message sent successfully! Thanks <span className='font-mono font-bold'>{name}</span> for contacting me.
                    </Alert>
                );
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setFormResult(result.message || 'Something went wrong!');
            }
        } catch (error) {
            setFormResult(
                <Alert severity="warning"> An error occurred while sending the message.</Alert>
            );
            console.error(error);
        }

        setTimeout(() => {
            setFormResult('');
        }, 2000);
    }

    return (
        <>
            <BackToHome />

            <h1 className="text-4xl md:text-5xl font-mono text-center py-6 
                        bg-[#101923] text-white animate-gradient-x">
                Contact Me
            </h1>

            <div className="min-h-screen w-full bg-[#0f0f0f] flex items-center justify-center px-4 py-10">
                <div className="max-w-md w-full bg-gray-100 rounded-lg shadow-lg px-8 py-6">
                    <h2 className="text-2xl font-semibold text-blue-800 mb-4 text-center underline">Contact Form</h2>

                    {alert && (
                        <Alert severity="warning" onClose={() => { setAlert(false) }}>
                            Please fill in all fields.
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-800 mb-1 font-semibold" htmlFor="name">
                                Your Name
                            </label>
                            <input
                                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                                placeholder="Enter your name"
                                type="text"
                                id='name'
                                name='name'
                                autoComplete='username'
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-800 mb-1 font-semibold" htmlFor="email">
                                Your Email
                            </label>
                            <input
                                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                                placeholder="Enter your email"
                                name="email"
                                id="email"
                                type="email"
                                autoComplete='email'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-800 mb-1 font-semibold" htmlFor="message">
                                Your Message
                            </label>
                            <textarea
                                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                                rows={4}
                                placeholder="Enter your message"
                                name="message"
                                id="message"
                                autoComplete='usermessage'
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                            />
                        </div>

                        <button
                            className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300 font-semibold"
                            type="submit"
                        >
                            Send Message
                        </button>

                        {formResult}

                    </form>
                </div>
            </div>
        </>
    );
}