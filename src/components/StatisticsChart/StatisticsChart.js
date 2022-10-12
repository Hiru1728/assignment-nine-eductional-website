import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './StatisticsChart.css'

const StatisticsChart = () => {

    const data = [
        {
            "name": "React",
            "total": 8,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "JavaScript",
            "total": 9,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "CSS",
            "total": 8,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "git",
            "total": 11,
            "pv": 3908,
            "amt": 2000
        }
    ]

    return (
        <div className='chart'>
            <LineChart width={500} height={400} data={data}>
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
            </LineChart>
        </div>
    );
};

export default StatisticsChart;