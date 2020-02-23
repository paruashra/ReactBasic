import React from 'react'

 const FunctionClick = () => {

    const clickHandler = () => {
        console.log('Button clicked');
        
    }
    return (
        <div>
            <button onClick={clickHandler}>Click the button</button>
        </div>
    );
}

export default FunctionClick;