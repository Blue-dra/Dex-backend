export const calculateOptimalRoute = (
    amount: number,
    dexData: any[],
    fromToken: string,
    toToken: string
) => {
    dexData = dexData.filter(
        (dex) => dex.pair.includes(fromToken) && dex.pair.includes(toToken)
    );
    dexData.sort((a, b) => a.price - b.price);

    const routes = [];
    for (const dex of dexData) {
        if (amount <= 0) break;

        const tradeAmount = Math.min(amount, dex.liquidity);
        routes.push({ dex: dex.name, amount: tradeAmount });
        amount -= tradeAmount;
    }

    return routes;
};
