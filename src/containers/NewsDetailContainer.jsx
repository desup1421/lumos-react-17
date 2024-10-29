import React, { Component } from "react";
import { fetchGameDetail } from "../utils/api";
import NewsDetail from "../components/NewsDetail";

class NewsDetailContainer extends Component {
  state = {
    detail: null,
    loading: true
  }

  componentDidMount() {
    this.fetchGameData();
  }

  async fetchGameData() {
    try{
      const data = await fetchGameDetail(this.props.newsKey);
      console.log(data);
      this.setState({
        detail: data.results,
        loading: false
      })
    }
    catch(error){
      console.log(error);
      this.setState({
        loading: false
      })
    }
  }


  render() {
    return (
      <div>
        {
          this.state.loading ?
          <div>Loading...</div> :
          <NewsDetail detail={this.state.detail} handleBack={this.props.handleBack} />
        }
      </div>
    );
  }
}

export default NewsDetailContainer;
