import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor(){
    super();

    this.state={
      articles : [],
      loading : false,
    }
  }
  
  async componentDidMount(){
    let url= "https://newsapi.org/v2/everything?q=tesla&from=2023-03-17&sortBy=publishedAt&apiKey=2b21f840ae484ddbaf065ee469d944f7"
    let unparsedData = await fetch(url);
    let data = await unparsedData.json();

    this.setState({articles: data.articles})
  }
  render() {
    return (
      <div className="container my-3">
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                      <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} />
                    </div>
          })}
        </div>
      </div>
    );
  }
}

export default News;
