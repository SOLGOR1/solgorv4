import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import Raylogo from './Raylogo.png';
import Orcalogo from './Orcalogo.png';
import Orcaray from './Orcaray.png';

interface PairData {
    baseToken: {
        name: string;
        symbol: string;
    };
    liquidity: {
        usd?: number;
    };
}

const LiquidityInfo = () => {
    const [raydiumPairData, setRaydiumPairData] = useState<PairData | null>(null);
    const [orcaPairData, setOrcaPairData] = useState<PairData | null>(null);
    const [loadingRaydium, setLoadingRaydium] = useState(true);
    const [loadingOrca, setLoadingOrca] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const raydiumResponse = await fetch(
                    'https://api.dexscreener.com/latest/dex/pairs/solana/3HfTsWPbPGYRse7u4cP4LNMTTJvEh3CKUtpRePDjXkKD'
                );
                const raydiumData = await raydiumResponse.json();
                setRaydiumPairData(raydiumData.pair);
            } catch (error) {
                console.error('Error fetching Raydium pair data:', error);
            } finally {
                setLoadingRaydium(false);
            }

            try {
                const orcaResponse = await fetch(
                    'https://api.dexscreener.com/latest/dex/pairs/solana/AzKcHB9wKab29T6ht6jn6F6mGDR828xxqVn68FhA3bFH'
                );
                const orcaData = await orcaResponse.json();
                setOrcaPairData(orcaData.pair);
            } catch (error) {
                console.error('Error fetching Orca pair data:', error);
            } finally {
                setLoadingOrca(false);
            }
        };

        fetchData();
    }, []);

    const totalLiquidity = (raydiumPairData?.liquidity.usd || 0) + (orcaPairData?.liquidity.usd || 0);

    const pieChartData = [
        { name: 'Raydium', value: raydiumPairData?.liquidity.usd || 0 },
        { name: 'Orca', value: orcaPairData?.liquidity.usd || 0 }
    ];

    const COLORS = ['#ADD8E6', '#FFD700'];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-2 p-2 rounded-lg flex flex-col items-center justify-center">
                <div className="mb-4">
                    <Image src={Orcaray} alt="Raydium Orca Logo" width={80} height={80} />
                </div>
                <h2 className="text-xl font-bold mb-1">Total Liquidity</h2>
                <div>
                    <p><span className="font-bold">Combined Liquidity:</span> ${totalLiquidity.toFixed(2)}</p>
                </div>
                <div className="relative" style={{ width: '100%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <ResponsiveContainer width="90%" height="90%">
                        <PieChart>
                            <Pie
                                data={pieChartData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={2}
                                dataKey="value"
                                label={(entry) => `$${entry.value.toFixed(2)}`}
                            >
                                {pieChartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="bg-gray-500 p-6 rounded-lg flex flex-col items-center justify-center">
                <>
                    {loadingRaydium ? (
                        <div className="p-4">Loading Raydium data...</div>
                    ) : (
                        <>
                            <div className="p-4">
                                <Image src={Raylogo} alt="Raydium Logo" width={80} height={80} />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold mb-1">Raydium Pool</h2>
                                <div className="text-balance">
                                    <p><span className="font-bold">Liquidity:</span> ${raydiumPairData?.liquidity.usd?.toFixed(2)}</p>
                                </div>
                            </div>
                        </>
                    )}
                </>
            </div>
            <div className="bg-gray-500 p-6 rounded-lg flex flex-col items-center justify-center">
                <>
                    {loadingOrca ? (
                        <div className="p-4">Loading Orca data...</div>
                    ) : (
                        <>
                            <div className="p-4">
                                <Image src={Orcalogo} alt="Orca Logo" width={80} height={80} />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold mb-1">Orca Pool</h2>
                                <div className="text-balance">
                                    <p><span className="font-bold">Liquidity:</span> ${orcaPairData?.liquidity.usd?.toFixed(2)}</p>
                                </div>
                            </div>
                        </>
                    )}
                </>
            </div>
        </div>
    );
};

export default LiquidityInfo;
