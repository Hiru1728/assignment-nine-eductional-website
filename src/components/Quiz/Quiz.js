import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({ quize }) => {
    const { id, name, total, logo } = quize;
    return (
        <div className='quize'>
            <img src={logo} alt="" />
            <div className='quize-details'>
                <h4>Course: {name}</h4>
                <h4>Total Quiz : {total}</h4>
                <button className='btn-start'><Link to={`/quize/${id}`}>Start Practice
                </Link></button>
            </div>
        </div>
    );
};

export default Quiz;