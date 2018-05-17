import React, { Component } from 'react';
import './Img.css';
import Currentimg from './../currentimg/Currentimg.js';

export default class Img extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlCurrentImg: '',
      textCurrentImg: ''
    };
  }

  CheckAllElem() {
    let arr = [];
    for (let i = 0; i < this.props.array.length; i++) {
      if (this.props.array[i].flag) {
        arr.push(<Currentimg imgState={this} img={this.props.array[i]} />);
      }
    }
    return arr;
  }

  ShowMainImg() {
    if (this.state.urlCurrentImg == '' || this.state.textCurrentImg == '') {
      return '';
    } else {
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

  // Img.defaultProps = {
  //   url: "http://www.ya.ru",
  //   text: "yandex"
  // }
}
