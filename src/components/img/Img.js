import React, { Component } from 'react';
import './Img.css';

class Img extends Component {
	CheckAndOutputElem() {
		const { array, functionOnClick } = this.props;
		if (array) {
			return array.map((item, i, array) => {
				const { url, text } = array[i];
				return (
					<div className="card m-1" style={{ width: 200 }} key={i + 'CheckAndOutputElem'}>
						<div>
							<img className="card-img-top" style={{ height: 150 }} src={url} alt={'...'} />
							<img
								className="img-main"
								alt={'...'}
								src="http://s1.iconbird.com/ico/0612/vistabasesoftwareicons/w256h2561339252558DeleteRed.png"
								onClick={e => {
									functionOnClick(i);
								}}
							/>
						</div>
						<div className="card-body">
							<p className="card-text text-center">{text}</p>
						</div>
					</div>
				);
			});
		} else return [];
	}

	render() {
		return <div className="d-flex flex-wrap justify-content-center m-1">{this.CheckAndOutputElem()}</div>;
	}
}

export default Img;

// Img.defaultProps = {
//   url: "http://www.ya.ru",
//   text: "yandex"
// }
