import React, { Component } from 'react';
import './Img.css';

export default class Img extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        {this.props.array.map((item) => {
         return(
           <div>
            <div><img className = "ImgStyle" src = {item.url}/></div>
            <div>{item.text}</div>
           </div>
         )})}
      </div>
    );
  }

  // Img.defaultProps = {
  //   url: "http://www.ya.ru",
  //   text: "yandex"
  // }
}
