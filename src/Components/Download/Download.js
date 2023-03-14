import React from "react";
import "./style.css";
// import "./script.js";
const Download = () => {
  return (
    <div className="mt-10 text-center ">
      <body>
        <div class="wrapper">
          <header>
            <h1>Get app</h1>
            <h1>Online Downloader</h1>
            <p>Paste url of image, mp4 video, or pdf. </p>
          </header>
          <form action="#">
            <input type="url" placeholder="Paste file url" required />
            <button>Download File</button>
          </form>
        </div>
      </body>
    </div>
  );
};

export default Download;
