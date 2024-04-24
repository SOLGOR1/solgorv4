'use client';

import React from "react";
import Bounded from "@/components/Bounded";
import LineChartX from "@/components/LineChartX";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import LineChartBurn from "@/components/LineChartBurn";
import LineChartTVL from "@/components/LineChartTVL";
import LineChartM from "@/components/LineChartM";
import LineChartPrice from "@/components/LineChartPrice";
import LineChartPriceA from "@/components/LineChartPriceA";
import DEXData from "@/components/DEXData";
import Liquidity from "@/components/Liquidity";

/**
 * Props for `LineChart`.
 */
export type LineChartProps = SliceComponentProps<Content.LineChartSlice>;

/**
 * Component for "LineChart" Slices.
 */
const LineChart = ({ slice }: LineChartProps): JSX.Element => {
  return (    
  <Bounded
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
  >
    <div className="glass-container mx-auto">
    <h1 className=" text-balance flex-auto text-center text-4xl">Stats</h1>
    <div className="flex flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-20">
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 w-full gap-20 mx-auto">
        <div className="glass-container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Token Info</h2>
        <DEXData />
        </div>
        <div className="glass-container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Liquidity (in USD)</h2>
        <Liquidity />
        </div>
  
        <div className="glass-container mx-auto w-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Price in USD (30 D)</h2>
        <LineChartPrice />
        </div>
        <div className="glass-container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Price in USD (All Time)</h2>
        <LineChartPriceA />
        </div>

        <div className="glass-container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Total Supply in B</h2>
          <LineChartX />
        </div>
        <div className="glass-container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Burned Supply in M</h2>
        <LineChartBurn />
        </div>
        
        <div className="glass-container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">TVL in K</h2>
        <LineChartTVL />
        </div>
        <div className="glass-container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">MarketCap in K</h2>
        <LineChartM/>
        </div>
    </div>
  </div>
  </div>
  </Bounded>
    
  );
};



export default LineChart;
