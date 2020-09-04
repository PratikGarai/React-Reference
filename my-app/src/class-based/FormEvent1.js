import React from 'react';

class FormEvent1 extends React.Component
{
	constructor()
	{
		super();
		this.state = {
			text:"???"
		}
		this.handler = this.handler.bind(this);
	}

	handler(event){
		this.setState({
			text : event.target.value==""?"???":event.target.value
		});
	}

	render()
	{
		return(
			<div>
				<input type="text" placeholder="Your Name" onChange={this.handler} />
				<p>{this.state.text}</p>
			</div>
		);
	}
}

export default FormEvent1;
