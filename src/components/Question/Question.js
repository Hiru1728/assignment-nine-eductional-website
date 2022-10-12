import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Option from '../Option/Option';
import './Question.css'

const Question = ({ question }) => {
    const { id, options, correctAnswer } = question;


    const notify = () => toast('Correct Answer : ' + correctAnswer);

    const name = question.question;
    const separatedName = name.split('<p>');
    const realName = separatedName.join("");
    const finalSeparateName = realName.split('</p>');
    const finalRealName = finalSeparateName.join("");


    return (
        <div className='question'>
            <h3>Quiz : {finalRealName}</h3>

            <button onClick={notify}>
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </button>
            <Toaster />
            <div className='option-section'>

                {
                    options.map((option, idx) => <Option
                        option={option}
                        correctAnswer={correctAnswer}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default Question;