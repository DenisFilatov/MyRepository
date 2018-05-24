import React, { Component } from 'react';
import './sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  ToggleSidebar() {
    if (document.getElementById('sidebar') != null) {
      document.getElementById('sidebar').classList.toggle('active');
      console.log('Click on button');
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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
