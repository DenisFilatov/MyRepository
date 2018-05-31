import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Sidebar from './components/sidebar/sidebar.js';
import ShowGallery from './components/showgallery/showgallery.js';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
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

	render() {
		return (
			<div>
				<div className="sidebar">
					<Sidebar />
				</div>
				<h1 className="text-center m-2">Image gallery</h1>
				<ShowGallery array={this.props.array} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		array: state.appCompReducer.array
	};
};

export default connect(mapStateToProps, null)(App);
