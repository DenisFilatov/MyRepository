import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAppData } from './action';
import { addAppData } from './action';
import { changeFlagAppData } from './action';
import './App.css';
import Img from './components/img/Img.js';
import { get } from './utils/fetcher.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      array: [],
      urlImg: '',
      textImg: '',
      findText: ''
    };

    // get('mockapi/app.json').then(data => {
    //   this.setState({ array: data });
    // });
  }

  componentDidMount() {
    this.props.setAppData([]);
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
            if (this.state.urlImg) {
              let array = [...this.state.array];
              array.push({
                url: this.state.urlImg,
                text: this.state.textImg,
                flag: true
              });
              this.setState({ array });

              this.props.addAppData({
                url: this.state.urlImg,
                text: this.state.textImg,
                flag: true
              });
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

            this.props.changeFlagAppData(this.state.findText);
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
          {console.log(this.props.array)}
        </div>
        <Img appState={this} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    array: state.appCompReducer.array
  };
};

const mapDispatchToProps = dispatch => ({
  setAppData: bindActionCreators(setAppData, dispatch),
  addAppData: bindActionCreators(addAppData, dispatch),
  changeFlagAppData: bindActionCreators(changeFlagAppData, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
