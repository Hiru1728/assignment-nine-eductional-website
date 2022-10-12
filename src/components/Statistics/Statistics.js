import React from 'react';
import { useLoaderData } from 'react-router-dom';
import StatisticsChart from '../StatisticsChart/StatisticsChart';

const Statistics = () => {
    const quizeTopicsLoad = useLoaderData();
    return (
        <div>
            <StatisticsChart></StatisticsChart>
        </div>
    );
};

export default Statistics;