// MainContent.js
/* global solanaInputLogo */  
/* global $ */ 

import React, { useEffect,useState } from 'react';  
import { useWallet } from '@solana/wallet-adapter-react';  
 
import Wallet from './Wallet';
import HoldingStats from './HoldingStats';
import CountDownTimer from './CountDownTimer';  

const MainContent = () => {
    
    
       useEffect(() => {
        $(".buy_now_scroll").click(function() {
            console.log("Test");
             $('html,body').animate({
                 scrollTop: $("#walletDiv").offset().top}, 
                 'slow');
           }); 
           $(".direct_transfer_scroll").click(function() {
             $('html,body').animate({
                 scrollTop: $("#directTransferDiv").offset().top}, 
                 'slow');
           });
           $(".aboutSods").click(function() { 
             $('html,body').animate({
                 scrollTop: $(".about").offset().top}, 
                 'slow'); 
           });
           $(".whySods").click(function() {
             $('html,body').animate({
                 scrollTop: $("#directTransferDiv").offset().top}, 
                 'slow');
           });
           $(".tokenomics").click(function() {
             $('html,body').animate({
                 scrollTop: $(".testimonial").offset().top}, 
                 'slow');
           });
           $(".howItWorks").click(function() {
             $('html,body').animate({
                 scrollTop: $(".works").offset().top}, 
                 'slow');
           });
       },[]);

        const { publicKey, sendTransaction, connection } = useWallet();
        const [purchaseAmount, setPurchaseAmount] = useState(0); 

        // State to manage the value of the input field
        const [inputValue, setInputValue] = useState('');

        // Function to handle input changes and perform sanitization
        const handleInputChange = (event) => {
            // Replace non-numeric and non-decimal characters
            const sanitizedValue = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
            setInputValue(sanitizedValue);
        };

        // Function to handle key up events and perform calculations
        const handleKeyUp = (event) => {
             let x = parseFloat(event.target.value); // Assuming event.target.value contains the number x
             let y = 2000000 * x;
            // Convert x to a decimal number with 2 decimal places
            let xDecimal = y.toFixed(2);

            // Set the value of input field with class .sodsInputLogo to xDecimal
            document.querySelector('.sodsInputLogo').value = xDecimal; 
        };

  
    //const { open, connect, connected } = useWalletModal(); 

   
  return (
   <div>
        <div id="top_section" class=" banner_main"> 
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li> 
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>  
                                </ol>
                                
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="container-fluid">
                                            <div className="carousel-caption relative">
                                                <div className="row d_flex">
                                                    <div className="col-md-6">
                                                        <div className="con_img">
                                                            <figure><img className="img_responsive" src={process.env.PUBLIC_URL + 'images/sticker/1.png'} alt="#" width="60%" /></figure>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="bluid">
                                                            <h1 className="display-1" style={{ fontFamily: 'Silkscreen', color: '#fff', fontSize: '60px' }}>Welcome to<br /></h1> 
                                                            <br />
                                                            <h1><span className="gfonts" style={{ fontSize: '200%' }}>SOLANA</span></h1>
                                                            <h1><span className="gfonts" style={{ fontSize: '200%' }}>CHADS</span></h1>
                                                            <p style={{ fontFamily: 'Silkscreen', color: '#fff', fontSize: '24px' }}>Your Ticket to Solana Adventures!<br />Explore Solana with $SODS - Smart, Fun, and Rewarding. </p>
                                                            
                                                            <div className="row btnMain"> 
                                                                <div className="col-md-6">
                                                                <a className="btn btn-lg btn-outline-warning buy_now_scroll " href="javascript:void(0)" style={{ padding: '10%' }}>
                                                                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;&nbsp;Buy Presale Now </a>   
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <a className="btn btn-lg btn-outline-warning " href="https://t.me/solanachadsss" target="_blank" style={{ padding: '10%' }}>   
                                                                        <i className="fa fa-telegram" aria-hidden="true"></i> &nbsp;&nbsp;Join Our Telegram</a>  
                                                                </div>
                                                            </div>

                                                            <div className="row btnMob"> 
                                                              
                                                                <a className="btn btn-lg btn-block btn-warning buy_now_scroll " href="javascript:void(0)">
                                                                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;&nbsp;Buy Presale Now </a>   
                                                               
                                                                  <br />
                                                                    <a className="btn btn-lg btn-block btn-warning " href="https://t.me/solanachadsss" target="_blank">   
                                                                        <i className="fa fa-telegram" aria-hidden="true"></i> &nbsp;&nbsp;Join Our Telegram</a>  
                                                                
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="container-fluid">
                                            <div className="carousel-caption relative">
                                                <div className="row d_flex">
                                                    <div className="col-md-6">
                                                        <div className="con_img">
                                                            <figure><img className="img_responsive" src={process.env.PUBLIC_URL + 'images/sticker/3.png'} alt="#" width="40%" /></figure>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="bluid">
                                                            <h1 className="display-1" style={{ fontFamily: 'Silkscreen', color: '#fff', fontSize: '60px' }}>Welcome to<br /></h1> 
                                                            <br />
                                                            <h1><span className="gfonts" style={{ fontSize: '200%' }}>SOLANA</span></h1>
                                                            <h1><span className="gfonts" style={{ fontSize: '200%' }}>CHADS</span></h1>
                                                            <p style={{ fontFamily: 'Silkscreen', color: '#fff', fontSize: '24px' }}>Your Ticket to Solana Adventures!<br />Explore Solana with $SODS - Smart, Fun, and Rewarding. </p>
                                                            <div className="row btnMain"> 
                                                                <div className="col-md-6">
                                                                <a className="btn btn-lg btn-outline-warning buy_now_scroll " href="javascript:void(0)" style={{ padding: '10%' }}>
                                                                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;&nbsp;Buy Presale Now </a>   
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <a className="btn btn-lg btn-outline-warning " href="https://t.me/solanachadsss" target="_blank" style={{ padding: '10%' }}>   
                                                                        <i className="fa fa-telegram" aria-hidden="true"></i> &nbsp;&nbsp;Join Our Telegram</a>  
                                                                </div>
                                                            </div>

                                                            <div className="row btnMob"> 
                                                              
                                                                <a className="btn btn-lg btn-block btn-warning buy_now_scroll " href="javascript:void(0)">
                                                                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;&nbsp;Buy Presale Now </a>   
                                                               
                                                                  <br />
                                                                    <a className="btn btn-lg btn-block btn-warning " href="https://t.me/solanachadsss" target="_blank">   
                                                                        <i className="fa fa-telegram" aria-hidden="true"></i> &nbsp;&nbsp;Join Our Telegram</a>  
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="container-fluid">
                                            <div className="carousel-caption relative">
                                                <div className="row d_flex">
                                                    <div className="col-md-6">
                                                        <div className="con_img">
                                                            <figure><img className="img_responsive" src={process.env.PUBLIC_URL + 'images/sticker/2.png'} alt="#" width="60%" /></figure>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="bluid">
                                                           <h1 className="display-1" style={{ fontFamily: 'Silkscreen', color: '#fff', fontSize: '60px' }}>Welcome to<br /></h1> 
                                                            <br />
                                                            <h1><span className="gfonts" style={{ fontSize: '200%' }}>SOLANA</span></h1>
                                                            <h1><span className="gfonts" style={{ fontSize: '200%' }}>CHADS</span></h1>
                                                            <p style={{ fontFamily: 'Silkscreen', color: '#fff', fontSize: '24px' }}>Your Ticket to Solana Adventures!<br />Explore Solana with $SODS - Smart, Fun, and Rewarding. </p>
                                                            <div className="row btnMain"> 
                                                                <div className="col-md-6">
                                                                <a className="btn btn-lg btn-outline-warning buy_now_scroll " href="javascript:void(0)" style={{ padding: '10%' }}>
                                                                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;&nbsp;Buy Presale Now </a>   
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <a className="btn btn-lg btn-outline-warning " href="https://t.me/solanachadsss" target="_blank" style={{ padding: '10%' }}>   
                                                                        <i className="fa fa-telegram" aria-hidden="true"></i> &nbsp;&nbsp;Join Our Telegram</a>  
                                                                </div>
                                                            </div>

                                                            <div className="row btnMob"> 
                                                              
                                                                <a className="btn btn-lg btn-block btn-warning buy_now_scroll " href="javascript:void(0)">
                                                                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;&nbsp;Buy Presale Now </a>   
                                                               
                                                                  <br />
                                                                    <a className="btn btn-lg btn-block btn-warning " href="https://t.me/solanachadsss" target="_blank">   
                                                                        <i className="fa fa-telegram" aria-hidden="true"></i> &nbsp;&nbsp;Join Our Telegram</a>  
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>     

                                <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div> 
                        </div>
                    </div>
                </div>
         </div> 
    
        <div className="wallet">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div id="wa_hover" className="wallet_box text_align_center">
                            <i><img src={process.env.PUBLIC_URL + 'images/Sticker-Images/2.png'} alt="#" /></i>
                            {/* <h3 style={{ fontFamily: 'Silkscreen', fontSize: '50px' }}>CONNECT WALLET</h3> */}
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div id="wa_hover" className="wallet_box text_align_center">
                            <i><img src={process.env.PUBLIC_URL + 'images/Sticker-Images/8.png'} alt="#" /></i>
                            {/* <h3 style={{ fontFamily: 'Silkscreen', fontSize: '50px' }}>REWARDING</h3> */}
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div id="wa_hover" className="wallet_box text_align_center">
                            <i><img src={process.env.PUBLIC_URL + 'images/Sticker-Images/4.png'} alt="#" /></i>
                            {/* <h3 style={{ fontFamily: 'Silkscreen', fontSize: '50px' }}>JUST HODL</h3> */}
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div id="wa_hover" className="wallet_box text_align_center">
                            <i><img src={process.env.PUBLIC_URL + 'images/Sticker-Images/7.png'} alt="#" /></i>
                            {/* <h3 style={{ fontFamily: 'Silkscreen', fontSize: '50px' }}>PRESALE EARLY</h3> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="about" className="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="about_border">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="titlepage text_align_left">
                                        <h2 style={{ fontFamily: 'Silkscreen' }}>What is SOLANA CHADS</h2>
                                    </div>
                                    <div className="about_text">
                                        <p>SOLANA CHADS is a cool token on the Solana blockchain that uses smart tech and awesome data analytics. It's not just a token; it's your sidekick in the big crypto world. With $SODS, investing is easy, fun, and rewarding. Get ready for a functional product right from the start, and we have even more cool features in the works to make your crypto adventure awesome!</p>
                                        {/* <a className="read_more" href="about.html">Read More</a> */}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="about_img">
                                        <figure><img className="img_responsive" src={process.env.PUBLIC_URL + 'images/Logo/m1.png'} alt="#" /></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
        <div id="walletDiv" className="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="about_border">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-center">
                                        <h2 style={{ fontSize: '50px' }} className="gfonts">SOLANA CHADS PRESALE IS LIVE</h2>
                                        <h2 style={{ fontSize: '25px' }}>LAST CHANCE TO BUY SPONGE BEFORE LISTINGS</h2>
                                    </div>

                                        <CountDownTimer /> 

                                    <div className="alert alert-dark text-center">
                                        <HoldingStats />
                                    </div>

                                    <div className="">
                                        <form>
                                        <div className="mb-3 input-group-lg">
                                            <label htmlFor="amt_in_sol" className="form-label text-white" style={{ fontSize: '20px' }}>Amount in SOL You Pay:</label> 
                                            <input 
                                                type="text"
                                                className="form-control lg-input solanaInputLogo"
                                                id="amt_in_sol"
                                                placeholder="Min 0.5 SOL | Max 20 SOL"
                                                value={inputValue}
                                                onChange={handleInputChange}
                                                onKeyUp={handleKeyUp}
                                            />
                                        </div>
                                        <div className="mb-3 input-group-lg">  
                                            <label htmlFor="amt_sods" className="form-label text-white" style={{ fontSize: '20px' }}>Amount in $SODS You Receive:</label>
                                             <Wallet />
                                        </div>
                                       <br/>
                                        <div className="mb-3 input-group-lg">
                                            <h3>Dont Prefer Wallet Connection? - <a href="#" className="text-white font-weight-bold direct_transfer_scroll">Use Direct Transfer</a></h3>
                                        </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
        <div id="about" className="about">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-4">
                        <img src={process.env.PUBLIC_URL + 'images/Sticker-Images/6.png'} alt="Sticker Image" />
                    </div>
                    <div className="col-md-8">
                        <div className="">
                            <h1 style={{ fontSize: '50px' }} className="gfonts">Join SOLANA CHADS's Presale Early</h1>
                            <h1 style={{ fontSize: '35px' }}>Early Access Now Available!</h1><br/>
                            <p style={{ fontSize: '20px' }}>The SOLANA CHADS presale is currently active, giving you the chance to be part of it before the official launch. This public presale operates on a first-come, first-served basis, ensuring equal opportunities for everyone. Our aim is to show appreciation to our early supporters by granting them priority access before the official launch.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div id="directTransferDiv" className="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="about_border">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-center">
                                        <h2 style={{ fontSize: '50px' }} className="gfonts">Alternative Participation Method</h2><br/>
                                        <p style={{ fontSize: '20px' }}>If you prefer an alternative way to participate in the presale or encounter difficulties accessing the dapp or connecting your wallet to our website for security reasons, you can still join the presale. Simply send SOL directly to $SODS.sol</p><br/>
                                        <img src={process.env.PUBLIC_URL + 'images/qr.jpg'} style={{ width: '500px' }} alt="QR Code" /><br/><br/>
                                        <h2 style={{ fontSize: '20px' }}>Secure Your SOLANA CHADS Tokens Now</h2><br/>
                                        <button className="btn btn-outline-warning btn-lg buy_now_scroll " id="connectWallet">Buy Now</button>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="testimonial">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="border_testi">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="titlepage text_align_center">
                                        <h2 style={{ fontFamily: 'Silkscreen' }}>Tokenomics</h2><br/>
                                        <h3 style={{ fontFamily: 'Silkscreen' }}>Discover the SOLANA CHADS Ecosystem</h3><br/>
                                        <p>SOLANA CHADS is not just a token; it's a meticulously designed digital currency with a transparent and robust tokenomics <br/>structure. Here's a breakdown of the SODS token distribution to give you a comprehensive understanding of our ecosystem:</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row d_flex">
                                <div className="col-md-10 offset-md-1">
                                    <div className="card-deck">
                                        <div className="card text-center" >
                                            <img className="card-img-top" src={process.env.PUBLIC_URL + 'images/Small-Logo/n3.png'} alt="Card image cap"/>
                                            <div className="card-body">
                                                <h1 className="card-title" style={{ fontFamily: 'Silkscreen' }}>PRESALE</h1>
                                                <p className="card-text">40% of the Token Supply will be SOLD</p>
                                            </div>
                                        </div>
                                        <div className="card text-center">
                                            <img className="card-img-top" src={process.env.PUBLIC_URL + 'images/Small-Logo/n5.png'} alt="Card image cap"/>
                                            <div className="card-body">
                                                <h1 className="card-title" style={{ fontFamily: 'Silkscreen' }}>AIRDROPPED</h1>
                                                <p className="card-text">10% Token Supply</p>
                                            </div>
                                        </div>
                                        <div className="card text-center">
                                            <img className="card-img-top" src={process.env.PUBLIC_URL + 'images/Small-Logo/n6.png'} alt="Card image cap"/>
                                            <div className="card-body">
                                                <h1 className="card-title" style={{ fontFamily: 'Silkscreen' }}>LIQUIDITY POOL</h1>
                                                <p className="card-text">40% Token Supply</p>
                                            </div>
                                        </div>
                                    </div><br/>
                                    <div className="text-center">
                                        <div className="card text-center">
                                            <img className="card-img-top" src={process.env.PUBLIC_URL + 'images/Small-Logo/n2.png'} alt="Card image cap"/>
                                            <div className="card-body">
                                                <h1 className="card-title" style={{ fontFamily: 'Silkscreen' }}>TEAM MEMBER & MARKETING</h1>
                                                <p className="card-text">Both 5% of the Token Supply</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="works">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage text_align_center">
                            <h2 style={{ fontFamily: 'Silkscreen' }}>How It Works</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="works_vedio">
                            <figure><img className="img_responsive" src={process.env.PUBLIC_URL + 'images/vid.png'} alt="#" /></figure>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

   </div> 
    

  );
};

export default MainContent;  