import React, { Component } from 'react';
import './selectimg.css';

class SelectImg extends Component {
	SetImg(index) {
		if (this.props.array[index].flag) {
			return (
				<img
					className="image3"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Check-green.svg/512px-Check-green.svg.png"
					alt={'...'}
					onClick={() => {
						this.props.FunctionSetFlagOnArray(index, false);
					}}
				/>
			);
		} else return undefined;
	}

	OutputAllElem() {
		if (this.props.array) {
			return this.props.array.map((item, i, array) => {
				return (
					<div key={i + 'OutputAllElem'} className="block">
						<div className="parent">
							<img className="image1" alt={'...'} src={item.url} />
							<img
								className="image2"
								src="https://www.stihi.ru/pics/2011/02/12/1500.jpg"
								alt={'...'}
								onClick={() => {
									this.props.FunctionSetFlagOnArray(i, true);
								}}
							/>
							{this.SetImg(i)}
						</div>
						<p>{item.text}</p>
					</div>
				);
			});
		} else return [];
	}

	render() {
		return <div className="flex-container">{this.OutputAllElem()}</div>;
	}
}

export default SelectImg;
