import _ from 'lodash';
import React, { Component } from 'react';

import SearchBar from '../components/search_bar';
import VideoList from '../components/video_list';
import VideoDetail from '../components/video_detail'; // components -> relative path required

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDhYRofoD5MNjKFjCHHoA7-dptQ9732Rmo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }; // this is component level state

    this.videoSearch('tales weaver bgm');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    // debounce take passed function only fire function once in 300ms;

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
// Passing props (vidoes) to video list

// Is component need to be contained state? -> class else -> function

// state is super confusing.
