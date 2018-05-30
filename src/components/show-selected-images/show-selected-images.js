import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './show-selected-images';
import Sidebar from '../sidebar/sidebar';
import ShowGalleryOnKey from '../showgallery-onkey/showgallery_onkey';

class ShowSelectedImages extends Component {
	render() {
		return (
			<div className="parent">
				<div className="sidebar">
					<Sidebar />
				</div>
				<div>
					<h1>Show Selected Pictures</h1>
					<div className="imgs-onkey">
						<ShowGalleryOnKey array={this.props.array} />
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

export default connect(mapStateToProps, null)(ShowSelectedImages);
