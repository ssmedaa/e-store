import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignInSignUp.css';

export default function SignInSignUp() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSignUp = async (email, password, firstName, lastName, phoneNumber) => {
        try {
            const response = await fetch('http://localhost:3000/api/customer/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, firstName, lastName, phoneNumber }),
            });

            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Sign up failed');
                return null;
            }
        } catch (err) {
            console.error('Sign up error:', err);
            setError('Sign up error. Please try again.');
            return null;
        }
    };

    const handleLogin = async (email, password) => {
        try {
            const response = await fetch('http://localhost:3000/api/customer/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            console.log(response);

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                navigate('/'); // Redirect to the home page
                return data;
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Login failed');
                return null;
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('Login error. Please try again.');
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email === '' || password === '' || (isSignUp && firstName === '') || (isSignUp && lastName === '') || (isSignUp && phoneNumber === '')) {
            setError('Please fill in all fields.');
            return;
        }

        if (isSignUp) {
            const signUpSuccessful = await handleSignUp(email, password, firstName, lastName, phoneNumber);
            if (!signUpSuccessful) {
                setError('Sign up failed. Try again.');
            } else {
                setError('');
                setIsSignUp(false);
            }
        } else {
            const loginSuccessful = await handleLogin(email, password);
            if (!loginSuccessful) {
                setError('Invalid email or password.');
            } else {
                setError('');
            }
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-header">
                <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
                <p>{isSignUp ? 'Create an account' : 'Enter your email and password to access your account.'}</p>
            </div>
            <form className="auth-form" onSubmit={handleSubmit}>
                {error && <p className="auth-error">{error}</p>}
                <div className="auth-field">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="xyz@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="auth-field">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {isSignUp && (
                    <>
                        <div className="auth-field">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                id="firstName"
                                type="text"
                                placeholder="Enter your first name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="auth-field">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                id="lastName"
                                type="text"
                                placeholder="Enter your last name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="auth-field">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input
                                id="phoneNumber"
                                type="text"
                                placeholder="Enter your phone number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </div>
                    </>
                )}
                <button type="submit" className="auth-button">
                    {isSignUp ? 'Sign Up' : 'Sign In'}
                </button>
            </form>
            <div className="auth-toggle">
                <p>
                    {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                    <button
                        type="button"
                        onClick={() => {
                            setIsSignUp(!isSignUp);
                            setError('');
                        }}
                    >
                        {isSignUp ? 'Sign In' : 'Sign Up'}
                    </button>
                </p>
            </div>
        </div>
    );
}
