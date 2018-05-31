import React, { Component } from 'react';
import './showgallery.css';
import 'bootstrap/dist/css/bootstrap.css';

class ShowGallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			urlCurrentImg: '',
			textCurrentImg: ''
		};
	}

	OutputAllElem() {
		if (this.props.array) {
			return this.props.array.map((item, i, array) => {
				return (
					<div key={i + ' OutputAllElem'} className="card m-1" style={{ width: 200 }}>
						<img
							style={{ height: 150 }}
							className="card-img-top"
							src={item.url}
							alt={'...'}
							onClick={() => {
								this.setState({
									urlCurrentImg: item.url,
									textCurrentImg: item.text
								});
							}}
						/>
						<div className="card-body">
							<p className="card-text text-center">{item.text}</p>
						</div>
					</div>
				);
			});
		} else return [];
	}

	ShowMainImg() {
		if (this.state.urlCurrentImg !== '') {
			return (
				<div className="card" style={{ width: 500 }}>
					<img className="card-img-top" style={{ height: 400 }} src={this.state.urlCurrentImg} alt={'...'} />
					<div className="card-body">
						<p className="card-text text-center">{this.state.textCurrentImg}</p>
					</div>
				</div>
			);
		} else return undefined;
	}

	render() {
		return (
			<div>
				<div className="d-flex flex-wrap justify-content-center m-1">{this.OutputAllElem()}</div>
				<div className="d-flex flex-wrap justify-content-center m-1">{this.ShowMainImg()}</div>
			</div>
		);
	}
}

export default ShowGallery;
