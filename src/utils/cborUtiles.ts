import cbor from "cbor";

export const encodeToCbor = (data: any): Buffer => {
    return cbor.encode(data);
};

export const decodeFromCbor = (cborData: Buffer): any => {
    return cbor.decode(cborData);
};
