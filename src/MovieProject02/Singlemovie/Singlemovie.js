import React from "react";
import { useParams } from "react-router-dom";
function Singlemovie() {
  const singleMovie = useParams();

  return (
    <>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="single_main">
          <h1>Hello Movie</h1>
          <h1>Hello Movie</h1>
          <h1>Hello Movie</h1>
          <h1>Hello Movie</h1>
          <h1>Hello Movie</h1>
          <h1>Hello Movie</h1>
          <h1>Hello Movie</h1>
          <h1>Hello Movie</h1>
          <h1>Hello Movie</h1>
        </div>
      </div>
    </>
  );
}

export default Singlemovie;
