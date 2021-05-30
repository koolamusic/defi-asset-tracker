import { MORALIS_APPLICATION_ID, MORALIS_SERVER_URL } from './constants'
import * as Moralis from "moralis";

Moralis.initialize(MORALIS_APPLICATION_ID);
Moralis.serverURL = MORALIS_SERVER_URL;

if (!MORALIS_SERVER_URL) throw new Error('Missing env.NEXT_PUBLIC_MORALIS_SERVER_URL')
if (!MORALIS_APPLICATION_ID) throw new Error('Missing env.NEXT_PUBLIC_MORALIS_APPLICATION_ID')

const web3 = new Moralis.Web3();
(window as any).web3 = web3;

export function formatAddress(address = "") {
  return address.slice(0, 6).concat("...", address.slice(-6));
}

export function formatBalance(balance = "", decimals = 18) {
  return Number(balance) / 10 ** decimals;
}

export function toWei(balance = "", decimals = 18) {
  return `0x${(Number(balance) * 10 ** decimals).toString(16)}`
}

export function zeroAddress() {
  return "0x0000000000000000000000000000000000000000";
}

export function getCurrentAddress() {
  return ((window as any).ethereum?.selectedAddress ?? "").toLowerCase();
}

export async function getCurrentAddressAsync(web3: { eth: { getAccounts: () => any; }; }) {
  const accounts = await web3.eth.getAccounts();
  return (accounts?.[0] ?? '').toLowerCase();
}