import React, { useState } from "react";
import DropboxChooser from "react-dropbox-chooser";

const APP_KEY = "61okm54i6uhxiel";

const DropBox = () => {
  const [url, setUrl] = useState("");
  function handleSuccess(files) {
    debugger;
    setUrl(files[0].thumbnailLink);
    console.log(url);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 style={{ textAlign: "center" }}>
            Upload Or Choose Files to DropBox
          </h1>
          <br />
          <br />
          <DropboxChooser
            appKey={APP_KEY}
            success={handleSuccess}
            cancel={() => console.log("closed")}
            multiselect={true}
          >
            <button>Upload or Choose Files</button>
            <div className="dropbox"></div>
            <br />
            <br />
            <img src={url} width="200" height="200" alt="" />
          </DropboxChooser>
        </div>
      </div>
    </div>
  );
};

export default DropBox;
