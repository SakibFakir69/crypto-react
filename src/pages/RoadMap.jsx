import React from "react";
import { roadmapData } from "../ssot/RoadMapData";

function RoadMap() {
  return (
    <div className="container py-5">
      <div className="row g-4" style={{ padding: "3em" }}>
        {roadmapData.map((item, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-lg-3 d-flex flex-column"
          >
            {/* text */}
            <div
              className="bg-black text-white text-center p-3 rounded-top"
              style={{ height: "110px" }}
            >
              <h4 className="mb-1">{item.quarter}</h4>
              <p className="mb-0">{item.title}</p>
            </div>

            {/* Tasks */}

            {item.tasks.map((task, tIndex) => (
              <div
                className="  rounded-bottom rounded-4   shadow-sm  "
                style={{
                  backgroundColor: "white",
                  marginTop: "-10px",
                  padding: tIndex === 1 ? "5px" : "8px", // first task has 5px padding
                }}
              >
                <p key={tIndex} className="m ">
                  <span style={{ color: "#7234E4", marginRight: "6px" }}>
                    ★
                  </span>
                  {task}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoadMap;
