import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  //ar = {array: [{id: 0, url: "http://www.kansascity.com/latest-news/article151999.ece/ALTERNATES/FREE_640/AT&T%20logo"}, {id: 1, url: "https://cdn.lifehacker.ru/wp-content/uploads/2011/05/500px-Apple_Computer_Logo_rainbow.svg.png"}, {id: 2, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHLNBnmTfq-uBjauTn_17tJIWlKaZ-dJFkeB14S1imMNYgSurIpA"}]};

  constructor() {
      super();
      this.state = {
        urlImg:"http://www.kansascity.com/latest-news/article151999.ece/ALTERNATES/FREE_640/AT&T%20logo",
        array:
        [
          {id: 0, url: "http://www.kansascity.com/latest-news/article151999.ece/ALTERNATES/FREE_640/AT&T%20logo"},
          {id: 1, url: "https://cdn.lifehacker.ru/wp-content/uploads/2011/05/500px-Apple_Computer_Logo_rainbow.svg.png"},
          {id: 2, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHLNBnmTfq-uBjauTn_17tJIWlKaZ-dJFkeB14S1imMNYgSurIpA"}
        ]
      };
  }

  OutputImg(obj)
  {
    return(
        <img className="ImgStyle" width="100px" height="100px" src={obj.url} onClick={()=>{
          console.log("Img №" + obj.id);
          this.setState({urlImg:obj.url})
        }}/>
    )
  }

  ShowImg(url)
  {
    return <img width="200px" height="200px" src={url}/>;
  }

  OutputAllImg(){
    return this.state.array.map((item) => this.OutputImg(item));
  }

  render() {
    return (
      <div>
        <div>{this.OutputAllImg()}</div>
        <div>{this.ShowImg(this.state.urlImg)}</div>
      </div>
    );
  }
}


export default App;
