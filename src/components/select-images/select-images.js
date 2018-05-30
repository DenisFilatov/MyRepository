import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './select-images.css';
import Sidebar from '../sidebar/sidebar';
import SelectImg from './../selectimg/selectimg';
import { setAppData } from '../../action';

class SelectImages extends Component {
	SetFlagOnArray(index, flag) {
		if (this.props.array) {
			let arr = [...this.props.array];
			arr[index].flag = flag;
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
					<h1>Select Images</h1>
					<div className="imgs">
						<SelectImg
							array={this.props.array}
							FunctionSetFlagOnArray={(index, flag) => this.SetFlagOnArray(index, flag)}
						/>
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

export default connect(mapStateToProps, mapDispatchToProps)(SelectImages);
