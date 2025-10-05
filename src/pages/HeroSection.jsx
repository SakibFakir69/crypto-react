import React from 'react';

function HeroSection() {
  return (
    <div className="position-relative" style={{ height: '97vh', minHeight: '500px', overflow: 'hidden' }}>
      {/*  Image */}
      <img
        src="/pexels-alphatradezone-5833773.jpg"
        alt="Hero"
        className="img-fluid w-100 h-100 d-h-75"
        style={{ objectFit: 'cover', objectPosition: 'top'}}
      />

      {/* First Box  */}
      <div
        className="position-absolute text-dark rounded p-3 "
        style={{
          top: '30%',
          left: '5%',
          width: '90%',
          maxWidth: '470px',
        }}
      >
        <h1 className="fw-bold fs-1 fs-md-4  fs-5 fw-md-semibold ">Building Trust, One Block At a Time</h1>
        <p className="text-primary">Empowering Transparency, Security, and Innovation</p>

        <div className="d-flex flex-column flex-md-row align-items-start gap-2 gap-md-4 mt-2">
          <button className="btn btn-primary">Contact us</button>
          <p className="d-flex align-items-center gap-1 mb-0">
            <img width="30" height="30" src="https://img.icons8.com/flat-round/64/play--v1.png" alt="play" />
            Watch our journey
          </p>
        </div>
      </div>

      {/* Second Box */}
      <div
        className="position-absolute text-white bg-dark rounded p-3"
        id='hero-box-1'
        style={{
          bottom: '5%',
          right: '5%',
          width: '90%',
          maxWidth: '400px',
        }}
      >
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa corrupti excepturi animi recusandae laudantium, fugiat, perferendis repellat reiciendis ad dicta molestiae est nihil? Asperiores repellendus velit soluta amet reiciendis quisquam deleniti cupiditate, explicabo eaque nihil.
        </span>
      </div>
    </div>
  );
}

export default HeroSection;
