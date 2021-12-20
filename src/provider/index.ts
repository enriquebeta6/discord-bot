// Dependencies
import { ethers } from 'ethers';

export function getProvider() {
  return new ethers.providers.JsonRpcProvider(
    'https://bsc-dataseed.binance.org/'
  );
}
