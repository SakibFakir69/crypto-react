import React from "react";
import News from "./News";


function Community() {
  return (
    <div className="bg-black">
      <div
        className="position-absolute start-50 translate-middle-x w-100 "
        id="news"
      >
        <News />
      </div>

      <section className="p-4 " style={{ marginTop: "250px" }}>
        <div
          className="d-flex justify-content-center flex-column align-content-center align-items-center"
         id="community"
        
        >
          <h1 className="text-center text-white mb-5">Our Community</h1>

          <div className=" text-white row ml" style={{marginLeft:"100px", width: "80%",borderBottom:"1px solid gray" }}>

            <div className="text-white col">
              <img
                width="68"
                height="68"
                src="https://img.icons8.com/fluency/48/cheap-2--v1.png"
                alt="cheap-2--v1"
              />

              <p className="p-box rotate-90 fb" >Facebook</p>
            </div>

            <div className="col">
              <p className="p-box tel" >Telegram</p>
              <img
                width="68"
                height="68"
                src="https://img.icons8.com/fluency/48/cheap-2--v1.png"
                alt="cheap-2--v1"
              />
            </div>

            <div className="col">
              <img
                width="68"
                height="68"
                src="https://img.icons8.com/fluency/48/cheap-2--v1.png"
                alt="cheap-2--v1"
                className="dec-coin"
              />
              <p className="p-box dec" >Discord</p>
            </div>
            <div className="col">
              <p className="p-box tw" >Twitter</p>
              <p className="p-box in" >Instagram</p>
            </div>
            <div id="coin" className="col">
              <img
                width="68"
                height="68"
                src="https://img.icons8.com/fluency/48/cheap-2--v1.png"
                alt="cheap-2--v1"
                className="coin-1"
              />
              <img
                width="68"
                height="68"
                src="https://img.icons8.com/fluency/48/cheap-2--v1.png"
                alt="cheap-2--v1"
                className="coin-2"
              />
            </div>
            <div className="col">
              <p className="p-box yt" >Youtube</p>
              <p className="p-box md" >Medium</p>
            </div>
            <div className="col">
              <img
              
                src="https://img.icons8.com/fluency/48/cheap-2--v1.png"
                alt="cheap-2--v1"
                className="last-coin"
              />
            </div>
          </div>
          
        </div>

        {/* input */}
        <div className="container py-5 mb-5" id="form-box">

          <div className="row g-5 align-items-center">
            {/* form*/}
            <div className="col-12 col-lg-6">
              <h2 className="fw-bold mb-4 text-white text-center text-md-start">
                Contact Us
              </h2>

              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control text-white border-blue"
                    placeholder="Type youe name"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control border-blue"
                    placeholder="Type your email"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control border-blue"
                    placeholder="Type your number"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    type="number"
                    className="form-control border-blue "
                    placeholder="Type your message"
                    style={{ height: "120px" }}
                  />
                </div>
                <div className="mb-3 d-flex  gap-2">
                  <input type="checkbox" className="" />
                  <span className="text-white ">I agree with this</span>
                </div>

                <div className="col-3">
                  <button
                    style={{ height: "50px" }}
                    type="submit"
                    className="btn btn-primary w-100 mt-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side - 2 Steps */}
            <div className="col-12 col-lg-6 gap-lg-1 gap-4 " id="text-box-form">

              <h4 className="mb-4 text-white text-center" id="faq-text" >
                What happens next depends on what you are looking to do
              </h4>
              <div className="mb-4 text-white d-flex gap-3 " style={{marginLeft:"10px"}}>

                <p className="number border rounded-pill">1</p>
                
                <p className="mb-0">
                  <strong>Research </strong>
                  Fill out your information on the left and click Submit.
                </p>

              </div>

              <div className="p-3 text-white d-flex gap-4">
                 <p className="number border rounded-pill">2</p>
             
                <p className="mb-0">
                  
                  <strong>Planning </strong>
                  We’ll contact you soon with more details.
                </p>
              </div>
               <div className="p-3 text-white d-flex">
             
                <p className="mb-0 d-flex gap-4">
                   <p className="number border rounded-pill">3</p>
                  <strong>Execution </strong>
                  We’ll contact you soon with more details.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Community;
