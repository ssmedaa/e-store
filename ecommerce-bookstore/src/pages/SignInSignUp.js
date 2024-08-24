import React, { useState } from 'react';
import './SignInSignUp.css';

export default function SignInSignUp({ onLogin, onSignUp }) {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === '' || password === '' || (isSignUp && confirmPassword === '')) {
            setError('Please fill in all fields.');
            return;
        }

        if (isSignUp) {
            if (password !== confirmPassword) {
                setError('Passwords do not match.');
                return;
            }
            const signUpSuccessful = onSignUp(email, password);
            if (!signUpSuccessful) {
                setError('Sign up failed. Try again.');
            } else {
                setError('');
                setIsSignUp(false);
            }
        } else {
            const loginSuccessful = onLogin(email, password);
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
                    <div className="auth-field">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
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