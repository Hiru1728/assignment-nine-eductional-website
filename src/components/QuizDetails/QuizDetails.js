import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetails = () => {
    const quiz = useLoaderData();
    const { name, questions } = quiz.data;

    return (
        <div>
            <h1>Quiz of {name}</h1>
            {
                questions.map((question, idx) => <Question
                    key={question.id}
                    question={question}
                    num={idx}
                ></Question>)
            }
        </div>
    );
};

export default QuizDetails;