import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(res => res.json())
            .catch(error => {
                console.log(error.message);
            })
    }

    const navItems = <>
        <li><Link to='/' className='font-bold mr-2 btn-outline btn-secondary'>Home</Link></li>
        {
            user?.email ? <>
                <li><Link to="/allToys" className='text-md font-bold mr-2 btn-outline btn-secondary'>All Toys</Link></li>
                <li><Link to="/myToys" className='text-md font-bold mr-2 btn-outline btn-secondary'>My Toys</Link></li>
                <li><Link to="/addToys" className='text-md font-bold mr-2 btn-outline btn-secondary'>Add a Toys</Link></li>
                <li><button onClick={handleLogOut} className='text-white font-bold btn-secondary rounded-3xl'>Log Out</button></li> </> :
                <li><Link to='/login' className='text-white font-bold bg-pink-600 rounded-3xl'>Login</Link></li>
        }
        <li><Link to="/blog" className='text-md font-bold mr-2 btn-outline btn-secondary'>Blog</Link></li>
    </>

    return (
        <div className="navbar bg-black lg:h-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {navItems}
                    </ul>
                </div>
                <div className='flex items-center'>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img className='w-20 rounded-full' src={"https://i.ibb.co/W3S4Ngv/funny-logo.png"} alt="" />
                    </Link>
                    <a className="btn btn-ghost normal-case lg:text-3xl text-pink-600 font-bold"><span className='text-3xl text-white'>111</span>funny</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">

                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className='navbar-end flex-1'>
                {
                    user ?
                        <div className="tooltip tooltip-left w-10" data-tip={user.displayName}>
                            <img className='rounded-full' src={user?.photoURL} />
                        </div> : ""

                }
            </div>
        </div>
    );
};

export default Navbar;