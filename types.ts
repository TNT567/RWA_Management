
export enum View {
  DASHBOARD = 'DASHBOARD',
  NAV_UPDATE = 'NAV_UPDATE',
  MINTING = 'MINTING',
  BURNING = 'BURNING',
  COMPLIANCE = 'COMPLIANCE',
  HISTORY = 'HISTORY',
  SETTINGS = 'SETTINGS'
}

export interface Transaction {
  id: string;
  block: string;
  hash: string;
  type: 'MINT' | 'BURN' | 'NAV_UPDATE' | 'WHITELIST_ADD';
  amount: string;
  receiver?: string;
  timestamp: string;
  status: 'SUCCESS' | 'PENDING' | 'REJECTED';
}

export interface NavHistoryPoint {
  date: string;
  nav: number;
  benchmark: number;
}
