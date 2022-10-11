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
                questions.map(question => <Question
                    key={question.id}
                    question={question}
                ></Question>)
            }
        </div>
    );
};

export default QuizDetails;