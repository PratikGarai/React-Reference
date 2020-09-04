import React from 'react';

class TravelForm extends React.Component{

	constructor(){
		super();
		this.state = {
			firstName : "",
			lastName : ""
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
				<br />
				<br />
				<label for="lastName">Last Name : </label>
				<input 
					type="text"
					value = {this.state.lastName}
					placeholder = "Last Name"
					name = "lastName"
					onChange = {this.handleChange}
				/>
			</form>
			<br />
			<br />
			<hr />
			<p> Your Name is : <strong>{this.state.firstName} {this.state.lastName}</strong></p>
		</div>
		);
	}
}

export default TravelForm;
