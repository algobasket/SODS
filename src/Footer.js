import React from 'react';

const Footer = () => { 
  return (
    <footer>
        <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <a class="logo_bottom gfonts" href="/" style={{ fontFamily: 'Silkscreen' }}>SOLANA CHADS</a>
                    </div>
                    <div class="col-md-3 col-sm-6">
                  <div class="Informa conta ">
                     <h3>Available Now</h3>
                     <ul>
                        <li> 
                           <a className="read_more buy_now_scroll" href="javascript:void(0)"><i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;&nbsp;Buy Now </a>
                        </li>
                        <li> 
                          <br /><a className="read_more" href="https://t.me/solanachadsss" target="_blank"><i className="fa fa-telegram" aria-hidden="true"></i> &nbsp;&nbsp;Join Our Telegram</a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="col-md-3 col-sm-6 ">
                        <div class="Informa helpful">
                            <h3>Social Link</h3>
                            <ul>
                                <li><a href="https://youtube.com/solana_chads" target="__blank">Youtube</a></li>
                                <li><a href="https://twitter.com/solana_chads" target="__blank">Twitter</a></li>
                                <li><a href="https://facebook.com/solana_chads" target="__blank">Facebook</a></li>
                                <li><a href="https://t.me/solanachadsss" target="__blank">Telegram</a></li>
                                <li><a href="https://discord.com/channels/1189623776565014528/1189623777420640339" target="__blank">Discord</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                  <div class="Informa ">
                     <h3>About Us</h3>
                     <ul>
                        <li>Meet SOLANA CHADS, making a splash in the crypto sea. Our mascot, the porous trendsetter, knows how to soak up the excitement in the decentralized world. With a pineapple under the sea and a wallet on the blockchain, SOLANA CHADS is not just a currency</li> 
                     </ul>
                  </div>
               </div>
               <div class="col-md-3 col-sm-6 ">
                  <div class="Informa ">
                     <h3>Newsletter</h3> 
                     <form class="newslatter_form ">  
                        <input class="ente " placeholder="Enter your email " type="text " name="Enter your email " />
                        <button class="subs_btn" type="button">Subscribe</button>
                     </form>
                  </div>
               </div>
            </div>
            <div class="copyright text_align_center ">
               <div class="container ">
                  <div class="row ">
                     <div class="col-md-12 ">
                        <p>© 2024 All Rights Reserved.<a href="/"> SOLANA CHADS</a></p>   
                        <a class="logo_bottom gfonts" href="/" style={{ fontFamily: 'Silkscreen', fontSize: '20px' }}>Developed By Algobasket</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </footer>
  );
}

export default Footer;