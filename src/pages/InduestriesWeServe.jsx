import React from "react";

function IndustriesWeServe() {
  return (
    <div className="container my-5">

        <div>
            <h4 className="text-center mb-5">Induestrise We Serve</h4>
        </div>
      <section className="row">
        {/* Left Box */}
        <div
          id="finance-box"
          className="col-12 col-md-6 p-4 bg-light rounded shadow-sm"
        >
          <h3 className="fw-bold">Finance and Banking</h3>
          <p>
            Our solutions center on the needs of financial institutions —
            providing secure, efficient, and transparent blockchain systems for
            modern banking.
          </p>
        </div>

        {/* Right Box */}
        <div className="col-12 col-md-6 p-4  rounded shadow-sm">

          <div className="row gap-2 col-" style={{marginTop:"-20px"}}>

            <div className="mb-4 col bg-white shadow-sm  rounded" style={{height:"140px"}}>
              <h3 className="fw-bold">Health Care</h3>
              <p>
                Blockchain transforming healthcare with secure medical
                management.
              </p>
            </div>

            <div className="mb-4 col bg-white shadow-sm rounded">
              <h3 className="fw-bold">Real Estate</h3>
              <p>
                Real estate transactions made secure with blockchain solutions.
              </p>
            </div>
          </div>

          <div className=" p-1 col    d-grid  mt-4 rounded " style={{backgroundColor:"white" , height:"170px"}} >
            <h3 className="fw-bold">Supply Chain and Logistics</h3>
            <p>
              Our blockchain solutions streamline supply chain and logistics
              operations, ensuring transparency and efficiency from production
              to delivery.
            </p>
          </div>
        </div>
      </section>


      <div className="border mt-4 d-flex justify-content-center align-content-center align-items-center rounded-pill">
        <p className="mt-3 ">Join our community today to start your blockchain journy</p>
      </div>
      
    </div>
  );
}

export default IndustriesWeServe;
