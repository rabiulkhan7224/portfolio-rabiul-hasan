"use client";

import { useState } from "react";
import GitHubCalendar from "react-github-calendar";

const GithubStat = () => {
  const currentYear = new Date().getFullYear(); // 2025
  const [selectedYear, setSelectedYear] = useState(currentYear);

  // Generate last 5 years (2025, 2024, 2023, 2022, 2021)
  const years = Array.from({ length: 2 }, (_, i) => currentYear - i);

  return (
    <div className="m-4 bg-gradient-to-b from-white/10 to-white/5 p-2 rounded-xl shadow-lg backdrop-blur-sm border border-white/20">
      {/* GitHub Calendar */}
      <div className="overflow-x-auto">
        <GitHubCalendar
          username="rabiulkhan7224"
          year={selectedYear}
          blockSize={14}
          blockMargin={5}
          fontSize={14}
          //   theme={{
          //     level0: "#ebedf0",
          //     level1: "#9be9a8",
          //     level2: "#40c463",
          //     level3: "#30a14e",
          //     level4: "#216e39",
          //   }}
          style={{
            margin: "0 auto",
            maxWidth: "100%",
          }}
        />
      </div>

      {/* Year Selector */}
      <div className="flex justify-center mt-6">
        <div className="inline-flex items-center gap-3">
          <label
            htmlFor="year-select"
            className="text-sm font-medium text-gray-700"
          >
            Year:
          </label>
          <select
            id="year-select"
            value={selectedYear}
            onChange={(e) => setSelectedYear(parseInt(e.target.value))}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            {years.map((yr) => (
              <option key={yr} value={yr}>
                {yr}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default GithubStat;
