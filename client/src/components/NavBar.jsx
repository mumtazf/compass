import React from 'react';
import {Link} from 'react-router-dom';

const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '1em',
    backgroundColor: '#f8f8f8',
    borderBottom: '1px solid #ddd'
};

const linkStyle = {
    textDecoration: 'none',
    color: 'black'
};

const NavBar = () => {
    return (
        <nav style={navStyle}>
            <Link to = '/new'><button className = 'addBtn'>+ Add Post</button></Link>
            <Link to = '/newJob'><button className = 'addBtn'>+ Add Job</button></Link>
        </nav>
    );
}

export default NavBar;