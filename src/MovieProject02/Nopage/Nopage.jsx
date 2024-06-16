import React from "react";
import { Link } from "react-router-dom";
function Nopage() {
  return (
    <div
      className="text-center container"
      style={{
        marginTop: "120px",
        fontFamily: "initial",
      }}
    >
      <h1>Error - 400</h1>
      <Link to="/">
        <button className="mt-5 mb-5 text-center btn bg-danger">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}

export default Nopage;
