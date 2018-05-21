import React, { Component } from 'react';
import './Currentimg.css';

export default class Currentimg extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var img = this.props.appState.state.array[this.props.imgIndex];
    return (
      <div className="block">
        <div className="parent">
          <img
            className="image1"
            src={img.url}
            onClick={() => {
              this.props.imgState.setState({
                urlCurrentImg: img.url,
                textCurrentImg: img.text
              });
            }}
          />
          <img
            className="image2"
            src="http://s1.iconbird.com/ico/0612/vistabasesoftwareicons/w256h2561339252558DeleteRed.png"
            onClick={e => {
              let array = [...this.props.appState.state.array];
              array.splice(this.props.imgIndex, 1);
              this.props.appState.setState({ array: array });
            }}
          />
        </div>
        <p>{img.text}</p>
      </div>
    );
  }
}

// Currentimg.defaultProps = {
//   url: "http://www.ya.ru",
//   text: "yandex"
// }
