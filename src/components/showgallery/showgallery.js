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
    if (this.props.array) {
      return this.props.array.map((item, i, array) => {
        return (
          <div key={i + ' OutputAllElem'} className="block">
            <div className="parent">
              <img
                className="image1"
                src={item.url}
                alt={'...'}
                onClick={() => {
                  this.setState({
                    urlCurrentImg: item.url,
                    textCurrentImg: item.text
                  });
                }}
              />
            </div>
            <p>{item.text}</p>
          </div>
        );
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
        <div className="flex-container">{this.OutputAllElem()}</div>
        {this.ShowMainImg()}
      </div>
    );
  }
}

export default ShowGallery;
