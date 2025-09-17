import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CustomTooltip from './CustomTooltip';
import CustomLegend from './CustomLegend';

const CustomPieChart = ({ data = [], colors = [] }) => {
  const hasData = Array.isArray(data) && data.some((item) => item.count > 0);


  const chartData = hasData
    ? data
    : [{ status: "No Data", count: 1 }];


  const chartColors = hasData
    ? colors
    : ["#f3f4f6"]; 

  const getLabelColor = (status) => {
    if (status === "No Data") return "#6b7280";
    return "#000";  
  };

  return (
    <ResponsiveContainer width="100%" height={325}>
      <PieChart>
        <Pie
          data={chartData}
          dataKey="count"
          nameKey="status"
          cx="50%"
          cy="50%"
          outerRadius={130}
          innerRadius={100}
          labelLine={false}
        >
          {chartData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={chartColors[index % chartColors.length]}
            />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />}
        />
        <Legend content={<CustomLegend />}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
