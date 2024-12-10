import { Minswap } from "@minswap/sdk";

export const fetchLiquidityData = async () => {
    try {
        const minswapPools = await Minswap.getPools();
        const sundaeswapData = []; // Add SundaeSwap API call here.

        return [
            ...minswapPools.map((pool) => ({
                name: "Minswap",
                pair: pool.pair,
                price: pool.price,
                liquidity: pool.liquidity,
            })),
            ...sundaeswapData,
        ];
    } catch (error) {
        console.error("Error fetching liquidity data:", error);
        throw error;
    }
};
