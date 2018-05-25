import React, { Component } from 'react';
import './showgallery_onkey.css';

class ShowGalleryOnKey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexLeft: 0
    };
  }

  ShowImgs() {
    let arr = [],
      output = [];
    if (this.props.array) {
      this.props.array.forEach((item, i, array) => {
        if (item.flag) arr.push(item);
      });
    }
    if (arr.length === 1) {
      output.push(
        <div key={1 + 'ShowImgs'} className="flex-container">
          <div className="img-main">
            <img src={arr[0].url} alt={'...'} />
          </div>
        </div>
      );
    }
    if (arr.length === 2) {
      output.push(
        <div key={2 + 'ShowImgs'} className="flex-container">
          <div className="img-main">
            <img src={arr[0].url} alt={'...'} />
          </div>
          <div className="img-main">
            <img src={arr[1].url} alt={'...'} />
          </div>
        </div>
      );
    }
    if (arr.length >= 3) {
      output.push(
        <div key={3 + 'ShowImgs'} className="flex-container">
          <div className="img-left">
            <img
              src="http://karabas.kz/wp-content/uploads/2016/04/strelka2.png"
              alt={'...'}
              onClick={() => {
                if (this.state.indexLeft - 1 >= 0) {
                  let temp = this.state.indexLeft - 1;
                  this.setState({ indexLeft: temp });
                }
              }}
            />
          </div>
          <div className="img-side">
            <img src={arr[this.state.indexLeft].url} alt={'...'} />
          </div>
          <div className="img-main">
            <img src={arr[this.state.indexLeft + 1].url} alt={'...'} />
          </div>
          <div className="img-side">
            <img src={arr[this.state.indexLeft + 2].url} alt={'...'} />
          </div>
          <div className="img-right">
            <img
              src="https://avatanplus.com/files/resources/mid/588d1d04853db159e73959c2.png"
              alt={'...'}
              onClick={() => {
                if (this.state.indexLeft + 4 <= arr.length) {
                  let temp = this.state.indexLeft + 1;
                  this.setState({ indexLeft: temp });
                }
              }}
            />
          </div>
        </div>
      );
    }
    return output;
  }

  render() {
    return <div>{this.ShowImgs()}</div>;
  }
}

export default ShowGalleryOnKey;
