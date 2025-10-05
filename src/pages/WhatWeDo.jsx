import React from "react";
import { Data as WhatWeDoData } from "../ssot/whatWedo";
import WhatWeDoCard from "../shared/WhatWeDoCard";

function WhatWeDo() {
  return (
    <div>
      {/* text */}
      <div className="text-center d-flex justify-content-center row mt-3">
        <p>What We Do</p>

        <p className="fs-4 fw-medium " style={{ width: "80%" }}>
          We Specialize in harenssing blockchain technology to create secure and
          transparent soloutions for diverse industries , empowering business
          with effciency and trust
        </p>
      </div>

      {/* box */}
      <div className="d-flex justify-content-center">
        <div className="row w-75">
          {WhatWeDoData.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-lg-4 mb-4 gap-4">
              <WhatWeDoCard
                title={item.title}
                description={item.description}
                photo={item.photo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
