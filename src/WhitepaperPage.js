import React from 'react';


import './App.css';  
import Header from './Header'; 
import MainContent from './MainContent'; 
import Footer from './Footer'; 

function WhitepaperPage() {
  return (
    <div className="App">
      <Header /> 
      <div className="testimonial">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="border_testi">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="titlepage">
                                        <h2 style={{ fontFamily: 'Silkscreen', fontSize: '70px' }} className="text_align_center">White Paper</h2>
                                        <br />
                                        <h3 style={{ fontFamily: 'Silkscreen' }} className="text_align_center">Discover the SODS Ecosystem</h3>
                                        <br />

                                        <center>
                                            <p>$SODS is not just a token; it's a meticulously designed digital currency with a transparent and robust tokenomics
                                                <br />structure. Here's a breakdown of the SODS token distribution to give you a comprehensive understanding of our ecosystem:</p>
                                        </center>

                                        <br /><br />
                                        <h3 style={{ fontFamily: 'Silkscreen', fontSize: '40px' }} className="text_align_center">Abstract:</h3>
                                        <br />
                                        <center>
                                            <p style={{ width: '60%' }}>Solana Token ($SODS) is a digital asset built on the Solana blockchain, designed to facilitate decentralized
                                                finance (DeFi) transactions, provide utility within various applications, and serve as a medium of exchange within
                                                the Solana ecosystem. This white paper outlines the technical specifications, tokenomics, use cases, and distribution
                                                mechanism of $SODS, focusing particularly on the pre-sale phase.</p>
                                        </center>

                                        <br /><br />
                                        <h3 style={{ fontFamily: 'Silkscreen', fontSize: '40px' }} className="text_align_center">Introduction:</h3>
                                        <br />
                                        <center>
                                            <p style={{ width: '60%' }}>In recent years, the cryptocurrency market has witnessed significant growth in decentralized finance (DeFi) projects, which aim to provide financial services without traditional intermediaries. Solana, a high-performance blockchain network, has gained traction for its scalability, low transaction costs, and rapid transaction finality. Solana Token ($SODS) leverages the Solana blockchain to offer users fast, secure, and cost-effective transactions while contributing to the expansion of the Solana ecosystem.</p>
                                        </center>

                                        <br /><br />
                                        <h3 style={{ fontFamily: 'Silkscreen', fontSize: '40px' }} className="text_align_center">Technical Specifications:</h3>
                                        <br />
                                        <center>
                                            <p style={{ width: '60%' }}>$SODS is an SPL (Solana Program Library) token, compliant with the Solana blockchain's standards for tokenization. Being an SPL token, $SODS inherits the benefits of Solana's high throughput, low latency, and scalability.</p>
                                            <h3>Blockchain: Solana</h3>
                                            <h3>Token Standard: SPL</h3>
                                            <h3>Total Supply: [To be determined]</h3>
                                            <h3>Decimal Precision: [To be determined]</h3>
                                        </center>

                                        <br /><br />
                                        <h3 style={{ fontFamily: 'Silkscreen', fontSize: '40px' }} className="text_align_center">Tokenomics:</h3>
                                        <br />
                                        <center>
                                            <p style={{ width: '60%' }}>
                                                The tokenomics of $SODS are designed to foster a healthy and sustainable ecosystem while incentivizing network participation and community engagement. The distribution mechanism and allocation of tokens play a crucial role in ensuring the long-term viability of the project.
                                            </p><br />
                                            <h3 style={{ width: '60%' }}>Total Supply: The total supply of $SODS tokens will be determined prior to the pre-sale phase, taking into consideration factors such as market demand, community feedback, and project requirements.</h3>
                                            <h3 style={{ width: '60%' }}>Distribution: The distribution of $SODS tokens will be conducted through a multi-phase approach, including private sale, pre-sale, public sale, liquidity provision, and community incentives.</h3>
                                            <h3 style={{ width: '60%' }}>Allocation: A portion of the total token supply will be allocated to the development team, ecosystem development, liquidity provision, community incentives, partnerships, and strategic reserves.</h3>
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <Footer />  
    </div>    
  ); 
 
}

export default WhitepaperPage;  