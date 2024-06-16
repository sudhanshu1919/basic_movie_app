import React from "react";
import { useParams } from "react-router-dom";
import "./Singlemovie.css";

function Singlemovie() {
  const singleMovie = useParams();
  let currentProduct = Number(singleMovie.id) - 1;
  console.log("current product...." + currentProduct);

  return (
    <>
      <div className="container-fluid" style={{ marginTop: "90px" }}>
        <div className="single_main">
          <div className="bg_color">
            <div className="main_cart">
              <div class="card" style={{ width: "15rem" }}>
                <img
                  src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bad-boys-ride-or-die-et00383487-1715936331.jpg"
                  class="card-img-top"
                  alt="..."
                />
              </div>

              <div className="movie_info mx-4">
                <h5>Bad Boys: Ride or Die</h5>
                <div className="d-flex">
                  <div className="languages">English</div>
                </div>
                <div className="info">
                  <p>2h 23m • Biography , Drama , Sports • UA • 14 Jun, 2024</p>
                  <button className="Movie_btn">Book Tickets</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="about_movie">
          <h5>About the movie</h5>
          <p>
            This is an unbelievable tale of a man who faced one adversary after
            another with an undying spirit. His unwavering zeal and
            never-give-up attitude led to the creation of history. This is the
            story of Chandu Champion!
          </p>
        </div>
      </div>
    </>
  );
}

export default Singlemovie;
