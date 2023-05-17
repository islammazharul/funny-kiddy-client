import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <div className="hero min-h-screen bg-indigo-100">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="lg:mr-12 lg:w-1/2">
                    <img className='rounded-xl' src="https://i.ibb.co/hYJTmVX/undraw-Mobile-login-re-9ntv-1.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login!</h1>
                        <form onSubmit={"handleLogin"}>
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
                        {/* <Divider></Divider> */}
                        <p className='my-4 text-center'>New to Funny Kiddy ? <Link className='text-orange-600 font-bold' to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;