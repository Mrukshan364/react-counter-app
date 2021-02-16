import React, {useState} from 'react';


class SingleItem extends React.Component {

    state = {
        item: [0]
    }

    constructor(props) {
        super(props);
        this.state = {
            count: 0,

        };
    }

    addCounter() {
        this.setState({item: [...this.state.item, ""]})
    };

    render() {

        const counterPlus = () => {
            this.setState({count: this.state.count + 1})
        };

        const counterMinus = () => {
            if (this.state.count != 0) {
                this.setState({count: this.state.count - 1})
            }
        };

        return (

            <div className=" container-sm d-flex justify-content-center mt-5">
                <div className=" d-flex justify-content-center">
                    <button type="button" className="btn btn-dark btn-lg" onClick={counterPlus}>+</button>
                    <br></br>
                    <span className="h2 center mx-auto ml-5">{this.state.count}</span>
                    <br></br>
                    <button type="button" className="btn btn-dark btn-lg" disabled={this.state.count == 0}
                            onClick={counterMinus}>-
                    </button>
                    <br></br>
                    <button type="button" className="btn btn-warring btn-lg">Remove</button>
                </div>
            </div>
        );
    }
}

export default SingleItem;
