import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import "./Leayout.css";
import { useAuth0 } from "@auth0/auth0-react";
import ListIcon from "@mui/icons-material/List";

function Leayout() {
  const { handleSearchChange } = useContext(UserContext);

  return (
    <>
      <nav class="navbar navbar-expand-sm  main_nav_bar">
        <div class="container-fluid ">
          <a class="navbar-brand " href="#">
            <LiveTvIcon style={{ fontSize: "35px" }} />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span>
              <ListIcon />
            </span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item mt-3">
                <Link to="/">
                  <a class="nav-link" href="#">
                    Home
                  </a>
                </Link>
              </li>
              <li class="nav-item mt-3">
                <Link to="/Movies">
                  <a class="nav-link" href="#">
                    Movies
                  </a>
                </Link>
              </li>
            </ul>

            <form>
              <input
                className="form-control search_bar"
                type="text"
                onChange={(e) => {
                  handleSearchChange(e.target.value);
                }}
                placeholder="Search Something..!"
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Leayout;
