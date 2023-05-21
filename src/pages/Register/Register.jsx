import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("")
    useTitle("Register")


    const handleRegister = event => {
        event.preventDefault();
        setSuccess("");
        setError("");

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        // Password validation
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one uppercase');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add at least two numbers');
            return
        }
        else if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return;
        }

        // Registration form for a new user
        if ((name, email, password)) {
            createUser(email, password)
                .then(result => {
                    const createdUser = result.user;
                    console.log(createdUser)
                    setError('');
                    form.reset()
                    setSuccess('User has been created successfully');
                    profileUpdate(result.user, name, photo);
                })
                .catch(error => {
                    console.log(error.message)
                    setError(error.message);
                })
        }

        // Update name and profile picture
        const profileUpdate = (user, name, photo) => {
            updateProfile(user, {
                displayName: name, photoURL: photo
            })
                .then(() => {
                    setSuccess('User name updated successfully')
                })
                .catch(error => {
                    setError(error.message);
                })
        }
        // const user = { name, email, photo, password }
        // console.log(user);
    }

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:mr-12 lg:w-1/2">
                    <img className='w-full rounded-xl' src="https://i.ibb.co/RjPQzvw/undraw-Social-share-re-qb4v.png" alt="" />
                </div>
                <div className="card w-full max-w-sm shadow-xl bg-gray-400 bg-opacity-50">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold">Register!</h1>
                        <p className="text-red-500">{error}</p>
                        <p className="text-green-700">{success}</p>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="Enter Your Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Enter Your Photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-outline btn-primary" value="Register" />
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <SocialLogin></SocialLogin>
                        <p className='my-4 text-center'>Already Have an Account ? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;