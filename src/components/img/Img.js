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
    if (this.props.array) {
      return this.props.array.map((item, i, array) => {
        if (item.flag) {
          return (
            <Currentimg
              key={i + 'CheckAllElem'}
              imgState={this}
              imgIndex={i}
              array={this.props.array}
              functionOnClick={this.props.functionOnClick}
            />
          );
        } else return undefined;
      });
    } else return [];
  }

  ShowMainImg() {
    if (this.state.urlCurrentImg !== '') {
      return (
        <div className="mainblock">
          <img src={this.state.urlCurrentImg} alt={'...'} />
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
