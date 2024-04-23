import React, { useState, useEffect } from 'react';
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

interface ApiResponseData {
  unixTime: number;
  value: number;
}

const LineChartComponent = () => {
  const [data, setData] = useState<ApiResponseData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchHistoricalData = async () => {
      try {
        // Unix timestamp for the beginning of time (adjust this if needed)
        const timeFrom = 0;
        // Unix timestamp for the current time
        const currentTime = Math.floor(Date.now() / 1000); // In seconds

        const options: RequestInit = {
          method: 'GET',
          headers: {
            'x-chain': 'solana',
            'X-API-KEY': '878665f493c4480194ee03d6a493d8d8',
          },
        };

        const response = await fetch(`https://public-api.birdeye.so/defi/history_price?address=BG745juV1EHRUk2SxsuZ2JmCzDgeBVcUXioLSTDvhSpF&address_type=token&type=1D&time_from=${timeFrom}&time_to=${currentTime}`, options);
        const responseData = await response.json();

        if (responseData.data && Array.isArray(responseData.data.items)) {
          const chartData: ApiResponseData[] = responseData.data.items.map((item: ApiResponseData) => ({
            unixTime: item.unixTime,
            value: item.value,
          }));
          setData(chartData);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchHistoricalData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart 
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}>        
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="unixTime"
          scale="time"
          type="number"
          domain={['dataMin', 'dataMax']}
          tickFormatter={(timestamp) => new Date(timestamp * 1000).toLocaleDateString()}
        />
        <YAxis 
        style={{ fontSize: '14px' }}
        />
        <Tooltip labelFormatter={(value) => new Date(value).toLocaleDateString()} />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#FFA500" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
