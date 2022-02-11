// Dependencies
import { ethers } from 'ethers';

// Typings
import { ToysLegendWhiteList } from './../typings/ToysLegendWhiteList';

// Provider
import { getProvider } from '../provider';

// Contract
import { abi, address } from '../contracts/ToysLegendWhiteList';

export const toysLegendWhiteList = new ethers.Contract(
  address,
  abi,
  getProvider()
) as ToysLegendWhiteList;
