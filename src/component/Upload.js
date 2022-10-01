import axios from "axios";
import React, { useState, useEffect } from "react";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState("");
  const uploadImage = async (filename, fileContent) => {
    const headers = {
      Authorization:
        "Bearer sl.BQBqsLBO-Tff1ZMzS6IP5hCa5vJVHMw8qQVlKJypiBmHTpGvQN7FnbCENUGNunwXLIwt99BGu2gqTxSfGVFs4Pk3uPIjN3qVCFy2DSCDxHkjZrO0Q4Hh1Sc5DYT19hE7oquGSHltT0g",

      "Dropbox-API-Arg": JSON.stringify({
        autorename: false,
        mode: "add",
        mute: false,
        path: `/images/${filename}`,
        strict_conflict: false,
      }),
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Content-Type": "application/octet-stream",
    };
    const requestBody = fileContent;
    const response = await axios.post(
      "https://content.dropboxapi.com/2/files/upload",
      requestBody,
      {
        headers: headers,
      }
    );
    console.log(response.data);
    if (response.data) {
      console.log(response.data);
    }
  };

  const uploadHandler = async (e) => {
    debugger;
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setSelectedFile(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      console.log(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
        if (file) {
          uploadImage(file);
        }
      };
      fileReader.onerror = function (e) {
        debugger;
        // error occurred
        console.log("Error : " + e.type);
      };
      fileReader.base64(file);
    });
  };

  return (
    <>
      <h1>Upload component</h1>
      <input
        type="file"
        value={selectedFile}
        onChange={uploadHandler}
        //onChange={(e) => setSelectedFile(e.target.files[0])}
      />
    </>
  );
};
export default Upload;
