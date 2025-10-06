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
        <div className="col-12 col-md-6 p-4   rounded shadow-sm">

          <div className="row g-3" style={{ marginTop: "-20px" }}>

            <div className="col-12 col-md-6 mt-3">
              <div className="bg-white shadow-sm rounded p-3 h-100">
                <h3 className="fw-bold">Health Care</h3>
                <p>
                  Blockchain transforming healthcare with secure medical
                  management.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="bg-white shadow-sm rounded p-3 h-100">
                <h3 className="fw-bold">Real Estate</h3>
                <p>
                  Real estate transactions made secure with blockchain
                  solutions.
                </p>
              </div>
            </div>
          </div>

          <div
            className=" p-3 col-md-12    d-grid  mt-2  rounded bg-white "
            style={{ minHeight: "200px" }}
          >
            <h3 className="fw-bold">Supply Chain and Logistics</h3>
            <p>
              Our blockchain solutions streamline supply chain and logistics
              operations, ensuring transparency and efficiency from production
              to delivery.
            </p>
          </div>
        </div>
      </section>

      <div className="border border-info mt-4 d-flex justify-content-center align-content-center align-items-center rounded-pill">

        <p className="mt-3 w-75 ">
          Join our community today to start your blockchain journy
        </p>
      </div>
    </div>
  );
}

export default IndustriesWeServe;
