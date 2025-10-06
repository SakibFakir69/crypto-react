import React from 'react';

function NumberBox() {
  const numbers = ["15+", "1K+", "98%", "110+"];

  return (
    <div className="container mt-4" style={{padding:"3em"}}>

      <div className="row text-center">
        {numbers.map((num, index) => (
          <div key={index} className="col-6 col-lg-3 mb-3">
            <p className="fs-1 fw-bold text-color-blue mb-0">{num}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NumberBox;
