import React, { Component } from 'react';
import './selectimg.css';

class SelectImg extends Component {
	SetImg(index) {
		const { array, FunctionSetFlagOnArray } = this.props;
		if (array[index].flag) {
			return (
				<img
					className="img-option"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Check-green.svg/512px-Check-green.svg.png"
					alt={'...'}
					onClick={() => {
						FunctionSetFlagOnArray(index, false);
					}}
				/>
			);
		} else return undefined;
	}

	OutputAllElem() {
		const { array, FunctionSetFlagOnArray } = this.props;
		if (array) {
			return array.map((item, i, array) => {
				return (
					<div className="card m-1" style={{ width: 200 }} key={i + 'OutputAllElem'}>
						<div>
							<img className="card-img-top" style={{ height: 150 }} alt={'...'} src={item.url} />
							<img
								className="img-square"
								src="https://www.stihi.ru/pics/2011/02/12/1500.jpg"
								alt={'...'}
								onClick={() => {
									FunctionSetFlagOnArray(i, true);
								}}
							/>
							{this.SetImg(i)}
						</div>
						<div className="card-body">
							<p className="card-text text-center">{item.text}</p>
						</div>
					</div>
				);
			});
		} else return [];
	}

	render() {
		return <div className="d-flex flex-wrap justify-content-center m-1">{this.OutputAllElem()}</div>;
	}
}

export default SelectImg;
