import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

  capitalizeText(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
    super(props);

    this.state={
      articles : [],
      loading : true,
      page :1,
      totalResults : 0
    }

    document.title= `${this.capitalizeText(this.props.category)} Section`
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
    this.UpdateNews();
  }



    fetchMoreData = async () => {
      setTimeout(async ()=>{
      this.setState({page : this.state.page + 1})
      const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page +1}`
      let unparsedData = await fetch(url);
      let data = await unparsedData.json();

      this.setState({
        articles: this.state.articles.concat(data.articles),
        totalResults : data.totalResults,
      })
    },500);

    };


  render() {


    return (
      <>
      <h1 className="text-center">Top Headlines</h1>
      
        {this.state.loading && <Spinner/>}

        <InfiniteScroll
        dataLength={this.state.articles.length}
        next={this.fetchMoreData}
        hasMore={this.state.articles.length!==this.state.totalResults}
        loader={<Spinner/>}

        
        >
      <div className="container">
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                      <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} />
                    </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
      
      </>
    );
  }
}

export default News;
