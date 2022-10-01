import React, { useState } from "react";
function Base64image() {
  const [baseImage, setBaseImage] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

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

  return (
    <div className="container">
      <h2>Base Component</h2>
      <input
        type="file"
        onChange={(e) => {
          uploadImage(e);
        }}
      />
      <br></br>

      <p>
        <img src={baseImage} alt="" height="200px" />
      </p>
    </div>
  );
}

export default Base64image;
