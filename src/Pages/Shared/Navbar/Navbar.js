import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import './Navbar.css'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }


    const menuItems = <React.Fragment>
        <NavLink to='/' className='btn-ghost px-3 py-2 rounded-3xl'>Home</NavLink>
        <NavLink to='/about' className='btn-ghost px-3 py-2 rounded-3xl'>About</NavLink>
        <NavLink to='/appoinment' className='btn-ghost px-3 py-2 rounded-3xl'>Appoinment</NavLink>
        <NavLink to='/contact-us' className='btn-ghost px-3 py-2 rounded-3xl'>Contact Us</NavLink>
        {
            user?.uid ? <>
                <NavLink to='/dashboard' className='btn-ghost px-3 py-2 rounded-3xl'>Dashboard</NavLink>
                <NavLink onClick={handleLogout} to='/' className='btn-ghost px-3 py-2 rounded-3xl'>Signout</NavLink>
            </> :
                <NavLink to='/login' className='btn-ghost px-3 py-2 rounded-3xl'>Login</NavLink>
        }
    </React.Fragment>

    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Doctor's Portal</Link>
            </div>
            <div className="navbar-center hidden gap-5 lg:flex">
                {menuItems}
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

        </div>
    );
};

export default Navbar;