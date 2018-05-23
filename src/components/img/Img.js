import React, { Component } from 'react';
import './Img.css';
import Currentimg from './../currentimg/Currentimg.js';

class Img extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlCurrentImg: '',
      textCurrentImg: ''
    };
  }

  CheckAllElem() {
    let arr = [];
    if (typeof this.props.array != 'undefined') {
      for (let i = 0; i < this.props.array.length; i++) {
        if (this.props.array[i].flag) {
          arr.push(
            <Currentimg
              imgState={this}
              imgIndex={i}
              array={this.props.array}
              functionOnClick={this.props.functionOnClick}
            />
          );
        }
      }
    }
    return arr;
  }

  ShowMainImg() {
    if (this.state.urlCurrentImg != '') {
      return (
        <div className="mainblock">
          <img src={this.state.urlCurrentImg} />
          <p>{this.state.textCurrentImg}</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="flex-container">{this.CheckAllElem()}</div>
        {this.ShowMainImg()}
      </div>
    );
  }
}

export default Img;

// Img.defaultProps = {
//   url: "http://www.ya.ru",
//   text: "yandex"
// }
