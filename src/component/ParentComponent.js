import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor() {
        super();
        this.state = {
            parentName:'Parent'
        };
    }
    greetHanlder = (childName) => {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return(
            <div>
                <ChildComponent greetHanlder={this.greetHanlder} />
            </div>
        );
    }
}

export default ParentComponent;