'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const salesData = [
  {
    name: 'Mar 01',
    burn: 0 ,
  },
  {
    name: 'Mar 15',
    burn: 3 ,
  },
  {
    name: 'Apr 01',
    burn: 9 ,
  },
  {
    name: 'Apr 15',
    burn: 11 ,
  },
  {
    name: 'May 01',
    burn: 23 ,
  },
  {
    name: 'Jun 01',
    burn: 45 ,
  },
  {
    name: 'Jul 01',
    burn: 69 ,
  },
  {
    name: 'Aug 01',
    burn: 105 ,
  },
  {
    name: 'Sep 01',
    burn: 130 ,
  },
];

const LineChartComponent = () => {
  return (
    <ResponsiveContainer className="flex items-center text-center" width={500} height={300}>
      <LineChart
        width={500}
        height={300}
        data={salesData}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="burn" stroke="#FFA500" />

      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;