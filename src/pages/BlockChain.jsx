

import React from "react";

function BlockChain() {
  return (
    <div className="container text-center py-5">
      <h1 className="fw-bold mb-4">Most Popular Blockchain Platforms</h1>

      {/* First Row - 5 Coins */}
      <div className="row justify-content-center g-4">
        <div className="col-4 col-sm-3 col-md-2">
          <img src="https://img.icons8.com/fluency/48/ethereum.png" alt="ethereum" className="img-fluid" />
          <p className="mt-2 fw-semibold">ETH</p>
        </div>

        <div className="col-4 col-sm-3 col-md-2">
          <img src="https://img.icons8.com/color/48/bitcoin--v1.png" alt="bitcoin" className="img-fluid" />
          <p className="mt-2 fw-semibold">Bitcoin</p>
        </div>

        <div className="col-4 col-sm-3 col-md-2">
          <img src="https://img.icons8.com/fluency/48/doge.png" alt="doge" className="img-fluid" />
          <p className="mt-2 fw-semibold">Doge</p>
        </div>

        <div className="col-4 col-sm-3 col-md-2">
          <img src="https://img.icons8.com/fluency/48/polygone.png" alt="polygone" className="img-fluid" />
          <p className="mt-2 fw-semibold">Poly</p>
        </div>

        <div className="col-4 col-sm-3 col-md-2">
          <img src="https://img.icons8.com/nolan/64/solana.png" alt="solana" className="img-fluid" />
          <p className="mt-2 fw-semibold">Solana</p>
        </div>
      </div>

      {/* Second Row - 3 Coins */}
      <div className="row justify-content-center g-4 mt-4">
        <div className="col-4 col-sm-3 col-md-2">
          <img src="https://img.icons8.com/emoji/48/coin-emoji.png" alt="coin-emoji" className="img-fluid" />
          <p className="mt-2 fw-semibold">Coin</p>
        </div>

        <div className="col-4 col-sm-3 col-md-2">
          <img src="https://img.icons8.com/color/48/donald-trump.png" alt="donald-trump" className="img-fluid" />
          <p className="mt-2 fw-semibold">Trump Coin</p>
        </div>

        <div className="col-4 col-sm-3 col-md-2">
          <img width="48" height="48" src="https://img.icons8.com/color-glass/48/trash-dove.png" alt="trash-dove"/>

          <p className="mt-2 fw-semibold">Meme</p>
        </div>
      </div>
    </div>
  );
}

export default BlockChain;
