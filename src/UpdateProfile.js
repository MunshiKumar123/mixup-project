import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useLazyQuery } from "@apollo/client";
import { UPDATEPROFILE } from "./Queries";

import { useRef, useState } from "react";

const UpdateProfile = (props) => {
  const id = useRef();
  const fname = useRef();
  const lname = useRef();
  const ph = useRef();
  const address = useRef();
  const dob = useRef();

  const [baseImage, setBaseImage] = useState("");
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      console.log(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
    });
  };

  const uploadImage = async (e) => {
    // debugger;
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const [updateProfiles, { error, data, loading }] = useLazyQuery(
    UPDATEPROFILE,
    {
      onError: () => {
        console.log("error");
      },

      onCompleted: (data) => {},
      fetchPolicy: "no-cache",
    }
  );
  console.log({ error, data });
  if (loading) return "Loading...";
  //   if (data) return "update succsess";

  const handleSubmit = (values) => {
    // debugger;
    console.log(JSON.stringify(values, null, 2));
    const { fname, lname, ph, address, dob, id } = values;
    console.log({ fname, lname, ph, address, dob, id });

    console.log(baseImage);

    updateProfiles({
      variables: {
        updateProfilesId: id,
        firstName: fname,
        lastName: lname,
        phone: ph,
        address: address,
        dob: dob,
        photo: baseImage,
      },
    });
  };
  return (
    <>
      {/* <div className="container contact_div pb-1">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            {data && (
              <div className="box">
                <div className="logo">&#x2713;</div>
                <h3>Thank You!</h3>
                <p>
                  Your profile details has been successfully update. Thanks!
                </p>
              </div>
            )}
          </div>
        </div>
      </div> */}

      <Formik
        initialValues={{
          id: "",
          fname: "",
          lname: "",
          phonenumber: "",
          address: "",
          dob: "",
          photo: "",
        }}
        onSubmit={handleSubmit}
      >
        <div className="container contact_div">
          <div className="row">
            <div className="col mx-auto">
              <Form>
                <div className="mb-1">
                  <label htmlFor="id">Id:</label>
                  <Field
                    name="id"
                    id="id"
                    type="text"
                    className="form-control"
                    ref={id}
                  />
                  <ErrorMessage name="name" />
                </div>
                <div className="mb-1">
                  <label htmlFor="fname">FirstName:</label>
                  <Field
                    name="fname"
                    id="fname"
                    type="text"
                    className="form-control"
                    ref={fname}
                  />
                  <ErrorMessage name="name" />
                </div>

                <div className="mb-3">
                  <label htmlFor="lname">LastName:</label>
                  <Field
                    name="lname"
                    id="lname"
                    type="text"
                    ref={lname}
                    className="form-control"
                  />
                  <ErrorMessage name="lname" />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone">Phone:</label>
                  <Field
                    name="ph"
                    id="phone"
                    type="text"
                    ref={ph}
                    className="form-control"
                  />
                  <ErrorMessage name="phone" />
                </div>
                <div className="mb-3">
                  <label htmlFor="about">Address:</label>
                  <br />
                  <Field
                    name="address"
                    ref={address}
                    id="address"
                    as="textarea"
                  />
                  <ErrorMessage name="address" />
                  <br />
                </div>

                <div className="mb-3">
                  <label htmlFor="dob">Dob:</label>
                  <Field
                    name="dob"
                    ref={dob}
                    type="date"
                    className="form-control"
                  />
                  <ErrorMessage name="dob" />
                </div>

                <div className="mb-3">
                  <label htmlFor="photo">Photo:</label>
                  <Field
                    name="photo"
                    type="file"
                    values={baseImage}
                    onChange={(e) => {
                      uploadImage(e);
                    }}
                    className="form-control"
                  />
                  <ErrorMessage name="photo" />
                </div>

                <button className="btn btn-primary" type="submit">
                  Update Profile
                </button>
              </Form>
            </div>
          </div>
        </div>
      </Formik>

      <p>
        <img src={baseImage} alt="" height="200px" />
      </p>
    </>
  );
};
export default UpdateProfile;
