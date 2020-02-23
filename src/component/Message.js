import React, {Component} from 'react';

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message:"Welcome Visitor",
            buttonMessage:"Subscribe"
        }
    }

    changeMessage () {
        this.setState ({
            message:"Thank you for subscribing!",
            buttonMessage:"Unsubscribe" 
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                  <button onClick={() => this.changeMessage()} >{this.state.buttonMessage}</button>
            </div>
        );
        
    }
}

export default Message;