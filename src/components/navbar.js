import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const Navigation = (props) => {
    return (
        <div className='navigation'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <div className='container-fluid'>
                    <a class="navbar-brand" href="/art-factory">The Art Factory</a>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
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
                                <NavLink className='nav-link' to='/quiz'>
                                    Quiz
                                </NavLink>
                            </li>
                            {
                                props.user ?
                                    <></>
                                    :
                                    <>
                                        <li className='nav-item mx-2'>
                                            <NavLink className='nav-link' to='/register'>
                                                Sign up
                                            </NavLink>
                                        </li>
                                        <li className='nav-item mx-2'>
                                            <NavLink className='nav-link' to='/login'>
                                                Sign in
                                            </NavLink>
                                        </li>
                                    </>
                            }
                        </ul>
                    </Navbar.Collapse>
                </div>
            </Navbar>

        </div>
    )
}

export default Navigation;