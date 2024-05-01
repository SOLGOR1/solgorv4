"use client";
import Bounded from "@/components/Bounded";
import { Content, asText } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

 
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/3dcard";

/**
 * Props for `Bento`.
 */
export type BentoProps = SliceComponentProps<Content.BentoSlice>;

/**
 * Component for "Bento" Slices.
 */
const Bento = ({ slice }: BentoProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} 
      components={{
        heading2: ({ children }) =>(
          <h2 className="text-balance text-center font-medium text-5xl md:text-7xl">
          {children}
          </h2>
        ),
        em: ({ children }) =>(
          <em className="bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
          {children}
          </em>
        ),
      }}
      />
      <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
      <PrismicRichText field={slice.primary.body} />
      </div>

      <div className="">

      <div className="flex justify-center gap-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-0 gap-x-24">
  <CardContainer className="glass-container row-span-3 flex grid-rows-subgrid gap-2 rounded-lg p-4 w-full sm:w-96">
      <CardBody className="bg-gray-600 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-100 dark:text-white text-balance"
        >
          Fair Launch:
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-200 text-base max-w-sm mt-2 dark:text-neutral-300 text-balance leading-normal"
        >
          <p>Welcome to Solgor GOR, where fairness is the name of the game.</p>
          <p></p>
          <p>All tokens were evenly distributed right from the start,
          launching with a humble $100 market cap on Raydium.</p>
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <a  href="https://solscan.io/account/HtHgngcma1oYDiiBo7w7LswpcTSUDrgw7QvMsEhFnw9b?page=10#splTransfers">
          <Image
              src="https://images.prismic.io/solgorv4/ZiUc8PPdc1huKqMr_GOR_CREATE.png"
              width={16}
              height={9}
              layout="responsive"
              className="rounded-xl h-60 w-full object-cover group-hover/card:shadow-xl"
              alt="Fair Launch"
            />
          </a>
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <a  href="https://solscan.io/account/HtHgngcma1oYDiiBo7w7LswpcTSUDrgw7QvMsEhFnw9b?page=10#splTransfers">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-lg font-normal dark:text-white  hover:text-yellow-500"
          >
            Check it →
          </CardItem>
          </a>
          <a  href="https://solscan.io/account/HtHgngcma1oYDiiBo7w7LswpcTSUDrgw7QvMsEhFnw9b?page=10#splTransfers">
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
           
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-lg font-bold hover:bg-yellow-500 hover:text-black"
          >
            Here
          </CardItem>
          </a>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer className="glass-container row-span-3 flex grid-rows-subgrid gap-2 rounded-lg p-4 w-full sm:w-96">
      <CardBody className="bg-gray-600 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-100 dark:text-white text-balance"
        >
          100% LP Burned:
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-200 text-base max-w-sm mt-2 dark:text-neutral-300 text-balance leading-normal"
        >
          <p>Say goodbye to worries of rug pulls!</p>
          <p></p>
          <p>Solgor&apos;s commitment to transparency means that every Liquidity Pool token,
              has been consigned to the flames,
              ensuring a rock-solid foundation.</p>
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <a  href="https://solscan.io/tx/5QKPvxPmsSVN9mjxtMv5mgpSFWwsEp92Yjk2urE3zhdMhryud183iYTXtR38JwSy6Tgu7msj3DmAjheTu4LvwbgB">
          <Image
              src="https://images.prismic.io/solgorv4/ZiUdBPPdc1huKqMt_GOR_BURN.png"
              width={16}
              height={9}
              layout="responsive"
              className="rounded-xl h-60 w-full object-cover group-hover/card:shadow-xl"
              alt="Fair Launch"
            />
          </a>
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <a  href="https://solscan.io/tx/5QKPvxPmsSVN9mjxtMv5mgpSFWwsEp92Yjk2urE3zhdMhryud183iYTXtR38JwSy6Tgu7msj3DmAjheTu4LvwbgB">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-lg font-normal dark:text-white  hover:text-yellow-500"
          >
            Check it →
          </CardItem>
          </a>
          <a  href="https://solscan.io/tx/5QKPvxPmsSVN9mjxtMv5mgpSFWwsEp92Yjk2urE3zhdMhryud183iYTXtR38JwSy6Tgu7msj3DmAjheTu4LvwbgB">
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
           
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-lg font-bold hover:bg-yellow-500 hover:text-black"
          >
            Here
          </CardItem>
          </a>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer className="glass-container row-span-3 flex grid-rows-subgrid gap-2 rounded-lg p-4 w-full sm:w-96">
      <CardBody className="bg-gray-600 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-100 dark:text-white text-balance"
        >
          Burn Mechanism:
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-200 text-base max-w-sm mt-2 dark:text-neutral-300 text-balance leading-normal"
        >
          <p>Watch as Solgor implements its burn mechanism,
          steadily reducing GOR tokens over time to increase their rarity and value.</p>
          <p></p>
          <p>With each burn, the fire of Solgor&apos;s potential burns brighter.</p>
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <a  href="https://solgor.vercel.app/stats">
          <Image
              src="https://images.prismic.io/solgorv4/ZiUdI_Pdc1huKqMu_GOR_BURN_MECHANISM.png"
              width={16}
              height={9}
              layout="responsive"
              className="rounded-xl h-60 w-full object-cover group-hover/card:shadow-xl"
              alt="Fair Launch"
            />
          </a>
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <a  href="https://solgor.vercel.app/blog/news1">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-lg font-normal dark:text-white  hover:text-yellow-500"
          >
            Read More →
          </CardItem>
          </a>
          <a  href="https://solgor.vercel.app/stats">
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
           
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-lg font-bold hover:bg-yellow-500 hover:text-black"
          >
            Burn Stats
          </CardItem>
          </a>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer className="glass-container row-span-3 flex grid-rows-subgrid gap-2 rounded-lg p-4 w-full sm:w-96">
      <CardBody className="bg-gray-600 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-100 dark:text-white text-balance"
        >
          NFT Collection:
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-200 text-base max-w-sm mt-2 dark:text-neutral-300 text-balance leading-normal"
        >
          <p>Mint Now!</p>
          <p>Discover Solgor&apos;s unique NFT collection, where creativity reigns supreme.</p>
          <p>Mint your own treasures, unlock VIP Discord access, and dive into a sea of giveaways and lotteries!</p>
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <a  href="https://launchmynft.io/sol/3015">
          <Image
              src="https://images.prismic.io/solgorv4/ZiUkevPdc1huKqM-_GOR_NFTS.png"
              width={16}
              height={9}
              layout="responsive"
              className="rounded-xl h-60 w-full object-cover group-hover/card:shadow-xl"
              alt="Fair Launch"
            />
          </a>
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <a  href="https://launchmynft.io/sol/3015">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-lg font-normal dark:text-white  hover:text-yellow-500"
          >
            Mint →
          </CardItem>
          </a>
          <a  href="https://launchmynft.io/sol/3015">
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
           
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-lg font-bold hover:bg-yellow-500 hover:text-black"
          >
            Here
          </CardItem>
          </a>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer className="glass-container row-span-3 flex grid-rows-subgrid gap-2 rounded-lg p-4 w-full sm:w-96">
      <CardBody className="bg-gray-600 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-100 dark:text-white text-balance"
        >
          Community Driven:
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-200 text-base max-w-sm mt-2 dark:text-neutral-300 text-balance leading-normal"
        >
          <p>Get involved!</p>
          <p>Join our vibrant community at Solgor GOR to have your say! </p>
          <p>Participate in polls, discussions, and community events to help shape the future of Solgor.</p>
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <a  href="https://twitter.com/solgor_official">
          <Image
              src="https://images.prismic.io/solgorv4/ZiWJTfPdc1huKqUn_GOR_COMMUNITY.png"
              width={16}
              height={9}
              layout="responsive"
              className="rounded-xl h-60 w-full object-cover group-hover/card:shadow-xl"
              alt="Fair Launch"
            />
          </a>
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <a  href="https://discord.gg/CJjnDahRXK">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-lg font-normal dark:text-white  hover:text-yellow-500"
          >
            Discord →
          </CardItem>
          </a>
          <a  href="https://t.me/+AUYRKvHXSCEwNjdi">
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
           
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-lg font-bold hover:bg-yellow-500 hover:text-black"
          >
            Telegram
          </CardItem>
          </a>
        </div>
      </CardBody>
    </CardContainer>

    <CardContainer className="glass-container row-span-3 flex grid-rows-subgrid gap-2 rounded-lg p-4 w-full sm:w-96">
      <CardBody className="bg-gray-600 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-100 dark:text-white text-balance"
        >
          Ape in for the Apes!
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-200 text-base max-w-sm mt-2 dark:text-neutral-300 text-balance leading-normal"
        >
          <p>Get ready to make a difference with Solgor!</p>
          <p>As our market cap climbs, so does our ability to support our gorilla brethren.</p>
          <p>Join us in our mission and let&apos;s swing to new heights together.</p>
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <a  href="https://solgor.vercel.app/blog/news2">
          <Image
              src="https://images.prismic.io/solgorv4/ZiUh2fPdc1huKqM6_GOR_PARTNERSHIPS.gif"
              width={16}
              height={9}
              layout="responsive"
              className="rounded-xl h-60 w-full object-cover group-hover/card:shadow-xl"
              alt="Fair Launch"
            />
          </a>
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <a  href="https://solgor.vercel.app/blog/news2">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-lg font-normal dark:text-white  hover:text-yellow-500"
          >
            Read More →
          </CardItem>
          </a>
          <a  href="https://solgor.vercel.app/blog/news2">
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
           
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-lg font-bold hover:bg-yellow-500 hover:text-black"
          >
            Here
          </CardItem>
          </a>
        </div>
      </CardBody>
    </CardContainer>

  </div>
  </div>

      {slice.items.map((item)=>(
        <div className={clsx("glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-gray-600 to-gray-700 p-4 ", item.wide ? "md:col-span-2" : "md:col-span-1")} key={asText(item.titel)}>
          <h3 className="text-2xl">
          <PrismicRichText field={item.titel} />
          </h3>
          <div className="max-w-md text-balance text-slate-300 text-base leading-normal">
          <PrismicRichText field={item.body} />
          </div>  
          <PrismicNextImage field={item.image} 
          className="max-h-36 w-auto"/>
        </div>
        ))}
      </div>
    
    </Bounded>
  );
};

export default Bento;
