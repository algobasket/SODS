/* global openNav */ 
import React from 'react';

const Header = () => {
    
  return (
        <header> 
            <div className="head-top">
                <div className="container-fluid"> 
                    <div className="row d-flex">
                        <div className="col-sm-3">
                            <div className="logo">
                                <a href="/">SOLANA CHADS</a> 
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
                </div>
            </div>
        </header>
  );
}

export default Header;