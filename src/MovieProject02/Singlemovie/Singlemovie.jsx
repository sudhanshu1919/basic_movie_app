import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "./Singlemovie.css";
import { UserContext } from "../App";

function Singlemovie() {
  const { data } = useContext(UserContext);
  const { id } = useParams();

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>Movie data not available</div>;
  }

  const currentProduct = Number(id) - 1;

  if (currentProduct < 0 || currentProduct >= data.length) {
    return <div>Movie not found</div>;
  }

  const movie = data[currentProduct];

  if (!movie) {
    return <div>Movie data is not available</div>;
  }

  return (
    <>
      <div className="container-fluid" style={{ marginTop: "90px" }}>
        <div className="single_main">
          <video className="bg_video" autoPlay muted loop>
            <source
              src="https://videos.pexels.com/video-files/7988642/7988642-uhd_2732_1440_25fps.mp4"
              autoPlay
              muted
              loop
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="bg_color">
            <div className="main_cart">
              <div className="card" style={{ width: "15rem" }}>
                <img
                  src={movie.image}
                  className="card-img-top"
                  alt={movie.Name}
                />
              </div>

              <div className="movie_info mx-4">
                <h5>{movie.Name}</h5>
                <div className="d-flex">
                  <div className="languages">{movie.Language}</div>
                </div>
                <div className="info">
                  <p>
                    {movie.time} | {movie.type}
                  </p>

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
          <p>{movie.About}</p>
        </div>
      </div>
    </>
  );
}

export default Singlemovie;
