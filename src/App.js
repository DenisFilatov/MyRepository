import React, { Component } from 'react';
import './App.css';
import Img from './components/img/Img.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      array: [],
      findText: ''
    };
  }

  AddImg() {
    return (
      <div>
        <form
          onSubmit={e => {
            let array = [...this.state.array];
            array.push({
              url: e.target.URL.value,
              text: e.target.Text.value,
              flag: true
            });
            this.setState({ array });
            e.preventDefault();
          }}
        >
          <input name="URL" />
          <input name="Text" />
          <input type="submit" value="Add Img" />
        </form>
      </div>
    );
  }

  FindImg() {
    return (
      <div>
        <form>
          <input name="Text" onChange={e=>{
            this.setState({ findText: e.target.value });
          }}/>
          <button
            type="button"
            onClick={e => {
              let array = [...this.state.array];
              for (let i = 0; i < this.state.array.length; i++) {
                if (array[i].text !== this.state.findText) {
                  array[i].flag = false;
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
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>
          {this.AddImg()}
          {this.FindImg()}
        </div>
        <Img array={this.state.array} />
      </div>
    );
  }
}

export default App;
