import React from 'react';

class DualCounter extends React.Component {
	constructor(){
		super()
		this.state = {
			counter : 0
		}
		this.handleClick1 = this.handleClick1.bind(this);
		this.handleClick2 = this.handleClick2.bind(this);
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

	handleClick2(){
		this.setState( prevState =>
			{
				return {
					counter : prevState.counter - 1
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
				<button onClick = {this.handleClick2} >Down</button>
			</div>
		);
	}
}

export default DualCounter;
