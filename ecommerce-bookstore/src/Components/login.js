import React, { useState } from 'react';

export default function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            setError('Please fill in all fields.');
            return;
        }

        const loginSuccessful = onLogin(email, password);

        if (!loginSuccessful) {
            setError('Invalid email or password.');
        } else {
            setError(''); // Clear error on successful login
        }
    };

    return (
        <div className="mx-auto max-w-sm border border-gray-300 rounded-lg p-6 shadow-md">
            <div className="text-center space-y-1 mb-6">
                <h2 className="text-3xl font-bold">Sign In</h2>
                <p className="text-gray-600">Enter your email and password to access your account.</p>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
                {error && <p className="text-red-600 text-sm">{error}</p>}
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="xyz@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
                            Forgot password?
                        </a>
                    </div>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
}
