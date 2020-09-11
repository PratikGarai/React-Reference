import React from 'react';

class LoginForm extends React.Component{

	constructor(){
		super();
		this.state = {
			username:"",
			password:"",
			age:"",
			gender:"",
			type : ""
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event)
	{
		const {name, value} = event.target;
		this.setState(prevState => {
			if (name==="age" && value<1)
				return prevState;
			return{
				[name] : value
			}
		});
	}

	handleSubmit(event)
	{
		window.alert("Good!");
	}

	render(){
		return(
			<div className="main-div">
			<form onSubmit={this.handleSubmit}>
				<label for="username">User Name : </label>
				<input 
					type="text"
					name="username"
					value={this.state.name}
					placeholder = "Your Name Here"
					onChange = {this.handleChange}
				/>
				<br />
				<br />
				<label for="password">Password : </label>
				<input 
					type="password"
					name="password"
					value={this.state.password}
					placeholder = "Your Password Here"
					onChange = {this.handleChange}
				/>
				<br />
				<br />
				<label for="age">Age (in years) : </label>
				<input 
					type="number"
					name="age"
					value={this.state.age}
					placeholder = "Your Age Here"
					onChange = {this.handleChange}
				/>
				<br />
				<br />
				<label for="gender">Gender : </label>
				<select 
					name="gender"
					onChange = {this.handleChange}
					value = {this.state.gender}>
					<option value="">--Your Gender Here --</option>
					<option value="M">Male</option>
					<option value="F">Female</option>
					<option value="O">Others</option>
				</select>
				<br />
				<br />
				<label for="type">Account Type : </label>
				<br />
				<input 
					type="radio"
					name="type"
					value="Admin"
					checked = {this.state.type==="Admin"}
					onChange = {this.handleChange}
				/>Admin<br />
				<input 
					type="radio"
					name="type"
					value="User"
					onChange = {this.handleChange}
				/>User
				<br />
				<br />
				<input 
					type="submit"
					value = "Register Now!"
				/>
			</form>
			</div>
		);
	}
}

export default LoginForm;
