import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
  ];
  const COLORS = ["#0088FE", "#FFBB28", "#00C49F", "#FF8042"];

export default function DashChart({chartData}) {
    return (
<div className="ChartContainer">
        <PieChart width={500} height={300}>
          
        <Pie
          data={chartData}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        
        <Legend iconSize={7} width={80} height={140} layout='vertical' verticalAlign='middle' />
      </PieChart>
      </div>
    );

}   