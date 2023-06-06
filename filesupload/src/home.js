import React from "react";
import "./home.css";
import { useState} from "react";
import {
  ref,
  uploadBytes
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

function App() {
  const [fileUpload, setFileUpload] = useState(null);

  const uploadFile = () => {
    if (fileUpload == null) return;
    const imageRef = ref(storage, `FilesUploaded/ ${fileUpload.name + v4()}`);
    uploadBytes(imageRef, fileUpload).then(() => {
        alert("Files Uploaded Successfully")
    });
  };

  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
            setFileUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Files</button>
      <button onClick={uploadFile}> Report</button>
    </div>
  );
}

const Home = () => {
  return (
    <>
      <div className="nav">
        <img src="logo.jpg" />
        <h1 className="homeHead">
          <span>File Stack</span>
        </h1>
      </div>

    <div className="mainbox">
      <div className="mainPage">
        <div className="card">
          <h1>Drag files to upload</h1>
       
        <App/>
        </div>
        
        <img src="img.jpg" alt="" />
      </div>
    </div>
      
      <div className="footer">
        
        </div>
    </>
  );
};

export default Home;