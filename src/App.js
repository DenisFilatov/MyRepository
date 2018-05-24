import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAppData } from './action';
import { addAppData } from './action';
import { changeFlagAppData } from './action';
import { setFlagsTrueAppData } from './action';
import './App.css';
import Img from './components/img/Img.js';
import Sidebar from './components/sidebar/sidebar.js';
import { get } from './utils/fetcher.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      urlImg: '',
      textImg: '',
      findText: ''
    };
  }

  componentDidMount() {
    get('mockapi/app.json').then(data => {
      this.props.setAppData(data);
    });
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

  // FindImg() {
  //   return (
  //     <form>
  //       <input
  //         name="Text"
  //         onChange={e => {
  //           this.setState({ findText: e.target.value });
  //         }}
  //       />
  //       <button
  //         type="button"
  //         onClick={e => {
  //           this.props.changeFlagAppData(this.state.findText);
  //         }}
  //       >
  //         Find Img
  //       </button>
  //       <button
  //         type="button"
  //         onClick={e => {
  //           this.props.setFlagsTrueAppData();
  //         }}
  //       >
  //         Show All
  //       </button>
  //     </form>
  //   );
  // }

  DelElemOnArray(index) {
    console.log('index', index);
    if (this.props.array) {
      let arr = [...this.props.array];
      arr.splice(index, 1);
      this.props.setAppData(arr);
    }
  }

  render() {
    return (
      <div>
        <Sidebar />
        <div>
          {this.AddImg()}
          {console.log(this.props.array)}
        </div>
        <Img
          array={this.props.array}
          functionOnClick={index => this.DelElemOnArray(index)}
        />
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
  changeFlagAppData: bindActionCreators(changeFlagAppData, dispatch),
  setFlagsTrueAppData: bindActionCreators(setFlagsTrueAppData, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
