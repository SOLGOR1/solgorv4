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
    MarketCap: 0.00 ,
  },
  {
    name: 'Mar 15',
    MarketCap: 25.35 ,
  },
  {
    name: 'Apr 01',
    MarketCap: 38.69 ,
  },
  {
    name: 'Apr 15',
    MarketCap: 14.95 ,
  },
  {
    name: 'May 01',
    MarketCap: 15.34 ,
  },
  {
    name: 'Jun 01',
    MarketCap: 16.27 ,
  },
  {
    name: 'Jul 01',
    MarketCap: 9.62 ,
  },
  {
    name: 'Aug 01',
    MarketCap: 21.24 ,
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
        <Line type="monotone" dataKey="MarketCap" stroke="#FFA500" />

      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;