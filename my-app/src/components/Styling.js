import React from 'react';

const Styling = ()=> {
	const styles = {
		color : 'red',
		fontSize : 50,
		backgroundColor : 'cyan'
	}
	return (
		<div>
			<br/>
			<p style={styles}>This is a styled line</p>
			<br/>
		</div>
	);
}

export default Styling;
