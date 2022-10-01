import axios from "axios";
import React, { useState, useEffect } from "react";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const uploadImage = async (filename, fileContent) => {
    const headers = {
      Authorization:
        "Bearer sl.BQDI_BHvKDzDLRTXwXO6IqiLagBYtF2EDkpcqa3xrMDJFSsJe4tCk_B5YbQ9uql-oEgDl3b9uDJSL7cm1iiMIUIgnQpmPRlSWJgFYeR_F3gaK1ELZpaU8n4w8xo8igpOm9oeWl7zMgA",

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

  const uploadHandler = (e) => {
    debugger;
    let octetStreamData = null;
    let fileName = null;
    const file = e.target.files[0];
    fileName = file.name;
    setSelectedFile(file);
    var reader = new FileReader();
    reader.onload = function (e) {
      debugger;
      // binary data
      octetStreamData = e.target.result;
      console.log(e.target.result);
      if (fileName && octetStreamData) {
        uploadImage(fileName, octetStreamData);
      }
    };
    reader.onerror = function (e) {
      debugger;
      // error occurred
      console.log("Error : " + e.type);
    };
    reader.readAsArrayBuffer(file);
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
