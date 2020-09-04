import React from 'react';

class TravelForm extends React.Component{

	constructor(){
		super();
		this.state = {
			firstName : ""
		};
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(event)
	{
		const {name, value} = event.target;
		this.setState({
			[name] : value
		});
	}

	render(){
		return(
		<div>
			<form>
				<label for="firstName">First Name : </label>
				<input 
					type="text"
					value = {this.state.firstName}
					placeholder = "First Name"
					name = "firstName"
					onChange = {this.handleChange}
				/>
			</form>
		</div>
		);
	}
}

export default TravelForm;
