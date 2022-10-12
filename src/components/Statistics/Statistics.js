import React from 'react';
import { useLoaderData } from 'react-router-dom';
import StatisticsChart from '../StatisticsChart/StatisticsChart';

const Statistics = () => {
    const quizeTopicsLoad = useLoaderData();
    const quizeTopics = quizeTopicsLoad.data;
    return (
        <div>
            {
                quizeTopics.map(quize => <StatisticsChart
                    key={quize.id}
                    quize={quize}
                ></StatisticsChart>)
            }
        </div>
    );
};

export default Statistics;