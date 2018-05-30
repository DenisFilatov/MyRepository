import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

class Sidebar extends Component {
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
					}}>
					<span />
					<span />
					<span />
				</div>
				<ul>
					<li>
						<Link to="/home">Home</Link>
					</li>
					<li>
						<Link to="/edit">Edit Gallery</Link>
					</li>
					<li>
						<Link to="/select">Select Images</Link>
					</li>
					<li>
						<Link to="/show"> Show Selected Pictures</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default Sidebar;
