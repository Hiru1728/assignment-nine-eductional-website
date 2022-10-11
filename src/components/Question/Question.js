import React from 'react';
import Option from '../Option/Option';
import './Question.css'

const Question = ({ question }) => {
    const { options } = question;
    console.log(question);
    return (
        <div className='question'>
            <h3>Quiz : {question.question}</h3>
            {
                options.map(option => <Option
                    option={option}
                ></Option>)
            }
        </div>
    );
};

export default Question;