import React from 'react';
import Option from '../Option/Option';
import './Question.css'

const Question = ({ question, idx }) => {
    const { options } = question;
    const name = question.question;
    const separatedName = name.split('<p>');
    const realName = separatedName.join("");
    const finalSeparateName = realName.split('</p>');
    const finalRealName = finalSeparateName.join("");
    return (
        <div className='question'>
            <h3>Quiz  : {finalRealName}</h3>
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