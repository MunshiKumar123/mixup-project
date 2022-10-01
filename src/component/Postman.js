import axios from "axios";
import React, { useState, useEffect } from "react";

const Postman = () => {
  const [image, setImage] = useState("");
  const getImageLink = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer sl.BQBqsLBO-Tff1ZMzS6IP5hCa5vJVHMw8qQVlKJypiBmHTpGvQN7FnbCENUGNunwXLIwt99BGu2gqTxSfGVFs4Pk3uPIjN3qVCFy2DSCDxHkjZrO0Q4Hh1Sc5DYT19hE7oquGSHltT0g",
    };

    const requestBody = { path: "/images/a10.jpg" };

    const response = await axios.post(
      "https://api.dropboxapi.com/2/files/get_temporary_link",
      requestBody,
      {
        headers: headers,
      }
    );
    console.log(response.data);
    if (response.data) {
      setImage(response.data?.link);
    }
  };
  useEffect(() => {
    getImageLink();
  }, []);
  return (
    <>
      <h2>showing Image with dropbox temporary link</h2>
      {image && (
        <img src={image} alt="Girl in a jacket" className="img-fluid"></img>
      )}
    </>
  );
};
export default Postman;
