import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Option from '../Option/Option';
import './Question.css'

const Question = ({ question, idx }) => {
    const { options, correctAnswer } = question;
    const [] = useState([]);

    const notify = () => toast('Correct Answer', correctAnswer);

    const name = question.question;
    const separatedName = name.split('<p>');
    const realName = separatedName.join("");
    const finalSeparateName = realName.split('</p>');
    const finalRealName = finalSeparateName.join("");
    return (
        <div className='question'>
            <h3>Quiz  : {finalRealName}</h3>
            <button onClick={notify}>
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                Toast</button>
            <Toaster />
            {
                options.map((option, idx) => <Option
                    key={idx}
                    option={option}
                    value={idx}
                ></Option>)
            }
        </div>
    );
};

export default Question;