import React from "react";
import {motion } from "framer-motion";

const Bar = ({ name, ticketCount, color, height }) => {
  return (
    <motion.div
    initial={{ height: 0 }}
    animate={{ height: `${height}%` }}
    transition={{ duration: 1 }}
    onexit={{ height: 0 }}
      className="bar"
      style={{ backgroundColor: `${color}` }}
    >
      <div className="tooltip">{name}-{ticketCount}</div>
    </motion.div>
  );
};

const BarChart = ({ data }) => {
  const maxTicketCount = Math.max(...data.map((dep) => dep.ticketCount));
  return (
    <div className="chart-container">
      <div className="chart">
        {data.map((dep) => {
          return (
            <Bar
              key={dep.id}
              name={dep.name}
              ticketCount={dep.ticketCount}
              color={dep.colour}
              height={(dep.ticketCount / maxTicketCount) * 100}
            />
          );
        })}
      </div>
      <div className="y-axis-label">Number of ticket</div>
      <div className="x-axis-label">Department</div>
    </div>
  );
};

export default BarChart;
