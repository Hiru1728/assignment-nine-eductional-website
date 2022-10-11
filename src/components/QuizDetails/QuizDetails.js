import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const quiz = useLoaderData();
    console.log(quiz);
    return (
        <div>
            <h2>Quize Details Section</h2>
        </div>
    );
};

export default QuizDetails;