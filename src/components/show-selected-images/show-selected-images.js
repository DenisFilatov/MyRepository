import React, { Component } from 'react';
import { connect } from 'react-redux';
import './show-selected-images';
import Sidebar from '../sidebar/sidebar';
import ShowGalleryOnKey from '../showgallery-onkey/showgallery_onkey';

class ShowSelectedImages extends Component {
	render() {
		return (
			<div>
				<div className="sidebar">
					<Sidebar />
				</div>
				<div>
					<h1 className="text-center m-2">Show Selected Pictures</h1>
					<div className="offset-2">
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
