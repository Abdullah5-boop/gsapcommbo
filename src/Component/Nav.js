import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link to='/'>Page 1</Link>
            <Link to='/page2'>Page 2</Link>
            <Link to='/page3'>Page 3</Link>
            <Link to='/page4'>Page 4</Link>
            <Link to='/page5'>Page 5</Link>
        </div>
    );
};

export default Nav;