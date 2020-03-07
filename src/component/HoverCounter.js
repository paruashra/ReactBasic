import React, { Component } from 'react';
import withCounter from './withCounter';

class HoverCounter extends Component {

    render() {
        // const counter = this.state.count;
        // console.log(this.state.counter)
        const {count, incrementCount} = this.props;
        return(
        <button onMouseOver={incrementCount}>{this.props.name } Hover {count} times</button>
        );
    }
}
export default withCounter(HoverCounter,10);