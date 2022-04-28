import React from "react";

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <iframe
          width="400"
          height="400"
          src={"https://www.youtube.com/embed/" + this.props.dataId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}

export default VideoItem;
