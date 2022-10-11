import React from 'react';
import img from '../../images/Quize.png';
import './Headers.css'

const Headers = () => {
    return (
        <div className='headers'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <p>A programmer can justify your programming knowledge. Here is the different types of Quiz. Such as C++, Java, React, BootStrap etc.</p>
            </div>
        </div>
    );
};

export default Headers;