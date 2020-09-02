import React from 'react';

class DualCounter extends React.Component {
	constructor(){
		super()
		this.state = {
			counter : 0
		}
	}

	handleClick1(){
		this.setState( prevState =>
			{
				return {
					counter : prevState.counter + 1
				}
			}
		);
	};

	render()
	{
		return(
			<div>
				<h1>{this.state.counter}</h1>
				<button onClick = {this.handleClick1} >Up</button>
				<button>Down</button>
			</div>
		);
	}
}

export default DualCounter;
