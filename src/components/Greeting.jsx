import React from 'react'

const Greeting = (props) => {
    console.log([props.name]);
	return <h2>Hello, {[props.name]}!</h2>;
};

export default Greeting;
