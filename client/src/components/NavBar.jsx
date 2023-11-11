import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

const NavBar = () => {
    return (
        <div className='navStyle'>
            <Link to = '/'><p>Compass</p></Link>
            <Link to = '/new'><button className = 'addBtn'>+ Add Post</button></Link>
            <Link to = '/newJob'><button className = 'addBtn'>+ Add Job</button></Link>
        </div>
    );
}

export default NavBar;