import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

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
  
  async UpdateNews(){
    const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`
    this.setState({loading : true})
    let unparsedData = await fetch(url);
    let data = await unparsedData.json();

    this.setState({
      articles: data.articles,
      totalResults : data.totalResults,
      loading: false
    })
  }
  

  async componentDidMount(){
    // let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`
    // this.setState({loading : true})
    // let unparsedData = await fetch(url);
    // let data = await unparsedData.json();

    // this.setState({
    //   articles: data.articles,
    //   totalResults : data.totalResults,
    //   loading: false
    // })
    this.UpdateNews();
  }

  handlePrevClick= async ()=>
    {
    //   let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page -1}`
    //   this.setState({loading : true})
    //   let unparsedData = await fetch(url);
    //   let data = await unparsedData.json();

    // this.setState({
    //   articles: data.articles,
    //   page : this.state.page -1,
    //   loading: false
    // })

    await this.setState({
      page: this.state.page-1,
    })
    this.UpdateNews();
    }


   handleNextClick = async ()=>{
    //   let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page +1}`
    //   this.setState({loading : true})
    //   let unparsedData = await fetch(url);
    //   let data = await unparsedData.json();

    // this.setState({
    //   articles: data.articles,
    //   page : this.state.page +1,
    //   loading :false
    // })

    await this.setState({
      page : this.state.page +1,
    })
    this.UpdateNews();
    }




  render() {


    return (
      <>
      <h1 className="text-center">Top Headlines</h1>
      {this.state.loading && <Spinner/>}
      <div className="container my-3">
        {!this.state.loading && <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                      <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} />
                    </div>
          })}
        </div>}
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevClick} className="btn btn-danger">Previous</button>
          <button type="button" disabled={this.state.page>=Math.ceil(this.state.totalResults/this.props.pageSize)}onClick={this.handleNextClick} className="btn btn-danger">Next</button>
        </div>
      </div>
      </>
    );
  }
}

export default News;
