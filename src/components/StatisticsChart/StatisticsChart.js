import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StatisticsChart = ({ quize }) => {
    const { total, name } = quize;
    return (
        <div>
            <LineChart width={500} height={400} data={quize}>
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />

            </LineChart>
        </div>
    );
};

export default StatisticsChart;