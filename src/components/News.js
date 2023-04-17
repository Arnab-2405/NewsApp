import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor(){
    super();

    this.state={
      articles : [],
      loading : false,
      page :1,
      totalResults : 0
    }
  }
  
  async componentDidMount(){
    let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=2b21f840ae484ddbaf065ee469d944f7&pageSize=6`
    let unparsedData = await fetch(url);
    let data = await unparsedData.json();

    this.setState({
      articles: data.articles,
      totalResults : data.totalResults,
    })
  }
  render() {


    const handlePrevClick= async ()=>
    {
      let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=2b21f840ae484ddbaf065ee469d944f7&pageSize=6&pageSize=6&page=${this.state.page -1}`
      let unparsedData = await fetch(url);
      let data = await unparsedData.json();

    this.setState({
      articles: data.articles,
      page : this.state.page -1,
    })
    }

    const handleNextClick =async ()=>{
      let url= `https://newsapi.org/v2/top-headlines?country=in&apiKey=2b21f840ae484ddbaf065ee469d944f7&pageSize=6&page=${this.state.page +1}`
      let unparsedData = await fetch(url);
      let data = await unparsedData.json();

    this.setState({
      articles: data.articles,
      page : this.state.page +1,
    })
    }

    return (
      <div className="container my-3">
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                      <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} />
                    </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1} onClick={handlePrevClick} className="btn btn-danger">Previous</button>
          <button type="button" disabled={this.state.page>=this.state.totalResults/6}onClick={handleNextClick} className="btn btn-danger">Next</button>
        </div>
      </div>
    );
  }
}

export default News;
