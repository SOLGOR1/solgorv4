import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Raylogo from './Raylogo.png';
import Orcalogo from './Orcalogo.png';

interface PairData {
    baseToken: {
        name: string;
        symbol: string;
    };
    priceNative: string;
    priceUsd: string;
    volume: {
        h24: number;
    };
    priceChange: {
        h24: number;
    };
}

const TokenInfo = () => {
    const [raydiumPairData, setRaydiumPairData] = useState<PairData | null>(null);
    const [orcaPairData, setOrcaPairData] = useState<PairData | null>(null);
    const [loadingRaydium, setLoadingRaydium] = useState(true);
    const [loadingOrca, setLoadingOrca] = useState(true);

    useEffect(() => {
        const fetchPairData = async () => {
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

        fetchPairData();
    }, []);

    const renderPoolInfo = (pairData: PairData | null, logo?: StaticImageData) => {
        const loading = !pairData;

        const priceChangeClass = !loading && pairData!.priceChange.h24 < 0 ? 'text-red-500' : 'text-green-500';

        return (
            <div className="bg-gray-500 p-6 rounded-lg">
                <div className="mb-4">
                    <Image src={logo || ''} alt="Pool Logo" width={80} height={80} />
                </div>
                <div className="text-balance">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <>
                            <p>Price (SOL): {parseFloat(pairData!.priceNative).toFixed(10)}</p>
                            <p>Price (USD): ${parseFloat(pairData!.priceUsd).toFixed(6)}</p>
                            <p>24h Volume: {pairData!.volume.h24.toFixed(2)}</p>
                            <p>
                                Price Change (24h):&nbsp;
                                <span className={priceChangeClass}>
                                    {pairData!.priceChange.h24.toFixed(2)}%
                                </span>
                            </p>
                        </>
                    )}
                </div>
            </div>
        );
    };

    const renderCombinedInfo = () => {
        const loading = !raydiumPairData || !orcaPairData;

        const averagePriceSol = loading
            ? 0
            : (parseFloat(raydiumPairData!.priceNative) + parseFloat(orcaPairData!.priceNative)) / 2;
        const averagePriceUsd = loading
            ? 0
            : (parseFloat(raydiumPairData!.priceUsd) + parseFloat(orcaPairData!.priceUsd)) / 2;
        const combinedVolume24h = loading
            ? 0
            : raydiumPairData!.volume.h24 + orcaPairData!.volume.h24;
        const combinedPriceChange24h = loading
            ? 0
            : (raydiumPairData!.priceChange.h24 + orcaPairData!.priceChange.h24) / 2;

        return (
            <div className="bg-gray-500 p-6 rounded-lg">
                <div className="text-balance">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <>
                            <p><span className="font-bold">Name:</span> Solgor</p>
                            <p><span className="font-bold">Symbol:</span> GOR</p>
                            <p><span className="font-bold">Starting Supply:</span> 10,000,000,000</p>
                            <p><span className="font-bold">Circulating Supply:</span> 9,954,474,773</p>
                            <p><span className="font-bold">Burned:</span> 45,525,227</p>
                            <p><span className="font-bold">Average Price (SOL):</span> {averagePriceSol.toFixed(10)}</p>
                            <p><span className="font-bold">Average Price (USD):</span> ${averagePriceUsd.toFixed(6)}</p>
                            <p><span className="font-bold">Combined 24h Volume:</span> {combinedVolume24h.toFixed(2)}</p>
                            <p><span className="font-bold">Combined Price Change (24h):</span> {combinedPriceChange24h.toFixed(2)}%</p>
                        </>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-2">
                    {renderCombinedInfo()}
                </div>
                <div>
                    {renderPoolInfo(raydiumPairData, Raylogo)}
                </div>
                <div>
                    {renderPoolInfo(orcaPairData, Orcalogo)}
                </div>
            </div>
        </div>
    );
}

export default TokenInfo;
