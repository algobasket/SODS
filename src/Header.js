/* global openNav */ 
import React from 'react';

const Header = () => {
    
  return (
        <header> 
            <div className="head-top">
                <div className="container-fluid"> 



                    <div className="row navMain">
                        <div className="col-sm-3">
                            <div className="logo">
                                <a href="/" style={{ fontSize: '150%' }}>SOLANA CHADS</a> 
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <ul className="social_icon text_align_right">
                                <li><a href="https://twitter.com/solana_chads" target="__blank"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="https://t.me/solanachadsss" target="__blank"><i className="fa fa-telegram" aria-hidden="true"></i></a></li> 
                            </ul>
                        </div>
                        <div className="col-sm-4">
                            <ul className="email text_align_right">
                                <li className="d-none"><a href="javascript:void(0)"><i className="fa fa-user" aria-hidden="true"></i></a></li>
                                <li className="d-none"><a href="javascript:void(0)"><i className="fa fa-search" style={{ cursor: 'pointer' }} aria-hidden="true"></i></a></li>
                                <li>
                                    <button className="openbtn" onClick={openNav}>
                                        <img src={process.env.PUBLIC_URL + '/images/menu_btn.png'} alt="Menu" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="row navMob"> 
                        <div className="col-sm-6">
                            <img src={process.env.PUBLIC_URL + '/images/Small-Logo/o6.png'} alt="Menu" style={{ width: '70px',marginTop:'-10px' }} className="float-left"/>
                            <button className="openbtn float-right" onClick={openNav}>
                                <img src={process.env.PUBLIC_URL + '/images/menu_btn.png'} alt="Menu" />
                            </button>
                        </div>
                
                       
                    </div>




                </div>
            </div>
        </header>
  );
}

export default Header;