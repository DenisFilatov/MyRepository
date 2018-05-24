import React, { Component } from 'react';
import './showgallery.css';

class ShowGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlCurrentImg: '',
      textCurrentImg: ''
    };
  }

  OutputAllElem() {
    let arr = [];
    if (typeof this.props.array != 'undefined') {
      for (let i = 0; i < this.props.array.length; i++) {
        arr.push(
          <div className="block">
            <div className="parent">
              <img
                className="image1"
                src={this.props.array[i].url}
                onClick={() => {
                  this.setState({
                    urlCurrentImg: this.props.array[i].url,
                    textCurrentImg: this.props.array[i].text
                  });
                }}
              />
            </div>
            <p>{this.props.array[i].text}</p>
          </div>
        );
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
        <div className="flex-container">{this.OutputAllElem()}</div>
        {this.ShowMainImg()}
      </div>
    );
  }
}

export default ShowGallery;
