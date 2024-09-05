import React, { Component } from "react";
import Card from "./card";
import Spinner from "./spinner";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: true,
      totalResults: 0, // Track the total number of articles
    };
    this.nextClick = this.nextClick.bind(this);
    this.prevClick = this.prevClick.bind(this);
  }

  async getData() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=1d1fb96274d0475bb024095314562500&page=${this.state.page}&pageSize=10`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults // Update total number of articles
    });
  }

  componentDidMount() {
    this.getData();
  }

  prevClick = async () => {
    this.setState(
      (prevState) => ({
        page: prevState.page - 1,
      }),
      () => {
        this.getData();
      }
    );
  };

  nextClick = async () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
      }),
      () => {
        this.getData();
      }
    );
  };

  render() {
    let { styleState } = this.props;
    const { articles, page, loading, totalResults } = this.state;
    const articlesPerPage = 10; // Number of articles displayed per page
    const hasNextPage = articles.length === articlesPerPage && (page * articlesPerPage) < totalResults;
    const showPrevButton = page > 1; // Show Previous button only if page > 1

    return (
      <div className="container my-3" style={{ color: styleState.color }}>
        <h2 className="d-flex justify-content-center">Top Headlines</h2>
        {loading ? <Spinner /> : ""}
        <div className="row m-3">
          {articles.map((element) => {
            if (element.description && element.title && element.urlToImage) {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-2" key={element.url}>
                  <Card
                    title={element.title}
                    desc={element.description}
                    img={element.urlToImage}
                    url={element.url}
                    author={element.author?.length < 35 ? element.author : ""}
                    date={element.publishedAt}
                    styleState={styleState}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="d-flex justify-content-between">
          {showPrevButton && (
            <button
              type="button"
              className="btn btn-secondary mx-2"
              onClick={this.prevClick}
            >
              &larr; Previous
            </button>
          )}
          {hasNextPage && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.nextClick}
            >
              Next &rarr;
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Main;
