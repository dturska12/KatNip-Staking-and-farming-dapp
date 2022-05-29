
import './App.css';
import { Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import 'sf-font';


function App() {
  return (
    <div className="App nftapp">
        <nav class="navbar navbarfont navbar-expand-md navbar-dark bg-dark mb-4">
          <div class="container-fluid" style={{ fontFamily: "SF Pro Display" }}>
            <a class="navbar-brand px-5" style={{ fontWeight: "800", fontSize: '25px' }} href="#"></a><img src="Logo512.png" width="8%" />
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav me-auto mb-2 px-3 mb-md-0" style={{ fontSize: "25px" }}>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">List NFTs</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Bridge NFTs</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='px-5'>
            <input id="connectbtn" type="button" className="connectbutton" style={{ fontFamily: "SF Pro Display" }} value="Connect Your Wallet" />
          </div>
        </nav>
            <div className="row pt-3">
              <div>
                <h1 className="pt-2" style={{ fontWeight: "50" }}>Mint a KronicKatz</h1>
              </div>
              <h3>/10,000</h3>
              <h6>Your Wallet Address</h6>
              <div className="pb-3" id='wallet-address' style={{
                color: "#39FF14",
                fontWeight: "400",
                textShadow: "1px 1px 1px black",
              }}>
                <label for="floatingInput">Please Connect Wallet</label>
              </div>
            </div>
            <div>
              <label style={{ fontWeight: "300", fontSize: "18px" }}>Select NFT Quantity</label>
            </div>
            <ButtonGroup size="sm"></ButtonGroup>
              aria-label="First group"
              name="amount"
              style={{ boxShadow: "1px 1px 5px #000000" }}
        
              <Button value="1">1</Button>
              <Button value="2">2</Button>
              <Button value="3">3</Button>
              <Button value="4">4</Button>
              <Button value="5">5</Button>
        <div className='col'>
          <body className='nftstaker border-0'>
            <form  style={{ fontFamily: "SF Pro Display" }} >
              <h2 style={{ borderRadius: '14px', fontWeight: "300", fontSize: "25px" }}>KatNip Staking Multi-vault </h2>
              <h6 style={{ fontWeight: "300" }}>First time staking?</h6>
              <Button className="btn" style={{ backgroundColor: "#00c0ff", boxShadow: "1px 1px 5px #000000" }} >Authorize Your Wallet</Button>
              <div className="row px-3">
                <div className="col">
                  <form class="stakingrewards" style={{ borderRadius: "25px", boxShadow: "1px 1px 15px #ffffff" }}>
                    <h5 style={{ color: "#FFFFFF", fontWeight: '300' }}>Vault Activity</h5>
                    <h6 style={{ color: "#FFFFFF" }}>Verify your staked NFTs</h6>
                    <Button style={{ backgroundColor: "#00c0ff", boxShadow: "1px 1px 5px #000000" }} >Verify</Button>
                    <table className='table mt-3 mb-5 px-3 table-dark'>
                      <tr>
                        <td style={{ fontSize: "19px" }}>Your Staked NFTs:
                          <span style={{ backgroundColor: "#ffffff00", fontSize: "21px", color: "#39FF14", fontWeight: "500", textShadow: "1px 1px 2px #000000" }} id='yournfts'></span>
                        </td>
                      </tr>
                      <tr>
                      <tr></tr>
                        <td style={{ fontSize: "19px" }}>Total Staked NFTs:
                          <span style={{ backgroundColor: "#ffffff00", fontSize: "21px", color: "#39FF14", fontWeight: "500", textShadow: "1px 1px 2px #000000" }} id='stakedbalance'></span>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ fontSize: "19px" }}>Unstake All Staked NFTs
                          <Button className='mb-3' style={{ backgroundColor: "#ffffff10", boxShadow: "1px 1px 5px #000000" }}>Unstake All</Button>
                        </td>
                      </tr>
                    </table>
                  </form>
                  <img className="col-lg-4" src="art.png"/>
                  <div className="col">
                    <form className='stakingrewards' style={{ borderRadius: "25px", boxShadow: "1px 1px 15px #ffffff", fontFamily: "SF Pro Display" }}>
                      <h5 style={{ color: "#00c0ff", fontWeight: '300' }}> Staking Rewards</h5>
                      <Button style={{ backgroundColor: "#00c0ff", boxShadow: "1px 1px 5px #000000" }} >Earned KatNip Staking Rewards</Button>
                      <div id='earned' style={{ color: "#39FF14", marginTop: "5px", fontSize: '25px', fontWeight: '500', textShadow: "1px 1px 2px #000000" }}><p style={{ fontSize: "20px" }}>Earned KatNip</p></div>
                      <div className='col-12 mt-2'>
                        <div style={{ color: 'white' }}>Claim Rewards</div>
                        <Button style={{ backgroundColor: "#ffffff10", boxShadow: "1px 1px 5px #000000" }} className="mb-2">Claim</Button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="row px-4 pt-2">
                  <div class="header">
                    <div style={{ fontSize: '25px', borderRadius: '14px', color: "#ffffff", fontWeight: "300" }}>Katnip Staking Rewards</div>
                    <table className='table px-3 table-bordered table-dark'>
                      <thead className='thead-light'>
                        <tr>
                          <th scope="col">Collection</th>
                          <th scope="col">Rewards Per Day</th>
                          <th scope="col">Exchangeable Items</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>The Official KronicKatz</td>
                          <td class="amount" data-test-id="rewards-summary-ads">
                            <span class="amount">1000</span>&nbsp;<span class="currency">KNIP</span>
                          </td>
                          <td class="exchange">
                            <span class="amount">2</span>&nbsp;<span class="currency">NFT per Month</span>
                          </td>
                        </tr>
                        <tr>
                          <td>Kronic Mutant Katz</td>
                          <td class="amount" data-test-id="rewards-summary-ads">
                            <span class="amount">1500</span>&nbsp;<span class="currency">KNIP</span>
                          </td>
                          <td class="exchange">
                            <span class="amount">1</span>&nbsp;<span class="currency">KronicKatz Merch per Month</span>
                          </td>
                        </tr>
                        <tr>
                          <td>The Rich Fox Club NFT (RFC-X)</td>
                          <td class="amount" data-test-id="rewards-summary-ac">
                            <span class="amount">800</span>&nbsp;<span class="currency">KNIP</span>
                          </td>
                          <td class="exchange"><span class="amount">1</span>&nbsp;<span class="currency">NFT per Month</span>
                          </td>
                        </tr>
                        <tr className='stakegoldeffect'>
                          <td>The Rich Fox Club NFT (RFC-X)</td>
                          <td class="amount" data-test-id="rewards-summary-one-time"><span class="amount">1</span>&nbsp;<span class="currency">RFC-X</span>
                          </td>
                          <td class="exchange">
                            <span class="amount">??? NFTs per Month or </span>
                            <span class="currency">??? RFC-X</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div class="header">
                      <div style={{ fontSize: '25px', borderRadius: '14px', fontWeight: '300' }}>KatNip Staing Farm</div>
                      <table className='table table-bordered table-dark' style={{ borderRadius: '14px' }} >
                        <thead className='thead-light'>
                          <tr>
                            <th scope="col">Farm Pools</th>
                            <th scope="col">Harvest Daily Earnings</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Stake KatNip to Earn KronicKoin</td>
                            <td class="amount" data-test-id="rewards-summary-ads">
                              <span class="amount">0.01</span>&nbsp;<span class="currency">Per KRONIC</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Stake KatNip to Earn KronicKoin</td>
                            <td class="amount" data-test-id="rewards-summary-ac">
                              <span class="amount">1</span>&nbsp;<span class="currency">Per KRONIC</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                </div>
            </form>
          </body>
        </div>
      </div>
                 
  );
}

export default App;
