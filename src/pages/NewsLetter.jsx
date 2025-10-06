import React from "react";

function NewsLetter() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center g-4 " style={{marginTop:"-50px"}}>

        {/* Left Box */}
        <div className="col-12 col-md-4 d-flex justify-content-center ">
          <div
            className="d-flex justify-content-center align-items-center gap-3 rounded shadow mb-2"
            style={{
              height: "130px",
              width: "100%",
              maxWidth: "400px",
              backgroundColor: "white",
              
            }}
          >
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/fluency/48/location--v1.png"
              alt="logo"
            />
            <h4 className="fs-2 mb-0">Krypo</h4>
          </div>
        </div>

        {/* Right Box */}
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div
            className="bg-white rounded p-3 shadow w-100 "
            style={{ maxWidth: "500px",  background: "linear-gradient(to right, #3b82f6, #8b5cf6)" }}
          >
            <p className="fs-3 fw-bold mb-3 text-center text-md-start text-white">
              Join Krypo Newsletter
            </p>

            <div className="d-flex flex-column flex-md-row ">
              <input
                type="text"
                className="form-control"
                style={{ height: "50px", borderRadius:"3px" }}
                placeholder="Your email address"
                
              />
              <button style={{borderRadius:"3px"}} className="btn btn-dark px-4 rounded-0">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
