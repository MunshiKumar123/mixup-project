import React from "react";
import web from "./img/a5.png";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-item-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="my-3">
                    {props.name}{" "}
                    <strong className="brand-name">
                      <a href="https://www.softmindinfotech.com/">
                        https://www.softmindinfotech.com/{" "}
                      </a>
                    </strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented devoloper making website{" "}
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {" "}
                      {props.btname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="home img"
                    width="350"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;
