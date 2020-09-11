import React, {useState} from 'react';

function SimpleHooks(props)
{
	const [counter , setCounter] = useState(0);

	const styles = {
		display : "inline-block",
		fontSize : 30
	}

	const bstyles = {
		height : 50,
		borderRadius : 5,
		fontSize : 30,
		marginLeft : 20,
		marginRight : 20
	}

	function handler(event){
		const nm = event.target.name;
		if(nm=="up") 	setCounter(counter+1);
		else 	setCounter(counter-1);
	}

	return(
		<div>
			<button name="up" style={bstyles} onClick={handler}>
				UP
			</button>
			<div style={styles}>
				{counter}
			</div>
			<button name="down" style={bstyles} onClick={handler}>
				DOWN
			</button>
		</div>
	);
}

export default SimpleHooks;
