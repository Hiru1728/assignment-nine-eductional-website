import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizeTopicsLoad = useLoaderData();
    const quizeTopics = quizeTopicsLoad.data;
    console.log(quizeTopics);
    return (
        <div>
            <h2>This is Home Section : {quizeTopics.length}</h2>
            {
                quizeTopics.map(quize => <Quiz
                    key={quize.id}
                    quize={quize}
                ></Quiz>)
            }
        </div>
    );
};

export default Home;