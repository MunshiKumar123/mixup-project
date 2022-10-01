import React from "react";
// import web from "./img/a5.png";
import school1 from "./img/school-1.jpg";
import school2 from "./img/school-2.jpg";
import school3 from "./img/school-3.jpg";

// import Common from "./Common";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={school2}
                    className="d-block "
                    alt="school"
                    height="600px"
                    width="100%"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={school2}
                    className="d-block "
                    alt="school"
                    height="600px"
                    width="100%"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={school2}
                    className="d-block"
                    alt="school"
                    height="600px"
                    width="100%"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Common
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      /> */}
    </>
  );
};
export default Home;
