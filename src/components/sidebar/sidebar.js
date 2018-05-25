import React, { Component } from 'react';
import './sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  ToggleSidebar() {
    if (document.getElementById('sidebar') != null) {
      document.getElementById('sidebar').classList.toggle('active');
    }
  }

  render() {
    return (
      <div id="sidebar">
        <div
          className="toggle-btn"
          onClick={e => {
            this.ToggleSidebar();
          }}
        >
          <span />
          <span />
          <span />
        </div>
        <ul>
          <li
            onClick={e => {
              this.props.appState.setState({ numberButtonClick: 1 });
            }}
          >
            Home
          </li>
          <li
            onClick={e => {
              this.props.appState.setState({ numberButtonClick: 2 });
            }}
          >
            Edit Gallery
          </li>
          <li
            onClick={e => {
              this.props.appState.setState({ numberButtonClick: 3 });
            }}
          >
            Select Images
          </li>
          <li
            onClick={e => {
              this.props.appState.setState({ numberButtonClick: 4 });
            }}
          >
            Show Selected Pictures
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
