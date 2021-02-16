import React, {useState} from 'react';
import SingleItem from './SingleItem';

class Counter extends React.Component {

    state = {
        item: [0]
    }

    addCounter() {

        this.setState({item: [...this.state.item, ""]})

    };

    render() {

        return (
            <div className="card container-sm d-flex justify-content-center mt-5">

                <button type="button" className="btn btn-dark btn-lg mb-20" onClick={(e) => this.addCounter(e)}>ADD
                    Counter
                </button>
                <div>

                    {

                        this.state.item.map((item, index) => {
                            return (
                                <SingleItem key={index}/>
                            )
                        })
                    }

                </div>

            </div>);
    }
}

export default Counter;
