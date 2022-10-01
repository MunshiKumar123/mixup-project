import React, { useState } from "react";

const FormValidiate = () => {
  const [data, setData] = useState({ fn: "", sn: "" });
  const [errorData, setErrorData] = useState(false);

  const handleAdd = (evt) => {
    setData({ ...data, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (e) => {
    console.log(data);

    if (data.fn === "") {
      console.log("please input the value");
      setErrorData(true);
    } else if (data.sn === "") {
      console.log("please input the value");
      setErrorData(true);
    } else {
      setErrorData(false);
    }

    e.preventDefault();
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="fn"
                value={data.fn}
                placeholder="First Name"
                onChange={handleAdd}
              />
              <br />
              <input
                type="text"
                name="sn"
                value={data.sn}
                placeholder="Second Name"
                onChange={handleAdd}
              />

              <hr />
              <input type="submit" value="update" />
            </form>
            <br />
            {errorData ? (
              <>
                <p className="text-danger">Please input fill blank</p>
              </>
            ) : (
              ""
            )}{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormValidiate;
