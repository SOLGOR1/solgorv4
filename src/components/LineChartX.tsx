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
    supply: 10.000 ,
  },
  {
    name: 'Mar 15',
    supply: 9.997 ,
  },
  {
    name: 'Apr 01',
    supply: 9.991 ,
  },
  {
    name: 'Apr 15',
    supply: 9.988 ,
  },
  {
    name: 'May 01',
    supply: 9.977 ,
  },
  {
    name: 'Jun 01',
    supply: 9.954 ,
  },
  {
    name: 'Jul 01',
    supply: 9.929 ,
  },
  {
    name: 'Aug 01',
    supply: 9.894 ,
  },
  {
    name: 'Sep 01',
    supply: 9.869 ,
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
        <Line type="monotone" dataKey="supply" stroke="#FFA500" />

      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
