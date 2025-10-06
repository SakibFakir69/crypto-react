

import React from "react";
import NewsLetter from "./NewsLetter";

function Footer() {
  return (
    <div className="">

     
     <div className="position-absolute justify-content-center align-content-center justify-content-lg-center  w-100">
         <div className="d-flex justify-content-center" id="newsletter"  >
        <NewsLetter />
      </div>
     </div>

      {/* footer */}
        <footer className="color text-white  pb-3 " >

      <div className="container" style={{paddingTop:"170px"}}>

        <div id="footer-box" className="row text-center  text-md-start">
          {/* Box  */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold text-dark mb-4">Say Hello</h5>
            <p className="color-p" >hello@krypo.com</p>
            <p className="color-p">+880 123 456 789</p>
          </div>

          
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold text-dark mb-4">Community</h5>
            <p className="color-p">Facebook</p>
            <p className="color-p">Telegram</p>
            <p className="color-p">Discord</p>
            <p className="color-p">Instagram</p>
          </div>

     
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold text-dark mb-4">Quick Support</h5>
            <p className="color-p">Help Center</p>
            <p className="color-p">FAQs</p>
            <p className="color-p">Contact Support</p>
            <p className="color-p">Live Chat</p>
          </div>

   
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold text-dark mb-4">Legal</h5>

            <p className="color-p">Privacy Policy</p>
            <p className="color-p">Terms & Conditions</p>
            <p className="color-p">Cookie Policy</p>
          </div>
        </div>

      
      </div>
    </footer>
    </div>
  );
}

export default Footer;
