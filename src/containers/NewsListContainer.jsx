import React, { Component } from "react";
import NewsList from "../components/NewsList";
import { fetchGame } from "../utils/api";

class NewsListContainer extends Component {
  state = {
    news: [],
		loading: true
  };

	componentDidMount() {
		this.fetchNewsData();
	}

	async fetchNewsData() {
		try{
			const data = await fetchGame();
			this.setState({
				news: data,
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
		const { news, loading } = this.state;

    return (
      <div>
        <h1>News List</h1>
				{loading ? <h2>Loading...</h2> : <NewsList news={news} onSelect={this.props.onSelect} />}
      </div>
    );
  }
}

export default NewsListContainer;
