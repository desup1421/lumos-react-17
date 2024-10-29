import React, { Component } from "react";
import NewsListContainer from "./containers/NewsListContainer";
import NewsDetailContainer from "./containers/NewsDetailContainer";

export default class App extends Component {
  state = {
    selectedNewsKey: null,
  };

  handleSelectNews = (key) => {
    console.log(key);
    this.setState({
      selectedNewsKey: key,
    });
  }

  handleBack = () => {
    this.setState({
      selectedNewsKey: null,
    });
  }

  render() {
    return (
      <div className="App">
        {
          this.state.selectedNewsKey ? 
          <NewsDetailContainer newsKey={this.state.selectedNewsKey} handleBack={this.handleBack} /> :
          <NewsListContainer onSelect = {this.handleSelectNews} />
        }
      </div>
    );
  }
}
