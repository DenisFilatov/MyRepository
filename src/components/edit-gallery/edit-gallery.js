import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './edit-gallery.css';
import Sidebar from '../sidebar/sidebar';
import Img from '../img/Img';
import { setAppData } from '../../action';
import { addAppData } from '../../action';

class EditGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  DelElemOnArray(index) {
    if (this.props.array) {
      let arr = [...this.props.array];
      arr.splice(index, 1);
      this.props.setAppData(arr);
    }
  }

  render() {
    return (
      <div className="parent">
        <div className="sidebar">
          <Sidebar />
        </div>
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
  addAppData: bindActionCreators(addAppData, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditGallery);
