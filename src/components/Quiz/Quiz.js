import React from 'react';

const Quiz = ({ quize }) => {
    const { name, total, logo } = quize;
    return (
        <div>
            <img src={logo} alt="" />
            <div>
                <p>{total}</p>
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default Quiz;