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

  render() {
    return (
      <div>
        <div>
          {this.props.array.map(item => (
            <Currentimg imgState={this} img={item} />
          ))}
        </div>
        <div>
          <img src={this.state.urlCurrentImg} />
          <p>{this.state.textCurrentImg}</p>
        </div>
      </div>
    );
  }

  // Img.defaultProps = {
  //   url: "http://www.ya.ru",
  //   text: "yandex"
  // }
}
