import React, { Component } from 'react';
import './Currentimg.css';

class Currentimg extends Component {
  render() {
    var img = this.props.array[this.props.imgIndex];
    return (
      <div className="block">
        <div className="parent">
          <img
            className="image1"
            src={img.url}
            alt={'...'}
            onClick={() => {
              this.props.imgState.setState({
                urlCurrentImg: img.url,
                textCurrentImg: img.text
              });
            }}
          />
          <img
            className="image2"
            alt={'...'}
            src="http://s1.iconbird.com/ico/0612/vistabasesoftwareicons/w256h2561339252558DeleteRed.png"
            onClick={e => {
              this.props.functionOnClick(this.props.imgIndex);
            }}
          />
        </div>
        <p>{img.text}</p>
      </div>
    );
  }
}

export default Currentimg;

// Currentimg.defaultProps = {
//   url: "http://www.ya.ru",
//   text: "yandex"
// }
