import React, { Component } from "react";

class Article extends Component {
  showBackButton() {
    const { articleNum, onLastArticle } = this.props;
    if (articleNum > 1) {
      return (
        <button onClick={onLastArticle} className="btn btn-info btn-md">
          <i className="mr-1 fa fa-arrow-left" aria-hidden="true"></i> Back
        </button>
      );
    }
  }

  handleRender = article => {
    const randomNum = Math.floor(Math.random() * 5000);
    const imgUrl = `https://picsum.photos/640/420/?random=sig${randomNum}`;
    const { type, model } = article;
    if (type === "heading") {
      return (
        <div>
          <h2 key={Math.floor(Math.random() * 5000)}>{model.text}</h2>
          <hr />
        </div>
      );
    }
    if (type === "paragraph") {
      return <p key={Math.floor(Math.random() * 5000)}>{model.text}</p>;
    }
    if (type === "image") {
      return (
        <img
          key={Math.floor(Math.random() * 5000)}
          className="img-fluid mt-3 mb-3"
          src={imgUrl}
          alt={model.altText}
        />
      );
    }
    if (type === "list") {
      const listItems = model.items.map(item => (
        <li key={Math.floor(Math.random() * 5000)}>{item}</li>
      ));
      return <div>{listItems}</div>;
    }
  };

  render() {
    const { articles, articleNum, onNextArticle } = this.props;
    if (articleNum < 6) {
      return (
        <div className="container mt-3">
          <div className="row justify-content-between align-items-center">
            <div className="col mt-3">
              <h1>{articles[articleNum - 1].title}</h1>
            </div>
          </div>
          <div>
            {articles[articleNum - 1].body.map(type => (
              <div key={Math.floor(Math.random() * 5000)}>
                {this.handleRender(type)}
              </div>
            ))}
          </div>
          <div className="buttons mt-2 mb-2 justify-content-between d-flex">
            <div>{this.showBackButton()}</div>
            <div>
              <button
                onClick={onNextArticle}
                className="btn btn-info btn-md align-self-end"
              >
                Next{" "}
                <i className="ml-1 fa fa-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      );
    }
    return "";
  }
}

export default Article;
