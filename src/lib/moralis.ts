import { MORALIS_APPLICATION_ID, MORALIS_SERVER_URL } from './constants'

/* Moralis with ES imports */
// import Moralis from "moralis";
// Moralis.initialize(MORALIS_APPLICATION_ID);
// Moralis.serverURL = MORALIS_SERVER_URL;

export function useMoralis() {

  /* Variables must be initialized */
  if (!MORALIS_SERVER_URL) throw new Error('Missing env.NEXT_PUBLIC_MORALIS_SERVER_URL')
  if (!MORALIS_APPLICATION_ID) throw new Error('Missing env.NEXT_PUBLIC_MORALIS_APPLICATION_ID')


  // Moralis Initialization
  let Moralis;
  if (typeof window !== `undefined`) {
    Moralis = require("moralis");
    Moralis.initialize(MORALIS_APPLICATION_ID);
    Moralis.serverURL = MORALIS_SERVER_URL;

    /* Use custom message when Authenticating */
    Moralis.Web3.getSigningData = () => 'Give DeFi Asset tracker permissions to read and report ROI on your tokens and NFTs'
  }
  return { Moralis };
}