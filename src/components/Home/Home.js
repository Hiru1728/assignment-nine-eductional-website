import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Headers from '../Headers/Headers';
import Quiz from '../Quiz/Quiz';
import "./Home.css"

const Home = () => {
    const quizeTopicsLoad = useLoaderData();
    const quizeTopics = quizeTopicsLoad.data;
    return (
        <div className='quiz-topic-section'>
            <Headers></Headers>
            <h2>This is Home Section : {quizeTopics.length}</h2>
            <div className='quize-section'>
                {
                    quizeTopics.map(quize => <Quiz
                        key={quize.id}
                        quize={quize}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;