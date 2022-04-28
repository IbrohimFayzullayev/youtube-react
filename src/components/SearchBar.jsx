import React from "react";
import "../Styles.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keyWord: "" };
  }

  onChangeInput = (e) => {
    this.setState({ keyWord: e.target.value });
  };
  onFromSubmit = (e) => {
    e.preventDefault();
    this.props.request(this.state.keyWord);
  };
  render() {
    return (
      <div className="header">
        <div className="header__logo">
          <i className="youtube_icon youtube icon"></i>
          <h1 className="logo__name">YouTube</h1>
        </div>
        <div className="search__bar">
          <form
            onSubmit={this.onFromSubmit}
            className=" search__form ui category search"
          >
            <div className=" ui icon input">
              <input
                onChange={this.onChangeInput}
                className="prompt"
                type="text"
                placeholder="Search videos..."
              />
              <i className="search icon"></i>
            </div>
            <div className="results"></div>
          </form>
        </div>
        <div className="header__icons">
          <i className="plus square outline icon"></i>
          <i className="buromobelexperte icon"></i>
          <i className="bell outline icon"></i>
          {/* <i className="bell slash outline icon"></i> */}
          <i className="user circle outline icon"></i>
        </div>
      </div>
    );
  }
}

export default SearchBar;
