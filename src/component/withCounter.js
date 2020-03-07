import React from 'react'

const withCounter = (WrappedComponent, increment) =>{
    class WithCounter extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count:0
            };
        }
        incrementCount =() => {
            this.setState(prevState => {
                return {count: prevState.count+increment}
            });
            // console.log("clicked  ", this.state.count)
        }
        render() {
            return(
<WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          name ="Paresh"
				/>
            );
        }
    }
    return WithCounter
}

export default withCounter;