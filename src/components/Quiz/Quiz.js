import React from 'react';
import './Quiz.css'

const Quiz = ({ quize }) => {
    const { name, total, logo } = quize;
    return (
        <div className='quize'>
            <img src={logo} alt="" />
            <h1>{name}</h1>
            <p>{total}</p>
            <button>Start Practice</button>
        </div>
    );
};

export default Quiz;