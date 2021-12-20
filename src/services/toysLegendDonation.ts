// Dependencies
import { ethers } from 'ethers';

// Typings
import { ToysLegendDonation } from './../typings/ToysLegendDonation.d';

// Provider
import { getProvider } from '../provider';

// Contract
import { abi, address } from '../contracts/toysLegendDonation';

export const toysLegendDonation = new ethers.Contract(
  address,
  abi,
  getProvider()
) as ToysLegendDonation;
