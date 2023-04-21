import React from "react";

const NewsItem =(props) =>{
  

  

    let { title, description, imageUrl,url,author, date } = props;
    return (
      <>
        <div className="card" >
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-danger ">By {!author?"Unkown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={url} target="_blank" className="btn btn-primary" rel="noreferrer">Read More</a>
          </div>
        </div>
      </>
    );
  }


export default NewsItem;
