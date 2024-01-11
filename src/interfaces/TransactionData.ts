export interface TransactionData {
  data: {
    block: number;
    hash: string;
    timestamp: number;
    ownerAddress: string;
    toAddress: string;
  }[];
}
