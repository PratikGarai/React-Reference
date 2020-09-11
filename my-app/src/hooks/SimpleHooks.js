import React, {useState} from 'react';

function SimpleHooks(props)
{
	const [counter , setCounter] = useState(0);

	const styles = {
		backgroundColor : "cyan",
		display : "inline-block",
		fontSize : 30
	}
	return(
		<div style={styles}>
			Hello
		</div>
	);
}

export default SimpleHooks;
