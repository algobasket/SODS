import React, { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, clusterApiUrl } from '@solana/web3.js';

const TokenContractAddress = 'YOUR_TOKEN_CONTRACT_ADDRESS';

const HoldingStats = () => {
    const { publicKey } = useWallet();
    const [holdings, setHoldings] = useState(0);
    const [fundRaised, setFundRaised] = useState(0);

    useEffect(() => {
        if (!publicKey) return;

        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
        
        // Retrieve user's holdings
        connection.getTokenAccountBalance(publicKey)
            .then(balance => {
                setHoldings(balance);
            })
            .catch(error => {
                console.error('Error fetching holdings:', error);
            });

        // Fetch total fund raised from your smart contract
        // This depends on how you're managing the token sale
        // You might need to call a specific method on your presale smart contract
        // and calculate the total amount of SODS tokens sold.
        const totalFundRaised = 0; // Fetch this from your smart contract
        setFundRaised(totalFundRaised);
    }, [publicKey]);

    return (
        <div>
            <h2 style={{ fontFamily: 'Silkscreen', fontSize: '40px' }}>YOUR HOLDINGS: {holdings} $SODS</h2>
            <h2 style={{ fontFamily: 'Silkscreen', fontSize: '40px' }}>FUND RAISED:{fundRaised} SOL</h2>
        </div>
    );
};

export default HoldingStats; 
