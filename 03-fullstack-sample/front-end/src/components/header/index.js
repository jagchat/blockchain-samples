import React, { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { shortenAddress } from "../../utils/shortenAddress";
import logo from "./../../assets/logo.png";
function Header() {

     const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

     return (
          <>
               <div className="container">
                    <div className="row">
                         <div className="col-sm-3">
                              <img src={logo} alt="logo" className="img-fluid" />
                         </div>
                         <div className="col-sm-3">
                              <br />
                              <h5 style={{ fontSize: "18px", textAlign: "center" }}>AVAX PRICE <br />$71.11</h5>
                         </div>
                         <div className="col-sm-3">
                              <br />
                              <h5 style={{ fontSize: "18px", textAlign: "center" }}>TOTAL STAKED AMOUNT <br />89,155.00 AVAX</h5>
                         </div>
                         <div className="col-sm-3" style={{ textAlign: "center" }}>
                              <br />
                              {!currentAccount && (
                                   <button className="btn btn-danger btn-lg" onClick={connectWallet}>Connect Wallet</button>
                              )}
                              {currentAccount && (
                                   shortenAddress(currentAccount)
                              )}
                         </div>
                    </div>
                    <br /><br />
                    <div className="row">
                         <div className="col-sm-4">
                              <h1>Stake Your AVAX & Earn up to 20% Daily</h1>
                         </div>
                         <div className="col-sm-4">
                              <div className="card">
                                   <div className="card-header">
                                        <h2>GLOBAL STATS</h2>
                                   </div>
                                   <div className="card-body">
                                        <div className="row">
                                             <div className="col-sm-8">
                                                  <h5>Total Contract Balance</h5>
                                             </div>
                                             <div className="col-sm-4">
                                                  <h5>SWTC Price</h5>
                                             </div>
                                             <div className="col-sm-8">
                                                  <h6>64,314.52 AVAX</h6>
                                             </div>
                                             <div className="col-sm-4">
                                                  <h6>Coming Soon</h6>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                         </div>
                         <div className="col-sm-4">
                              <div className="card">
                                   <div className="card-header">
                                        <h2>WALLET BALANCE</h2>
                                   </div>
                                   <div className="card-body">
                                        <div className="row">
                                             <div className="col-sm-8">
                                                  <h5>SWTC</h5>
                                             </div>
                                             <div className="col-sm-4">
                                                  <h5>AVAX</h5>
                                             </div>
                                             <div className="col-sm-8">
                                                  <h6>0.00</h6>
                                             </div>
                                             <div className="col-sm-4">
                                                  <h6>0.00</h6>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>

                    </div>
               </div>



          </>
     );
}

export default Header;