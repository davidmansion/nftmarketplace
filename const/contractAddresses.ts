/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { BNB Smart Chain } from "@thirdweb-dev/chains";
export const NETWORK = BNB Smart Chain;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0xd3A458396ce2F9850110a2bD9621C2e1195efC36";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS = "0x647F2622ABB57D18E19E717cFD3fc9754B914C82";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://binance.rpc.thirdweb.com";
