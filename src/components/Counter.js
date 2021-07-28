import React from "react";

class Counter extends React.Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    updateCount = () => {
        this.setState(state => ({count: state.count + 1}))
    }
    render() {
        return (
            <button color={this.props.color} onClick={this.updateCount}>
                Count: {this.state.count}
            </button>
        )
            
        
    }
}

export default Counter;
