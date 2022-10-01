import React from "react";
import Show from "./Show";
import New from "./New";
const Process = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <Show />
          </div>
          <div className="col-5">
            <New />
          </div>
        </div>
      </div>
    </>
  );
};
export default Process;
