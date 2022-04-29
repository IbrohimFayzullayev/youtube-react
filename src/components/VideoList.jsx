import React from "react";
import VideoDetails from "./VideoDetails";
import "../Styles.css";

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videoData: [], classNomi: "" };
  }

  getClassName = (name) => {
    this.setState({ classNomi: name });
  };
  renderList = () => {
    return this.props.data.data?.items.map((val) => {
      return (
        <VideoDetails
          vidId={this.props.idVideo}
          info={val}
          klass={this.getClassName}
        />
      );
    });
  };
  render() {
    return (
      <div className={"videos " + this.state.classNomi}>
        {this.renderList()}
      </div>
    );
  }
}

export default VideoList;
