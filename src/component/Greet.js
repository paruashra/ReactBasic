import React from 'react';

const greet = props => {
    return (
    <div>
        <h1>Hello {props.name} a.k.a {props.heroName}</h1>
        {props.children}
    </div>
    );
}


export default greet;
