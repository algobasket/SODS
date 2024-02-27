import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Keypair, SystemProgram, Transaction } from '@solana/web3.js';

export const PresaleTokenSale = () => {
    const { publicKey, sendTransaction, connection } = useWallet();
    const [purchaseAmount, setPurchaseAmount] = useState(0);

    const handlePurchase = async () => {
        if (!publicKey) {
            alert('Please connect your wallet to purchase tokens.');
            return;
        }

        // Logic to handle the purchase process
        try {
            const sodsAmount = purchaseAmount; // SODS amount entered by the user
            const recipientPublicKey = ''; // Set recipient's public key (where the tokens will be sent)

            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey,
                    toPubkey: recipientPublicKey,
                    lamports: sodsToLamports(sodsAmount), // Convert SODS to lamports
                })
            );

            const { blockhash, lastValidBlockHeight } = await connection.getRecentBlockhash();

            // Send transaction
            const signature = await sendTransaction(transaction, connection);

            // Confirm transaction
            await connection.confirmTransaction(signature, 'processed');
            
            alert('Purchase successful!');
        } catch (error) {
            console.error('Error purchasing tokens:', error);
            alert('An error occurred while purchasing tokens. Please try again later.');
        }
    };

    const sodsToLamports = (sodsAmount) => {
        // Convert SODS to lamports based on the conversion rate
        // 1 SOL = 2 million SODS
        const conversionRate = 2000000;
        return sodsAmount * conversionRate; 
    };
    if(publicKey)
    {
        return (
        <div>
            <input type="text" className="form-control lg-input sodsInputLogo" id="amt_sods" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')} value={purchaseAmount} onChange={(e) => setPurchaseAmount(e.target.value)} readOnly />
            <br />
            <button className="btn btn-primary btn-lg btn-lg btn-block selectWallet" onClick={handlePurchase}>Purchase Tokens</button> 
        </div>
        );
    }else{
        return (
        <div>
            <input type="text" className="form-control lg-input sodsInputLogo" id="amt_sods" onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')} value={purchaseAmount} onChange={(e) => setPurchaseAmount(e.target.value)} readOnly />
            <br />
        </div>
        );
    }
    
};
