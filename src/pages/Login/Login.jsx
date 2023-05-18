import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const emailRef = useRef();

    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // Sign In for a user by email and password
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setSuccess('User login successfully');
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error.message);
                setError('Wrong password')
            })
    }



    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="lg:mr-12 lg:w-1/2">
                    <img className='rounded-xl' src="https://i.ibb.co/dfBj2x8/undraw-Swipe-profiles-re-tvqm.png" alt="" />
                </div>
                <div className="card w-full max-w-sm shadow-xl bg-gray-400 bg-opacity-50">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold">Login!</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-outline btn-primary" value="Login" />
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <SocialLogin></SocialLogin>
                        <p className='my-4 text-center'>New to Funny Kiddy ? <Link className='text-orange-600 font-bold' to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;