import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "./Singlemovie.css";
import { UserContext } from "../App";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Singlemovie() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

      <div className="container mt-4">
        <hr />
        <div className="main_img">
          <h5>Cast</h5>
          <Slider {...settings}>
            <div className="single_img">
              <img
                src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/abhay-verma-2019096-1716289737.jpg"
                width="150pxs"
                alt="Abhay Verma"
              />
              <p className="text-center">Abhay Verma</p>
            </div>
            <div className="single_img">
              <img
                src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/sharvari-wagh-2007921-1707291905.jpg"
                width="150pxs"
                alt="Sharvari Wagh"
              />

              <p className="text-center">Sharvari Wagh</p>
            </div>
            <div className="single_img">
              <img
                src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/mona-singh-21056-24-03-2017-12-41-22.jpg"
                width="150pxs"
                alt="Mona Singh"
              />
              <p className="text-center">Sathyaraj</p>
            </div>
            <div className="single_img">
              <img
                src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/sathyaraj-3835-23-08-2018-11-06-38.jpg"
                width="150pxs"
                alt="Sathyaraj"
              />
              <p className="text-center">Ajay Purkar</p>
            </div>
            <div className="single_img">
              <img
                src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ajay-purkar-1043184-12-11-2020-02-56-23.jpg"
                width="150pxs"
                alt="Ajay Purkar"
              />
              <p className="text-center">Sharvari Wagh</p>
            </div>
            <div className="single_img">
              <img
                src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/dinesh-vijan-1070169-02-05-2017-10-33-25.jpg"
                width="150pxs"
                alt="Ajay Purkar"
              />
              <p className="text-center">Dinesh Vijan</p>
            </div>
            <div className="single_img">
              <img
                src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/justin-varghese-1083142-02-09-2017-11-32-25.jpg"
                width="150pxs"
                alt="Ajay Purkar"
              />
              <p className="text-center">SJustin Varghese</p>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Singlemovie;
