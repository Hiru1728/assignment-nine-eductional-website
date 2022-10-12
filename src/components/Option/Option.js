import React from 'react';
import toast from 'react-hot-toast';
import './Option.css'

const Option = ({ option, correctAnswer }) => {

    const optionhandler = (name) => {
        let real = name.option;

        if (real === correctAnswer) {
            toast('correct Answer : ' + (real));
        }
        else {
            toast('Wrong Answer : ' + (real));
        }
    }
    return (
        <div className='option'>
            {

                <button onClick={() => optionhandler({ option })}>{option}</button>

            }
        </div>
    );
};

export default Option;