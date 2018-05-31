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
			<form className="input-group mb-3">
				<input
					name="Url"
					className="form-control"
					onChange={e => {
						this.setState({ urlImg: e.target.value });
					}}
				/>
				<input
					name="Text"
					className="form-control"
					onChange={e => {
						this.setState({ textImg: e.target.value });
					}}
				/>
				<div className="input-group-append">
					<button
						type="button"
						className="btn btn-outline-secondary"
						onClick={e => {
							if (this.state.urlImg) {
								this.props.addAppData({
									url: this.state.urlImg,
									text: this.state.textImg,
									flag: true
								});
							}
						}}>
						Add Img
					</button>
				</div>
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
			<div>
				<div className="sidebar">
					<Sidebar />
				</div>
				<h1 className="text-center m-2">Edit gallery</h1>
				<div className="col-4 offset-4">{this.AddImg()}</div>
				<div>
					<Img array={this.props.array} functionOnClick={index => this.DelElemOnArray(index)} />
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
