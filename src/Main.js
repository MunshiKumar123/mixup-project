import React from "react";
// import DataShow from "./DataShow";
// import RemoveUser from "./RemoveUser";
import UpdateProfile from "./UpdateProfile";

const Main = (props) => {
  const logout = () => {
    localStorage.removeItem("Token");
    props.history.push("/signIn");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <button className="btn btn-primary" onClick={logout}>
              Logout
            </button>
            <h2>Update Profile</h2>
          </div>
          <div className="col-6">
            {" "}
            <UpdateProfile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
