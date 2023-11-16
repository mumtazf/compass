import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

const NavBar = () => {
    return (
        <div className='navStyle'>
            <div className='navStyle-title'>
                <Link to = '/'>Compass</Link>
            </div>

            <div>
                <Link to = '/new'><button className = 'navStyle-button'>+ Add Post</button></Link>
                <Link to = '/newJob'><button className = 'addBtn'>+ Add Job</button></Link>
            </div>

        </div>
    );
}

export default NavBar;