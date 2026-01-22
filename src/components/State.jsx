import { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0); // 0 is the initial value

	const handleIncrement = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={handleIncrement}>Increase</button>
		</div>
	);
}
export default Counter;