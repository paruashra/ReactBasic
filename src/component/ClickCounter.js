import React, { Component } from 'react';
import withCounter from './withCounter';

class ClickCounter extends Component {
 

    render() {
        // const counter = this.state.count;
        // console.log(this.state.counter)
        const {count, incrementCount} = this.props;
        return(
        <button onClick={incrementCount}>{this.props.name } Clicked {count} times</button>
        );
    }
}
export default withCounter(ClickCounter,5);