import React, { useRef } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useLazyQuery } from "@apollo/client";
import { REMOVE } from "./Queries";

const RemoveUser = (props) => {
  const del = useRef();

  const [removeUser, { error, data, loading }] = useLazyQuery(REMOVE, {
    onError: () => {
      console.log("error");
    },

    onCompleted: (data) => {},
    fetchPolicy: "no-cache",
  });
  console.log({ error, data });
  if (loading) return "Loading...";
  if (data) return "succsess";
  const handleSubmit = (values) => {
    console.log(values);
    const { del } = values;

    removeUser({
      variables: {
        removeUserId: del,
      },
    });
    if (values) return "suces";
  };

  return (
    <>
      {data && (
        <div className="box">
          <div className="logo">&#x2713;</div>
          <h3>Thank You!</h3>
          <p>You details has been successfully submitted. Thanks!</p>
        </div>
      )}
      <Formik
        initialValues={{
          id: "",
        }}
        onSubmit={handleSubmit}
      >
        <div className="container contact_div pt-5 pb-5">
          <div className="row">
            <div className="col-9 mx-auto">
              <Form>
                <div className="mb-3">
                  <label>User Id:</label>
                  <Field
                    name="del"
                    type="text"
                    className="form-control"
                    ref={del}
                  />
                  <ErrorMessage name="name" />
                </div>
                <button className="btn btn-primary" type="submit">
                  Remove User
                </button>
              </Form>
            </div>
          </div>
        </div>
      </Formik>
    </>
  );
};
export default RemoveUser;
