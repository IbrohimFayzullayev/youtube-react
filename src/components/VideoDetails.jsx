import React from "react";
import "../Styles.css";
// import axios from "axios";
class VideoDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { arr: "", obj: {}, videoId: "", title: "" };
  }

  getVievsInfo = async (video) => {
    let url = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${video}&key=AIzaSyDXZdLg3XezWfbwftMKP7r2mJyzOf2AO1Q`;
    const info = await fetch(url);
    const jsonOl = await info.json();
    return jsonOl.items[0].statistics;
  };

  getChannelInfo = async (id) => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&fields=items(id%2Csnippet%2Fthumbnails)&key=AIzaSyDXZdLg3XezWfbwftMKP7r2mJyzOf2AO1Q`
    );
    const getJson = await data.json();
    return getJson.items[0].snippet.thumbnails.default.url;
  };
  async componentDidMount() {
    let a = await this.getChannelInfo(this.props.info.snippet.channelId);
    let b = await this.getVievsInfo(this.props.info.id.videoId);
    let c = await this.props.info.snippet.title;
    this.setState({ arr: a, obj: b, title: c });
  }
  hisobla = (num) => {
    let str = String(num);
    if (str.length < 4) {
      return num;
    } else {
      return (num / 1000).toFixed(2) + " Thousand";
    }
  };
  getIdClick = () => {
    this.props.vidId(this.props.info.id.videoId, {
      repo: this.state.obj,
      title: this.state.title,
    });
    this.props.klass("videos__small--box");
  };
  render() {
    return (
      <div className="video_box" key={this.props.info.id.videoId}>
        <img
          className="video_box--img"
          src={this.props.info.snippet.thumbnails.medium.url}
          alt={"images"}
        />
        <div className="video__info">
          <p onClick={this.getIdClick} className="heading_secondary">
            {this.props.info.snippet.title} {this.state.videoId}
          </p>
          <p className="video__report">
            {this.hisobla(this.state.obj.viewCount)} views
          </p>
          <div className="channel__name">
            <img className="channel__img" src={this.state.arr} alt="img" />
            <h3 className="channel__heading">
              {this.props.info.snippet.channelTitle}
            </h3>
          </div>
          <p className="video__description">
            {this.props.info.snippet.description}
          </p>
        </div>
      </div>
    );
  }
}

export default VideoDetails;
