import React, { useRef } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Row } from "react-bootstrap";
import { useLazyQuery } from "@apollo/client";
import { LOGIN_USER } from "./Queries";
import { NavLink } from "react-router-dom";
import Login from "./img/login-img.jpg";
import img_icon from "./img/icon.png";
import Main from "./Main";
import { YupComp } from "./YupComp";

const SignIn = (props) => {
  const email = useRef();
  const password = useRef();

  const [login, { error, data, loading }] = useLazyQuery(LOGIN_USER, {
    onError: () => {
      console.log("error");
    },
    onCompleted: (data) => {
      if (data) {
        localStorage.setItem("Token", data.login.Token);
        props.history.push("./main");
      }
    },
    fetchPolicy: "no-cache",
  });
  console.log({ error, data });
  // if (loading) return "Loading...";

  const handleSubmit = (values) => {
    console.log(JSON.stringify(values, null, 2));
    const { email, password } = values;
    console.log({ email, password });
    login({
      variables: {
        email: email,
        password: password,
      },
    });
  };
  return (
    <>
      {data ? (
        <>
          <Main />
        </>
      ) : (
        <div className="container mb-2">
          <div className="row">
            <div className="col-md-6 col-10">
              <img
                src={Login}
                className="d-block"
                alt="login"
                height="600px"
                width="100%"
              />
            </div>
            <div className="col-md-4 col-10 mx-auto">
              {error && <div className="text-danger">{error.message}</div>}
              {loading ? (
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden"></span>
                </div>
              ) : (
                ""
              )}
              <div className="main_div">
                <img
                  src={img_icon}
                  className="img-icon"
                  alt="login"
                  height="150px"
                  width="150px"
                  readonly
                />

                <Formik
                  validationSchema={YupComp}
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  onSubmit={handleSubmit}
                >
                  <Form>
                    <div className="mb-1 err-messs">
                      <Field
                        name="email"
                        type="email"
                        className="form-control1"
                        ref={email}
                        placeholder="&#9993; Email Id"
                      />
                      <br />
                      <ErrorMessage name="email" />
                    </div>
                    <div className="mb-3 err-messs">
                      <Field
                        name="password"
                        placeholder="&#x1F512; Password"
                        type="password"
                        className="form-control1"
                        ref={password}
                      />
                      <br />
                      <ErrorMessage name="password" />
                    </div>
                    <button className="btn_button" type="submit">
                      Sign In
                    </button>
                  </Form>
                </Formik>

                <span>
                  <p className="signup_account">
                    Don't have an account?{" "}
                    <NavLink className="sgn-color" to="/signup">
                      Sign up
                    </NavLink>
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignIn;
