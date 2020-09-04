import React from 'react';

class TravelForm extends React.Component{

	constructor(){
		super();
		this.state = {
			firstName : "",
			lastName : "",
			age : "",
			gender : ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(event)
	{
		const {name, value} = event.target;
		this.setState({
			[name] : value
		});
	}

	handleSubmit()
	{
		window.alert("Name : "+ this.state.firstName +" "+ this.state.lastName + "\n"+
			"Age : "+ this.state.age + "\n"+"Gender : "+this.state.gender);
			
	}

	render(){
		return(
		<div>
			<form onSubmit = {this.handleSubmit} >
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
				<br />
				<br />
				<label for="age">Age : </label>
				<input 
					type="number"
					value = {this.state.age}
					placeholder = "Age"
					name = "age"
					onChange = {this.handleChange}
				/>
				<br />
				<br />
				<label for="gender"> Gender : </label> <br/>
				<input 
					type="radio" 
					name="gender" 
					value="male" 
					onChange = {this.handleChange}
				/> Male
				<br />
				<input 
					type="radio" 
					name="gender" 
					value="female" 
					onChange = {this.handleChange}
				/> Female
				<br />
				<br />
				<input type="submit" value="Submit!"></input>
			</form>
			<br />
			<br />
			<hr />
			<h1> Entered Information </h1>
			<p> Your Name is : <strong>{this.state.firstName} {this.state.lastName}</strong></p>
			<p> Your age is : <strong>{this.state.age}</strong></p>
			<p> Gender : <strong>{this.state.gender}</strong></p>
		</div>
		);
	}
}

export default TravelForm;
