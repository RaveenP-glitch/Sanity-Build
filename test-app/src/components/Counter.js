import React, { Component } from 'react'

export class Counter extends Component {

    state={
        counter:0
    }
    increment=()=>{
        let c=this.state.counter;
        c++;
        this.setState({counter:c});
    }
    componentDidMount(){
        console.log("CDM!!!!");
    }



  render() {
    console.log("Rendered!!!");
    return (
      <div>
       
          <h1>{this.state.counter}</h1>
          <button onClick={this.increment}>Increment</button>

      </div>
    )
  }
}

export default Counter