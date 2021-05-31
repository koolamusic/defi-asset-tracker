import {
  uniqueNamesGenerator,
  Config,
  starWars,
  names,
} from 'unique-names-generator'
import Moralis from 'moralis'

const randomNameConfig: Config = {
  dictionaries: [starWars, names],
  separator: ' ',
  length: 2,
}

export const generateRandomName = () => uniqueNamesGenerator(randomNameConfig)
export const stringToHslColor = (str: string, s: number, l: number) => {
  const table = str.slice(0, 12)
  let hash = 0
  for (let i = 0; i < table.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }

  const h = hash % 360
  return 'hsl(' + h + ', ' + s + '%, ' + l + '%)'
}
export const colorGenFactory =
  (genColor: typeof stringToHslColor | Function) => (str: string) =>
    genColor(str, 32, 40)

export const outerColorGen = (payload: string) =>
  stringToHslColor(payload, 50, 40)
export const layerColorGen = (payload: string) =>
  stringToHslColor(payload, 50, 91)

/*---------------------------------------------------------*
 * Crypto Utils for dealing with wallet and digits
 ----------------------------------------------------------*/

const web3 = new Moralis.Web3()

if (typeof window !== `undefined`) {
  ;(window as any).web3 = web3

  console.log(Moralis)
}
export function formatAddress(address = '') {
  return address.slice(0, 6).concat('...', address.slice(-6))
}

export function formatBalance(balance = '', decimals = 18): number {
  return Number(balance) / 10 ** decimals
}

export function toWei(balance = '', decimals = 18) {
  return `0x${(Number(balance) * 10 ** decimals).toString(16)}`
}

export function zeroAddress() {
  return '0x0000000000000000000000000000000000000000'
}

export function getCurrentAddress() {
  return ((window as any).ethereum?.selectedAddress ?? '').toLowerCase()
}

export async function getCurrentAddressAsync(web3: {
  eth: { getAccounts: () => any }
}) {
  const accounts = await web3.eth.getAccounts()
  return (accounts?.[0] ?? '').toLowerCase()
}

export function getAddressTxt(address: string) {
  return `${address.substr(0, 4)}...${address.substr(
    address.length - 4,
    address.length
  )}`
}

export function toGwei(wei: number) {
  return Math.round(wei / 1e9)
}
