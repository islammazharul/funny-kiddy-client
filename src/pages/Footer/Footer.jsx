import React from 'react';
import { FaLinkedin, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-black text-white">
                <div className='text-slate-300 space-y-4 p-4'>
                    <img className='w-20 rounded-full' src="https://i.ibb.co/W3S4Ngv/funny-logo.png" alt="" />
                    <h1 className='ml-2 text-2xl font-bold tracking-wide text-slate-300'>
                        111<span className='text-pink-600'>funny</span>
                    </h1>
                    <p>There are many variations of trendy Jobs, but the majority have suffered alteration in some form.</p>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    {/* <h5>Follow Us</h5> */}
                    <span className="footer-title">Follow Us</span>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/" className='flex items-center'>
                            <FaLinkedin className="mr-2" />
                            Linkedin
                        </a>
                        <a href="https://twitter.com/" className='flex items-center'>
                            <FaTwitterSquare className="mr-2" />
                            Twitter
                        </a>
                        <a href="https://www.instagram.com/" className='flex items-center'>
                            <FaInstagramSquare className="mr-2" />
                            Instagram
                        </a>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn bg-pink-600 absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>

            </footer>
            <div className='py-6 text-sm text-center text-gray-400 bg-black'>
                © 2023 111 funny Inc. All rights reserved.
            </div>
        </>
    );
};

export default Footer;