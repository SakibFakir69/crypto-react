
import React from "react";

function Collabration() {
  const logos = [
    { src: "https://img.icons8.com/color/48/google-logo.png", name: "Google" },
    { src: "https://img.icons8.com/color/48/linkedin.png", name: "LinkedIn" },
    { src: "https://img.icons8.com/fluency/48/chatgpt--v2.png", name: "ChatGPT" },
    { src: "https://img.icons8.com/fluency/48/chatgpt--v2.png", name: "xGPT" },
    { src: "https://img.icons8.com/color/48/instagram-new--v1.png", name: "Instagram" },
    { src: "https://img.icons8.com/color/48/mac-os--v1.png", name: "Apple" },
    { src: "https://img.icons8.com/ios/50/twitterx--v2.png", name: "Twitter" },
    { src: "https://img.icons8.com/arcade/64/binance.png", name: "Binance" },
    { src: "https://img.icons8.com/fluency/48/paypal.png", name: "PayPal" },
    { src: "https://img.icons8.com/color/48/nasa.png", name: "NASA" },
  ];

  // Split into two rows
  const topRow = logos.slice(0, 5);
  const bottomRow = logos.slice(5, 10);

  const renderRow = (row) => (
    <div className="row justify-content-center text-center mb-4">
      {row.map((logo, index) => (
        <div key={index} className="  col-2 col-sm-2 col-md-2 d-flex flex-column align-items-center border-"
        >
          <img
            src={logo.src}
            alt={logo.name}
            className="img-fluid logo"
          />
          <p className="mt-2 mb-0">{logo.name}</p>
        </div>
      ))}
    </div>
  );

  return <div className="container py-5">
    <h1 className="text-center mb-5">Collbaration with other companay</h1>
    
    
    {renderRow(topRow)}{renderRow(bottomRow)}</div>;
}

export default Collabration;
