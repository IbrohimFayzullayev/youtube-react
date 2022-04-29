import axios from "axios";
import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import MenuBar from "./MenuBar";
import VideoItem from "./VideoItem";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputKey: "", videoList: [], videoId: "", videReport: {} };
  }
  getData = async (keyWord) => {
    const key = "AIzaSyDXZdLg3XezWfbwftMKP7r2mJyzOf2AO1Q";
    const data = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          type: "video",
          maxResults: 10,
          key: key,
          q: keyWord,
        },
      }
    );
    // console.log(data.data);
    this.setState({ videoList: data });
  };
  getVideoID = (id, report) => {
    this.setState({ videoId: id, videReport: report });
    console.log(this.state.videoId);
    console.log(this.state.videReport);
  };

  showVideo = () => {
    if (this.state.videoId) {
      return (
        <VideoItem
          dataId={this.state.videoId}
          dataRepo={this.state.videReport}
        />
      );
    }
  };
  render() {
    return (
      <div className="contents">
        <MenuBar />
        <div className="primary">
          <SearchBar request={this.getData}  />
          <div className="primary__second">
            {this.showVideo()}
            <VideoList data={this.state.videoList} idVideo={this.getVideoID} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
// axios da request jonatayotganda 3 narsa ketadi
// 1.startline 2.headers 3.body
// startlineda nimani olib ketishi ketadi
// headerda secret key ketadi ozizdan qoshimcha narsa qosish mumkin e.x cookie
// body da esa katta malumotlarni saqlab turadi
