import { useState } from 'react'
import './App.css'
import { RequestAirdrop } from './RequestAirdrop';
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { ShowBalance } from './ShowBalance';

import '@solana/wallet-adapter-react-ui/styles.css';
import { SendTokens } from './SendTokens';

function App() {
  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
              <div>
                <div style={{display:'flex',justifyContent:'space-between',width:"100v"}}>
                <WalletMultiButton />
                <WalletDisconnectButton />
                </div>  
                <RequestAirdrop/>
                <ShowBalance/>
                <SendTokens/>
              </div>
            </WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>
);
}

export default App
