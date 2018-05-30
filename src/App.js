import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAppData } from './action';
import './App.css';
import Sidebar from './components/sidebar/sidebar.js';
import ShowGallery from './components/showgallery/showgallery.js';
import { get } from './utils/fetcher.js';

class App extends Component {
	componentDidMount() {
		get('mockapi/app.json').then(data => {
			this.props.setAppData(data);
		});
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

	render() {
		return (
			<div className="parent">
				<div className="sidebar">
					<Sidebar />
				</div>
				<div>
					<h1>Image gallery</h1>
					<div className="imgs">
						<ShowGallery array={this.props.array} />
					</div>
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
	setAppData: bindActionCreators(setAppData, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
