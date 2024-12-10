import { Lucid, Tx } from "lucid-cardano";

export const createSwapTransaction = async (routes: any[], userAddress: string) => {
    const lucid = await Lucid.new();
    const tx = new Tx();

    for (const route of routes) {
        tx.addOutput({
            address: route.dexContractAddress,
            value: { lovelace: route.amount },
        });
    }

    const unsignedTx = await tx.complete();
    const cborTx = unsignedTx.toString("hex"); // Convert to CBOR format.

    return cborTx;
};
