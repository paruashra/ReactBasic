import React from 'react'

const ChildComponent = (props) => {
    return(
        <div>
            <button onClick={() => props.greetHanlder('Child')}>Greet Parent</button>
        </div>
    );
}
export default ChildComponent;