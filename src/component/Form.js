import React, { Component } from 'react'
class Form extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault()
        const {username, comments, topic} = this.state;
        alert(`${username}  ${comments}  ${topic}`);
    }

    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        });
    }

    handleTopicChange = event =>{
        this.setState({
            topic: event.target.value
        }); 
    }

    render() {
        const {username, comments, topic} = this.state;
        return (
            <form onSubmit ={this.handleSubmit} >
                <div>
                <label>Username </label>
                <input type="text" value ={username} onChange={this.handleUsernameChange}/>
                <br/>
                <label>comments </label>
                <textarea value ={comments} onChange={this.handleCommentsChange}/>
                <br/>
                <label>topic </label>
                <select value ={topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
						<option value="angular">Angular</option>
						<option value="vue">Vue</option>
                </select>
                <br/>
                <button type="submit">Submit</button>

                </div>
            </form>
        );
    }

}

export default Form;