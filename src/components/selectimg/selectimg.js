import React, { Component } from 'react';
import './selectimg.css';

class SelectImg extends Component {
  constructor(props) {
    super(props);
  }

  SetImg(index) {
    if (this.props.array[index].flag) {
      return (
        <img
          className="image3"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Check-green.svg/512px-Check-green.svg.png"
          onClick={() => {
            this.props.FunctionSetFlagOnArray(index, false);
          }}
        />
      );
    }
  }

  OutputAllElem() {
    let arr = [];
    if (this.props.array) {
      for (let i = 0; i < this.props.array.length; i++) {
        arr.push(
          <div className="block">
            <div className="parent">
              <img className="image1" src={this.props.array[i].url} />
              <img
                className="image2"
                src="https://www.stihi.ru/pics/2011/02/12/1500.jpg"
                onClick={() => {
                  this.props.FunctionSetFlagOnArray(i, true);
                }}
              />
              {this.SetImg(i)}
            </div>
            <p>{this.props.array[i].text}</p>
          </div>
        );
      }
    }
    return arr;
  }
  render() {
    return <div className="flex-container">{this.OutputAllElem()}</div>;
  }
}

export default SelectImg;
