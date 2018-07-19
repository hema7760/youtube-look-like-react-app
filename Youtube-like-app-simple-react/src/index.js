import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Component/search_bar';
import VideoList from './Component/video_list';
import VideoDetails from './Component/video_details';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyD2FlL08jIGVHsjF2C8hrlaX82A_DLuvQc';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            termSearched : '',
            videos : [],
            selectedVideo: null
        }
    }
    SearchedValue = (term) => {
      
        YTSearch({ key: API_KEY, term: term }, (data)=> {
            this.setState({
                videos : data,
                selectedVideo : data[0]
            });
        })
    }
    render() {
        const SearchedValue = _.debounce((term) => {this.SearchedValue(term)},300);

        return (
            <div>
                <SearchBar onSearchTermChanged={SearchedValue}/>
                <VideoDetails videoItem={this.state.selectedVideo}/>
                <VideoList  onVideoSelect={video => this.setState({selectedVideo : video})} videos={this.state.videos} />
            </div>
        )
    }

}

ReactDOM.render(<App />, document.querySelector('.container'));