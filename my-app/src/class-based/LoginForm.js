import React from 'react';

class LoginForm extends React.Component{

	constructor(){
		super();
		this.state = {
			username:"",
			password:"",
			age:"",
			gender:""
		}
		this.handleChange = this.handleChange.bind(this)
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
			<div className="main-div">
			<form>
				<input 
					type="text"
					name="username"
					value={this.state.name}
					placeholder = "Your Name Here"
					onChange = {this.handleChange}
				/>
			</form>
			</div>
		);
	}
}

export default LoginForm;
