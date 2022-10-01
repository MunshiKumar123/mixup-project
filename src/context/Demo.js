import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Process from "./Process";
export const Mycontext = React.createContext();

const Demo = (props) => {
  const [data, setData] = useState({ roll: 1001, name: "manish" });
  const [more, setMore] = useState({ id: 25, role: "Student" });

  const [api, setApi] = useState([]);
  const [inp, setInp] = useState({ fn: "", sn: "", res: "" });
  const [moreData, setMoreData] = useState([]);

  const handleAdd = (evt) => {
    setInp({ ...inp, [evt.target.name]: evt.target.value });
  };

  const add = () => {
    console.log(inp);
    const rcds = [...moreData];
    rcds.push({ fn: inp.fn, sn: inp.sn });
    setMoreData(rcds);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => {
        // console.log(resp.data);
        setApi(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const records = {
    data: data,
    more: more,
    api: api,
    moreData: moreData,
  };

  return (
    <>
      <hr />
      {inp.res}
      <div className="container mt-2">
        <h1>Data Component</h1>
        <hr />
        Roll: {data.roll}
        <br />
        Name: {data.name}
        <br />
        ------------
        <br />
        Id: {more.id}
        <br />
        Roll:{more.role}
        <hr />
        {inp.res}
        <br />
        <input type="text" name="fn" value={inp.fn} onChange={handleAdd} />
        <br />
        <input type="text" name="sn" value={inp.sn} onChange={handleAdd} />
        <hr />
        <input type="button" value="CLICK HERE" onClick={add} />
        <br />
        <p>-----------------</p>
        <Mycontext.Provider value={records}>
          <Process />
        </Mycontext.Provider>
      </div>
    </>
  );
};
export default Demo;
