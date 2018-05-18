import React, { Component } from 'react';
import './App.css';
import Img from './components/img/Img.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      array: [],
      urlImg: '',
      textImg: '',
      findText: ''
    };
  }

  AddImg() {
    return (
      <form>
        <input
          name="Url"
          onChange={e => {
            this.setState({ urlImg: e.target.value });
          }}
        />
        <input
          name="Text"
          onChange={e => {
            this.setState({ textImg: e.target.value });
          }}
        />
        <button
          type="button"
          onClick={e => {
            if (this.state.urlImg != '') {
              let array = [...this.state.array];
              array.push({
                url: this.state.urlImg,
                text: this.state.textImg,
                flag: true
              });
              this.setState({ array });
            }
          }}
        >
          Add Img
        </button>
      </form>
    );
  }

  FindImg() {
    return (
      <form>
        <input
          name="Text"
          onChange={e => {
            this.setState({ findText: e.target.value });
          }}
        />
        <button
          type="button"
          onClick={e => {
            let array = [...this.state.array];
            for (let i = 0; i < this.state.array.length; i++) {
              if (array[i].text !== this.state.findText) {
                array[i].flag = false;
              } else {
                array[i].flag = true;
              }
            }
            this.setState({ array });
          }}
        >
          Find Img
        </button>
        <button
          type="button"
          onClick={e => {
            let array = [...this.state.array];
            for (let i = 0; i < this.state.array.length; i++) {
              if (array[i].flag === false) {
                array[i].flag = true;
              }
              this.setState({ array });
            }
          }}
        >
          Show All
        </button>
      </form>
    );
  }

  render() {
    return (
      <div>
        <div>
          {this.AddImg()}
          {this.FindImg()}
        </div>
        <Img appState={this} />
      </div>
    );
  }
}

export default App;
