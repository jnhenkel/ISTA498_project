import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='navigation'>
            <nav className='navbar navbar-expand bg-dark'>
                <div className='container-fluid'>
                    <a class="navbar-brand" href="/">The Art Factory</a>
                    <ul id='navBar' className='navbar-nav ml-auto' >
                        <li className='nav-item mx-2'>
                            <NavLink className='nav-link' to='/about'>
                                About
                            </NavLink>
                        </li>
                        <li className='nav-item mx-2'>
                            <NavLink className='nav-link' to='/discover'>
                                Discover
                            </NavLink>
                        </li>
                        <li className='nav-item mx-2'>
                            <NavLink className='nav-link' to='/services'>
                                Services
                            </NavLink>
                        </li>
                        <li className='nav-item mx-2'>
                            <NavLink className='nav-link' to='/signup'>
                                Sign up
                            </NavLink>
                        </li>
                        <li className='nav-item mx-2'>
                            <NavLink className='nav-link' to='/login'>
                                Sign in
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;