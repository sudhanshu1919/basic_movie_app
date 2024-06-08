import React, { useState } from "react";
import { UserContext } from "../App";
import { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./Movies.css";
function Movies() {
  const { data } = useContext(UserContext);

  const [newdata, setData] = useState(data);

  const setLanguage = (val) => {
    let FilterDta = data.filter((value) => value.Language === val);

    setData(FilterDta);
  };

  const All = () => {
    setData(data);
  };
  // For category
  const [alldata, setAlldata] = useState(data);

  const setCategory = (val) => {
    let FilterData = data.filter((value) => value.Category === val);
    setAlldata(FilterData);
  };
  return (
    <>
      <div
        className="container"
        style={{
          border: "1px solid rgb(220, 220, 220)",
          textAlign: "center",
          marginTop: "150px",
          marginBottom: "150px",
        }}
      >
        <div className=" main_movie_con">
          <div className="Buttons">
            <div>
              <Dropdown>
                <Dropdown.Toggle
                  style={{ boxShadow: "0px 10px 19px -3px rgba(0, 0, 0, 0.1)" }}
                  className="btn  btn-sm mx-2"
                  variant="secondary"
                  id="dropdown-basic"
                >
                  Seclect
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ marginTop: "10px" }}>
                  <Dropdown.Item
                    href="#"
                    onClick={() => {
                      setCategory("comedy");
                    }}
                  >
                    comedy
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#"
                    onClick={() => {
                      setCategory("Horror");
                    }}
                  >
                    Horror
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#"
                    onClick={() => {
                      setCategory("Action");
                    }}
                  >
                    Action
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div>
              <button
                style={{ boxShadow: "0px 10px 19px -3px rgba(0, 0, 0, 0.1)" }}
                className="btn bg-info btn-sm mx-2"
                onClick={() => {
                  All();
                }}
              >
                All Movies
              </button>
            </div>
            <div>
              <button
                style={{ boxShadow: "0px 10px 19px -3px rgba(0, 0, 0, 0.1)" }}
                className="btn bg-info btn-sm mx-2"
                onClick={() => {
                  setLanguage("Webseries");
                }}
              >
                Webseries
              </button>
            </div>
            <div>
              <button
                style={{ boxShadow: "0px 10px 19px -3px rgba(0, 0, 0, 0.1)" }}
                className="btn bg-danger btn-sm mx-2"
                onClick={() => {
                  setLanguage("Hindi");
                }}
              >
                Hindi
              </button>
            </div>
            <div>
              <button
                style={{ boxShadow: "0px 10px 19px -3px rgba(0, 0, 0, 0.1)" }}
                className="btn bg-danger btn-sm mx-2"
                onClick={() => {
                  setLanguage("English");
                }}
              >
                English
              </button>
            </div>
            <div>
              <button
                style={{ boxShadow: "0px 10px 19px -3px rgba(0, 0, 0, 0.1)" }}
                className="btn bg-danger btn-sm mx-2"
                onClick={() => {
                  setLanguage("Marathi");
                }}
              >
                Marathi
              </button>
            </div>
            <div>
              <button
                style={{ boxShadow: "0px 10px 19px -3px rgba(0, 0, 0, 0.1)" }}
                className="btn bg-danger btn-sm mx-2"
                onClick={() => {
                  setLanguage("Telagu");
                }}
              >
                Telagu
              </button>
            </div>
            <div>
              <button
                style={{ boxShadow: "0px 10px 19px -3px rgba(0, 0, 0, 0.1)" }}
                className="btn bg-danger btn-sm mx-2"
                onClick={() => {
                  setLanguage("Kannad");
                }}
              >
                Kannad
              </button>
            </div>
            <div>
              <button
                style={{ boxShadow: "0px 10px 19px -3px rgba(0, 0, 0, 0.1)" }}
                className="btn bg-danger btn-sm mx-2"
                onClick={() => {
                  setLanguage("Tamil");
                }}
              >
                Tamil
              </button>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="row mt-2 sm ">
            <div className="row mt-2 sm ">
              {newdata.map((value, index) => {
                return (
                  <>
                    <div
                      class="card mb-5 AllMovies main_movie_Cart"
                      key={index}
                      style={{ width: "200px", margin: "10px" }}
                    >
                      <img
                        class="card-img-top"
                        style={{ padding: "5px" }}
                        src={value.image}
                        alt="Card image cap"
                      ></img>
                      <div class="card-body">
                        <h5 class="card-title">
                          <b>{value.Name}</b>
                        </h5>
                        <p
                          style={{ lineHeight: "0.3", color: "royalblue" }}
                          className="text-justify"
                        >
                          <b>{value.Language}</b>
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movies;
