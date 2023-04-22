import React from "react";
import "../Stylesheets/bodyColor.css";
import NoImage from "./ImageNF.jpg";
const NewsItem = (props) => {
  const notitle = "No title avaiable";
  const nodesc = "Description not avaiable";

  let { title, description, imageUrl, url, author, date } = props;

  <style>
    @import
    url('https://fonts.googleapis.com/css2?family=Chivo+Mono:ital,wght@1,200&display=swap');
  </style>;
  return (
    <>
      <div className="card">
        <img
          src={imageUrl ? imageUrl : NoImage}
          className="card-img-top"
          alt="NewsImage"
        />
        <div className="card-body">
          <h5
            className="card-title"
            style={{ fontFamily: "Chivo Mono", fontSize: "1.5vw" }}
          >
            {title ? title.slice(0, 60) : notitle}.....
          </h5>
          <p
            className="card-text"
            style={{ fontFamily: "Chivo Mono", fontSize: "1.1vw" }}
          >
            {description ? description.slice(0, 80) : nodesc}....
          </p>
          <p className="card-text">
            <small className="text-danger ">
              By {!author ? "Unkown" : author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <div className="text-center bkg">
            <a
              href={url}
              target="_blank"
              className="btn btn-warning "
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
