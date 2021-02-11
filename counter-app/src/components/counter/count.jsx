import React, { useState } from 'react';


class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }

    render() {
        const counterPlus = () => {
            this.setState({ count: this.state.count + 1 })
          };

          const counterMinus = () => {
            if(this.state.count != 0){
                this.setState({ count: this.state.count - 1 })
            }
          };

      return (<div className="card container-sm d-flex justify-content-center mt-5">
          <h1 className="display-5 mx-auto pb-3">Counter App</h1>
        <span className="h2 center mx-auto">{this.state.count}</span>
           <br></br>
            <button type="button" className="btn btn-dark btn-lg" onClick={counterPlus}>+</button>
            <br></br>
            <button type="button" className="btn btn-dark btn-lg" disabled={this.state.count == 0} onClick={counterMinus}>-</button>
            <br></br>
               
           </div>) 
    }
  }


export default Counter;
