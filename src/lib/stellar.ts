"use client";

import freighter from "@stellar/freighter-api";

export interface WalletState {
  connected: boolean;
  publicKey: string | null;
}

export async function checkConnection(): Promise<WalletState> {
  try {
    const { isConnected } = await freighter.isConnected();
    if (!isConnected) return { connected: false, publicKey: null };
    const { address } = await freighter.requestAccess();
    return { connected: true, publicKey: address };
  } catch {
    return { connected: false, publicKey: null };
  }
}

export async function connectWallet(): Promise<WalletState> {
  try {
    const { address } = await freighter.requestAccess();
    return { connected: true, publicKey: address };
  } catch {
    return { connected: false, publicKey: null };
  }
}

export async function signTx(
  xdr: string,
  network: "TESTNET" | "PUBLIC" = "TESTNET"
): Promise<string> {
  const { signedTxXdr } = await freighter.signTransaction(xdr, {
    networkPassphrase: network === "PUBLIC"
      ? "Public Global Stellar Network ; September 2015"
      : "Test SDF Network ; September 2015",
  });
  return signedTxXdr;
}

export function truncateKey(key: string): string {
  return `${key.slice(0, 4)}...${key.slice(-4)}`;
}
