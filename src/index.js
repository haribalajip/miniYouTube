import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from "./components/video_detail";

const API_KEY = 'AIzaSyCVUKUnRh_f646uAI5Lzczb5Xctzd5SM88';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch("microsoft");
  }
  videoSearch (term){
    YTSearch({key:API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render(){
    const videoSearch = _.debounce(term => this.videoSearch(term), 300);
    return (
      
      <div className = "App row">
        <SearchBar onInputChange = {videoSearch}></SearchBar>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos = {this.state.videos}
          onVideoSelect = {(selectedVideo)=>{
            {this.setState({selectedVideo:selectedVideo})}
          }} ></VideoList>
      </div>
    );
  }
}

ReactDOM.render(<App></App>,document.querySelector('.container'));
