import React, {useState, useEffect} from 'react';

function SimpleHooks(props)
{
	const [counter , setCounter] = useState(0);
	const [side, setSide] = useState(0);
	
	useEffect(()=>{
		window.alert("Did something to count");
	}, [counter] );

	useEffect(()=>{
		window.alert("Did something to side");
	}, [side] );

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
		if(nm=="up") 		setCounter(counter+1);
		else if (nm=="down") 	setCounter(counter-1);
		else if (nm=="right") 	setSide(side+1);
		else 			setSide(side-1);
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
			<br />
			<br />
			<button name="left" style={bstyles} onClick={handler}>
				Left
			</button>
			<div style={styles}>
				{side}
			</div>
			<button name="right" style={bstyles} onClick={handler}>
				Right
			</button>
		</div>
	);
}

export default SimpleHooks;
