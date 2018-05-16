import React, { Component } from 'react';
import './App.css';
import Img  from './components/img/Img.js'

class App extends Component {
  constructor() {
      super();
      this.state = {
        array:[]
      };
  }

  OutputAllImg(){
    console.log(123);
    return <Img array={this.state.array}/>
  }

  AddImg()
  {
    return(
      <div>
      <form onSubmit={e => {
        //this.setState({array: this.state.array.concat({url: e.target.URL.value, text: e.target.Text.value})});
        let array = [...this.state.array];
        array.push({url: e.target.URL.value, text: e.target.Text.value});
        this.setState({ array });

        e.preventDefault();
        }}>
        <input name="URL"/>
        <input name="Text"/>
        <input type="submit" value="Submit" />
      </form>
      {this.OutputAllImg()}
      </div>
    )
  }

  // OutputImg(obj)
  // {
  //   return(
  //       <img className="ImgStyle" width="100px" height="100px" src={obj.url} onClick={()=>{
  //         console.log("Img №" + obj.id);
  //         this.setState({urlImg:obj.url})
  //       }}/>
  //   )
  // }
  //
  // ShowImg(url)
  // {
  //   return <img width="200px" height="200px" src={url}/>;
  // }
  //
  // OutputAllImg(){
  //   return this.state.array.map((item) => this.OutputImg(item));
  // }

  render() {
    console.log("render");
    return (
      <div>{this.AddImg()}</div>
    );
  }
}


export default App;
