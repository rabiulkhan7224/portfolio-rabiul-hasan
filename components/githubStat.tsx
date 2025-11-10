"use client"
import { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';

const GithubStat = () => {
    const [year, setYear] = useState(new Date().getFullYear());
    // setect year = new Date().getFullYear();
    // 2024- getFullYear()
    const yearget = new Date().getFullYear();
    const years = [yearget, yearget -1, ];

    return (
        <div className="flex justify-center mt-4 bg-gradient-to-b from-white/10 to-white/5 p-4 rounded-lg shadow-lg">
        <GitHubCalendar year={2025}  username="rabiulkhan7224" />
        {/* select year */}
        <div className="">
 <select
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value))}
            
            className="ml-4 p-2 bg-background border border-border rounded"
        >
            {years.map((yr) => (
                <option key={yr} value={yr}>
                    {yr}
                </option>
            ))}
        </select>
        </div>
       
        </div>
    );
};

export default GithubStat;