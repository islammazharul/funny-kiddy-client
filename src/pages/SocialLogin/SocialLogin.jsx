import React, { useContext, useRef } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const SocialLogin = () => {
    const { googleSignIn, githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef();
    const from = location.state?.from?.pathname || '/'

    // Sign in for a user by Google
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    // Sign in for a user by Github
    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setSuccess('User login successfully');
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className='flex justify-around'>
            <button onClick={handleGoogleSignIn} className="btn gap-2">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> */}
                <FcGoogle className='h-6 w-6'></FcGoogle>
                Google
            </button>
            <button onClick={handleGithubSignIn} className="btn gap-2">
                <FaGithub className='h-6 w-6'></FaGithub>
                Github
            </button>
        </div>
    );
};

export default SocialLogin;