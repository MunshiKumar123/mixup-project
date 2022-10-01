import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

import Demo from "./context/Demo";
import Count from "./reducer/Count";

const Testing = () => {
  const [data, setData] = useState(null);

  const [show, setShow] = useState([]);
  const nm = useRef(null);
  const count = useRef(1);
  const add = () => {
    setData(data + 1);
    console.log(nm.current.value);

    setShow(nm.current);
  };

  useEffect(() => {
    count.current = count.current + 1;
  });
  console.log("before return");

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <h2>Reducer Component</h2>
            <Count />
          </div>
          <div className="col-4">
            <h2>Test Component</h2>
            {show.map(() => {})}
            {data}
            <hr />

            <input type="text" ref={nm} />
            <input type="button" value=" testing " onClick={add} />
            <p>{count.current}</p>
          </div>
          <div className="col-4">
            <Demo />
          </div>
        </div>
      </div>
    </>
  );
};
export default Testing;
