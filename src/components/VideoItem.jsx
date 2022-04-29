import React from "react";

class VideoItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="iframe__box">
        <div className="fixed__box">
          <iframe
            width="400"
            height="400"
            src={"https://www.youtube.com/embed/" + this.props.dataId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="video__desc">
            <h3 className="video__title">{this.props.dataRepo.title}</h3>
            <div className="video__reports">
              <p className="video__date">
                {this.props.dataRepo.repo.viewCount} views
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
