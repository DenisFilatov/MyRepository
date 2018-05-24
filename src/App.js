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
import ShowGallery from './components/showgallery/showgallery.js';
import SelectImg from './components/selectimg/selectimg.js';
import { get } from './utils/fetcher.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      urlImg: '',
      textImg: '',
      findText: '',
      numberButtonClick: 1
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
    if (this.props.array) {
      let arr = [...this.props.array];
      arr.splice(index, 1);
      this.props.setAppData(arr);
    }
  }

  SetFlagOnArray(index, flag) {
    if (this.props.array) {
      let arr = [...this.props.array];
      arr[index].flag = flag;
      this.props.setAppData(arr);
    }
  }

  Selection(index) {
    if (index == 1) {
      console.log('Clisk on Home');
      return (
        <div>
          <h1>Image gallery</h1>
          <div className="imgs">
            <ShowGallery array={this.props.array} />
          </div>
        </div>
      );
    }
    if (index == 2) {
      console.log('Clisk on Edit Gallery');
      return (
        <div>
          <h1>Edit gallery</h1>
          <div className="imgs">
            <Img
              array={this.props.array}
              functionOnClick={index => this.DelElemOnArray(index)}
            />
          </div>
          <div className="add-menu">{this.AddImg()}</div>
        </div>
      );
    }
    if (index == 3) {
      console.log('Clisk on Select Images');
      return (
        <div>
          <h1>Select Images</h1>
          <div className="imgs">
            <SelectImg
              array={this.props.array}
              FunctionSetFlagOnArray={(index, flag) =>
                this.SetFlagOnArray(index, flag)
              }
            />
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="parent">
        <div className="sidebar">
          <Sidebar appState={this} />
        </div>
        {this.Selection(this.state.numberButtonClick)}
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
