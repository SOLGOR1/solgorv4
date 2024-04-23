import React, { useState, useEffect } from 'react';

// Define the type for the token data
interface TokenData {
  name: string;
  symbol: string;
  price: number;
  mc: number;
  trade24h: number;
  buy24h: number;
  sell24h: number;
  v24h: number;
  uniqueWallet24h: number;
  uniqueView24h: number;
  priceChange30mPercent: number;
  priceChange1hPercent: number;
  priceChange4hPercent: number;
  priceChange12hPercent: number;
  priceChange24hPercent: number;
  extensions?: {
    [key: string]: string | null;
  };
}

const TokenOverview = () => {
  const [tokenData, setTokenData] = useState<TokenData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiUrl = 'https://public-api.birdeye.so/defi/token_overview?address=BG745juV1EHRUk2SxsuZ2JmCzDgeBVcUXioLSTDvhSpF ENTFERNEN';
    const apiKey = '878665f493c4480194ee03d6a493d8d8 ENTFERNEN';

    const fetchTokenData = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'x-chain': 'solana',
            'X-API-KEY': apiKey,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setTokenData(data.data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchTokenData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!tokenData) return null;

  return (
    <div className="token-overview">
      <div className="token-info">
        <h2>{tokenData.name} ({tokenData.symbol})</h2>
        <p>Price: {tokenData.price}</p>
        <p>Market Cap: {tokenData.mc}</p>
      </div>
      <div className="token-stats">
        <h3>Trading Statistics</h3>
        <p>Number of Trades (24 Hours): {tokenData.trade24h}</p>
        <p>Number of Buys (24 Hours): {tokenData.buy24h}</p>
        <p>Number of Sells (24 Hours): {tokenData.sell24h}</p>
        <p>Volume (24 Hours): {tokenData.v24h}</p>
        <h3>Unique Users</h3>
        <p>Number of Unique Wallets (24 Hours): {tokenData.uniqueWallet24h}</p>
        <p>Number of Unique Views (24 Hours): {tokenData.uniqueView24h}</p>
        <h3>Price Change</h3>
        <p>Price Change (30 Minutes): {tokenData.priceChange30mPercent}%</p>
        <p>Price Change (1 Hour): {tokenData.priceChange1hPercent}%</p>
        <p>Price Change (4 Hours): {tokenData.priceChange4hPercent}%</p>
        <p>Price Change (12 Hours): {tokenData.priceChange12hPercent}%</p>
        <p>Price Change (24 Hours): {tokenData.priceChange24hPercent}%</p>
      </div>
      <div className="token-links">
        <h3>Extensions</h3>
        {tokenData.extensions && (
          <ul>
            {Object.entries(tokenData.extensions).map(([key, value]) => (
              <li key={key}>
                <a href={value ?? '#'}>{key}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TokenOverview;
