import React, { useMemo } from 'react';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    GlowWalletAdapter,
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    SolletExtensionWalletAdapter,
    SolletWalletAdapter,
    TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton, setVisible } from '@solana/wallet-adapter-react-ui';

import './App.css';

//import MyComponent from './MyComponent';
import { PresaleTokenSale } from './PresaleTokenSale';

// import the styles
require('@solana/wallet-adapter-react-ui/styles.css'); 

function Wallet() {
    // you can use Mainnet, Devnet or Testnet here
    const solNetwork = WalletAdapterNetwork.Testnet;
    const endpoint = useMemo(() => clusterApiUrl(solNetwork), [solNetwork]);
    // initialise all the wallets you want to use
    const wallets = useMemo(
        () => [
          new PhantomWalletAdapter(),
          new SolflareWalletAdapter({ solNetwork }),
          new TorusWalletAdapter(),
          new LedgerWalletAdapter(),
        ],
        [solNetwork]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect={true}>
                <WalletModalProvider>
                    <div className="App">
                        <PresaleTokenSale />
                        <br />
                        <WalletMultiButton />
                    </div>
                </WalletModalProvider> 
            </WalletProvider>
        </ConnectionProvider> 
    );
}

export default Wallet;