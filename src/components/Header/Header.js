import React from 'react';
import { Link } from 'react-router-dom';
import Headers from '../Headers/Headers';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div>
                    <h1>Course Quiz</h1>
                </div>
                <div className='link-section'>
                    <Link to='/'>Home</Link>
                    <Link to='/statistics'>Statistics</Link>
                    <Link to='/resources'>Resources</Link>
                </div>
            </div>
            <Headers></Headers>
        </div>
    );
};

export default Header;