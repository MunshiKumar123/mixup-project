import React from "react";
import { useQuery } from "@apollo/client";
import { PROFILEDETAILS } from "./Queries";

const ProfileGet = (props) => {
  const { error, data, loading } = useQuery(PROFILEDETAILS, {
    onError: () => {
      console.log("error");
    },

    onCompleted: (data) => {},
    fetchPolicy: "no-cache",
  });

  console.log({ data, error });
  console.log(data);
  console.log(error);

  if (loading) return "Loading...";

  return (
    <>
      <div className="container mt-2">
        <table className="table table-striped">
          <tbody>
            <tr className="fs-5 table-dark">
              {/* <td>Profile Id</td>
              <td>User Id</td> */}
              <td>FirstName</td>
              <td>LastName</td>
              <td>Phone</td>
              <td>Address</td>
              <td>Dob</td>
              <td>Photo</td>
            </tr>
            {data.Profiles.map((launch) => (
              <tr key={launch.id}>
                {/* <td>{launch.User}</td>
                <td>{launch.id}</td> */}
                <td>{launch.FirstName}</td>
                <td>{launch.LastName}</td>
                <td>{launch.Phone}</td>
                <td>{launch.Address}</td>
                <td>{launch.Dob}</td>
                <td>
                  <img src={launch.Photo} height="100px" alt="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ProfileGet;
