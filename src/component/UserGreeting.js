import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: true
        }
    }
    // #if-else approach
    render() {
        // if(this.state.isLoggedIn) {
        //     return <div>Welcome Paresh</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }

         // #element-variables approach
        //  let message = "Welcome Guest";
        //  if(this.state.isLoggedIn) {
        //     message = "Welcome Paresh";
        //  }
        //  return message;
        // return this.state.isLoggedIn? <div>Welcome Paresh</div> : <div>Welcome Guest</div>;

        // #short-circuit-operator-approach
        return this.state.isLoggedIn && <div>Welcome Paresh</div>

    }
}
export default UserGreeting;