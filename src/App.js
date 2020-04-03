import React, { Component } from "react";
import NavBar from "./components/navbar";
import Article from "./components/article";
import FeedBack from "./components/feedback";
import axios from "axios";
import ErrorMessage from "./components/errormessage";
import FeedbackReply from "./components/feedbackreply";

class App extends Component {
  state = {
    articlesArray: [1, 2, 3, 4, 5],
    articles: [],
    articleNum: 1,
    loading: true,
    error: false,
    input: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    let shuffleArray = this.shuffle(this.state.articlesArray);
    shuffleArray.forEach(el => {
      let url = `https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-${el}.json`;
      axios
        .get(url)
        .then(res => {
          let article = res.data;
          let articles = [...this.state.articles, article];
          el < 5
            ? this.setState({ articles })
            : this.setState({ articles, loading: false, shuffleArray });
        })
        .catch(error => {
          this.setState({ error });
        });
    });
  };

  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  handleReset = () => {
    let articleNum = 1;
    this.setState({ articleNum });
  };

  handleNextArticle = () => {
    let articleNum = this.state.articleNum;
    articleNum++;
    this.setState({ articleNum });
  };

  handleBackArticle = () => {
    let articleNum = this.state.articleNum;
    articleNum--;
    this.setState({ articleNum });
  };

  handleSubmit = event => {
    event.preventDefault();
    let articleNum = this.state.articleNum + 1;
    this.setState({ articleNum });
  };

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  render() {
    const { articleNum, articles, loading, error, input } = this.state;
    return (
      <React.Fragment>
        <NavBar onReset={this.handleReset} articleNum={articleNum} />
        {error && <ErrorMessage error={error} />}
        {loading === true ? (
          <div className="container d-flex justify-content-center align-items-center mt-5">
            <div className="loader"></div>
          </div>
        ) : (
          <Article
            onNextArticle={this.handleNextArticle}
            onLastArticle={this.handleBackArticle}
            articles={articles}
            articleNum={articleNum}
          />
        )}
        <FeedBack
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          handleInput={this.handleInput}
          articleNum={articleNum}
        />
        {articleNum === 7 && (
          <FeedbackReply onReset={this.handleReset} message={input} />
        )}
      </React.Fragment>
    );
  }
}

export default App;
