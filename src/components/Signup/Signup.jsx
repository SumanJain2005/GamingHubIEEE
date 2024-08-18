import React from 'react';
import { signInWithGoogle } from 'GamingHub2\GamingHubIEEE\src\firebase.js'; // Correct path to firebase.js
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const navigate = useNavigate(); // Replacing useHistory with useNavigate

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            navigate('/team'); // Redirect to the team page after successful signup
        } catch (error) {
            console.error('Error during sign-in:', error);
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <button onClick={handleGoogleSignIn} className="google-signin-button">
                Sign in with Google
            </button>
        </div>
    );
};

export default Signup;
