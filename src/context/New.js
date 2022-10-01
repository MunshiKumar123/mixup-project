import React, { useState } from "react";
import { Mycontext } from "./Demo";
import { useContext } from "react";
const New = () => {
  const [uniq, setUniq] = useState(2);
  const records = useContext(Mycontext);
  const { data, more, api, moreData } = records;
  const addMore = () => {
    setUniq(uniq + 2);
  };

  const del = () => {
    setUniq(uniq - 1);
  };

  return (
    <>
      <div className="container">
        <h3>New Component</h3>
        {moreData.map((row, i) => {
          return (
            <ul key={i}>
              <li>{row.fn}</li>
              <li>{row.sn}</li>
            </ul>
          );
        })}
        <hr />
        Roll: {data.roll}
        <br />
        Name: {data.name}
        <br />
        id: {more.id}
        <br />
        role: {more.role}
        <br />
        {api.slice(0, uniq).map((row, i) => {
          return <div key={i}>{row.id}</div>;
        })}
        <hr />
        <input type="button" value=" + " onClick={addMore} />{" "}
        <input type="button" value=" - " onClick={del} />
      </div>
    </>
  );
};
export default New;
